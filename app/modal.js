//VARIAVEIS
const modalElement = document.querySelector('.modal')
const modalContainerElement = document.querySelector('.modal-container')
const btnX = document.querySelector('#btn-x')
let bookData;

//EVENTOS
document.addEventListener('btnSearchPress', () => {
    eventListenerCreator()
})

document.addEventListener('btnShowMorePress', () => {
    eventListenerCreator()
})

btnX.addEventListener('click', () => {
    modalElement.classList.add('hidden')
})

//FUNCOES
function eventListenerCreator() {
    const imgBookCoverElement = document.querySelectorAll('.img-book-cover')
    const liAll = document.querySelectorAll('li')
    const btnAddBook = document.querySelectorAll('.btn-add-book')

    for (let i = 0; i < liAll.length; i++) {
        imgBookCoverElement[i].addEventListener('click', () => {
            createModal(liAll[i].getAttribute('book-id'))
        })

        btnAddBook[i].addEventListener('click', () => {
            bookToList(liAll[i].getAttribute('book-id'), liAll[i])
        })
    }
}

async function createModal(bookId) {
    bookData = await getAPIbookData(bookId)
    modalElement.classList.toggle('hidden')
    creatorModal()
}

async function getAPIbookData(bookId) {
    let APIurl = `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${APIkey}`

    let res = await fetch(APIurl)
    let data = await res.json()

    return data
}

function creatorModal() {
    while (modalContainerElement.firstChild) {
        modalContainerElement.removeChild(modalContainerElement.firstChild)
    }
    let averageRating; 
    let imgUrl;

    if ('averageRating' in bookData.volumeInfo) {
        averageRating = bookData.volumeInfo.averageRating
    } else {
        averageRating ='-'
    }
    
    if ('imageLinks' in bookData.volumeInfo) {
        imgUrl = bookData.volumeInfo.imageLinks.thumbnail
    } else {
        imgUrl = '/assets/img/Placeholder-cover-small.jpg'
    }

    const divHeader = document.createElement('div')
    divHeader.classList.add('modal-container-header')

    const divImg = document.createElement('div')
    divImg.classList.add('modal-img')
    const img = document.createElement('img')
    img.setAttribute('src', imgUrl)

    divImg.append(img)
    divHeader.append(divImg)

    const divBookInfo = document.createElement('div')
    divBookInfo.classList.add('modal-book-info')
    const divBookInfoMeta = document.createElement('div')
    divBookInfoMeta.classList.add('modal-book-info-meta')

    const h1 = document.createElement('h1')
    h1.textContent = bookData.volumeInfo.title
    const h2 = document.createElement('h2')
    h2.textContent =  bookData.volumeInfo.authors
    const span = document.createElement('span')
    span.innerHTML = `${averageRating}<i class="fa-solid fa-star"></i>`

    const aPlayBooksBtn = document.createElement('a')
    aPlayBooksBtn.classList.add('modal-btn-play-books')
    aPlayBooksBtn.setAttribute('href', bookData.volumeInfo.infoLink)
    aPlayBooksBtn.setAttribute('target', '_blank')

    const imgPlayBooksBtn = document.createElement('img')
    imgPlayBooksBtn.setAttribute('src', '/assets/img/play-books-logo-small.png')

    aPlayBooksBtn.append(imgPlayBooksBtn)

    divBookInfoMeta.append(h1, h2,span)
    divBookInfo.append(divBookInfoMeta)
    divBookInfo.append(aPlayBooksBtn)


    divHeader.append(divBookInfo)

    const divDescription = document.createElement('div')
    divDescription.classList.add('modal-container-discription')
    
    divDescription.innerHTML = bookData.volumeInfo.description


    modalContainerElement.append(divHeader)
    modalContainerElement.append(divDescription)
}