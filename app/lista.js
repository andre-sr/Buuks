//VARIAVEIS
const ulUserBookList = document.querySelector('#user-book-list')

let bookList = JSON.parse(localStorage.getItem('bookList')) || []

//EVENTOS 


//FUNCOES



function addBook(bookId,bookElement) {
    console.log('FLAMENGO')

    const book = {
        id: bookId,
    }

    bookList.push(book)
    bookElement.childNodes[0].childNodes[1].innerHTML = '<i class="fa-solid fa-minus"></i>'
}

function removeBook(bookId,bookElement) {
    console.log("hahahahaha")
    bookElement.childNodes[0].childNodes[1].innerHTML = '<i class="fa-solid fa-plus"></i>'

    for (let i = 0; i < bookList.length; i++) {
        if (bookList[i].id === bookId){
            
            bookList.splice(i, 1)
            break
        }
    }    
}

function sendToLocalStorage() {
    const bookListString = JSON.stringify(bookList)
    console.log(bookListString)
    localStorage.setItem('bookList', bookListString)
}

async function constructor() {

    for (let i = 0; i < bookList.length; i++) {
        bookData = await getAPIbookData(bookList[i].id)
        const li = criarElemento(bookData)
        ulUserBookList.append(li)
    }
    eventListenerCreator()
}

async function singleBookCall () {
   // const bookInfo;

   

}

//LOAD PAGE
constructor()