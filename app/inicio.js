//VARIAVEIS
const APIkey = "AIzaSyBFu-GXGYZ9_-BoUvyd3--CsXcQKmA-J6M" 
const searchbar = document.querySelector('#search-bar')
const btnSearch = document.querySelector('#btn-search')
const ulBookList = document.querySelector('#book-list')
const btnShowMore = document.querySelector('#btn-show-more')



const maxResult = 25
let startIndex = 0
let APIdata


//EVENTOS
btnSearch.addEventListener('click', async () => {
    dealWithAPIcall ()
})

searchbar.addEventListener('keydown', async (event) => {
    if (event.key === "Enter") {
        dealWithAPIcall ()
    }   
})

btnShowMore.addEventListener('click', async () => {
    await APIcall ()

    const evento = new CustomEvent('btnShowMorePress')
    document.dispatchEvent(evento)
})

//FUNCOES
async function dealWithAPIcall () {
    APIdata = null
    startIndex = 0
    while (ulBookList.firstChild) {
        ulBookList.removeChild(ulBookList.firstChild)
    }
    await APIcall ()

    const evento = new CustomEvent('btnSearchPress')
    document.dispatchEvent(evento)
}

async function APIcall () {
    APIdata = await getAPIdata()

    for (let i = 0; i < APIdata.items.length; i ++) {
        let li = criarElemento(APIdata.items[i])
        ulBookList.append(li)
    }
        
    startIndex += maxResult 
}
//`https://www.googleapis.com/books/v1/volumes?q=naruto&key=AIzaSyBFu-GXGYZ9_-BoUvyd3--CsXcQKmA-J6M`
//`https://www.googleapis.com/books/v1/volumes/SHsEEAAAQBAJ?key=AIzaSyBFu-GXGYZ9_-BoUvyd3--CsXcQKmA-J6M`
//https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=SHsEEAAAQBAJ&key=AIzaSyBFu-GXGYZ9_-BoUvyd3--CsXcQKmA-J6M
async function getAPIdata () {
    const searchValue = searchbar.value
    let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&startIndex=${startIndex}&maxResults=${maxResult}&key=${APIkey}`

    let res = await fetch(apiUrl)
    let data = await res.json()

    return data
}

function callAPI() {
    
}

function criarElemento(obj) {
    const textContentH2 = obj.volumeInfo.title
    let authors = obj.volumeInfo.authors
    let averageRating; 
    let imgUrl;

    if ('imageLinks' in obj.volumeInfo) {
        imgUrl = obj.volumeInfo.imageLinks.thumbnail
    } else {
        imgUrl ='/assets/img/Placeholder-cover-small.jpg'
    }

    if ('averageRating' in obj.volumeInfo) {
        averageRating = obj.volumeInfo.averageRating
    } else {
        averageRating ='-'
    }
    
    const li = document.createElement('li')
    li.setAttribute('book-id', obj.id)
    const div1 = document.createElement('div')
    div1.classList.add('book-cover')
    const img = document.createElement('img')
    img.classList.add('img-book-cover')
    img.setAttribute('src', imgUrl)
    const button = document.createElement('button')
    button.classList.add('btn-add-book')
    button.innerHTML = '<i class="fa-solid fa-plus"></i>'

    div1.append(img)
    div1.append(button)
    li.append(div1)

    const div2 = document.createElement('div')
    div2.classList.add('book-info')
    const h2 = document.createElement('h2')
    h2.textContent = textContentH2
    const span = document.createElement('span')
    span.innerHTML = `${averageRating}<i class="fa-solid fa-star"></i>`
    const p = document.createElement('p')
    p.textContent = authors
    span.append(p)

    div2.append(h2)
    div2.append(span)
    li.append(div2)

    return li
}