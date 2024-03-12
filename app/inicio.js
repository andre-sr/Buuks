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
    APIdata = null
    startIndex = 0
    while (ulBookList.firstChild) {
        ulBookList.removeChild(ulBookList.firstChild)
    }
    APIcall ()
})

btnShowMore.addEventListener('click', async () => {
    APIcall ()
})

//FUNCOES
async function APIcall () {
    APIdata = await getAPIdata()

    for (let i = 0; i < APIdata.items.length; i ++) {
        console.log(i)
        let li = criarElemento(APIdata.items[i])
        ulBookList.append(li)
    }
        
    startIndex += maxResult 
}

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
    const textContentP = obj.volumeInfo.description
    let imgUrl;

    if ('imageLinks' in obj.volumeInfo) {
         imgUrl = obj.volumeInfo.imageLinks.thumbnail
    } else {
         imgUrl ='/assets/img/Placeholder-cover-small.jpg'
    }
    
    const li = document.createElement('li')

    const div1 = document.createElement('div')
    div1.classList.add('book-cover')
    const img = document.createElement('img')
    img.setAttribute('src', imgUrl)
    const button = document.createElement('button')
    button.textContent = '+'

    div1.append(img)
    div1.append(button)
    li.append(div1)

    const div2 = document.createElement('div')
    div2.classList.add('book-info')
    const h2 = document.createElement('h2')
    h2.textContent = textContentH2
    const p = document.createElement('p')
    p.textContent = textContentP

    div2.append(h2)
    div2.append(p)
    li.append(div2)

    return li
}