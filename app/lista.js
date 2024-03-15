//VARIAVEIS
let bookList = JSON.parse(localStorage.getItem('bookList')) || []

//EVENTOS 


//FUNCOES

function bookToList(bookId, bookElement) {
    const bookIdTest = bookList.find(bookList => bookList.id === bookId) || null

    if (bookIdTest) {
        removeBook(bookId, bookElement)
        return
    }
    addBook(bookId,bookElement)
}

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

function constructor() {
    for (let i = 0; i < bookList.length; i++) {

        criarElemento(bookList[i])
    }
}

//LOAD PAGE
dealWithAPIcall ()