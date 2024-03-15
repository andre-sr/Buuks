//VARIAVEIS
let bookList = [] 

//EVENTOS 


//FUNCOES

function bookToList(bookId, bookElement) {
    if (bookList.includes(bookId)) {
        removeBook(bookId, bookElement)
        return
    }
    addBook(bookId,bookElement)
}

function addBook(bookId,bookElement) {
    console.log('FLAMENGO')

    const book = {
        id: bookId
    }

    bookList.push(bookId)
    bookElement.childNodes[0].childNodes[1].innerHTML = '<i class="fa-solid fa-minus"></i>'
}

function removeBook(bookId,bookElement) {
    console.log("hahahahaha")
    bookElement.childNodes[0].childNodes[1].innerHTML = '<i class="fa-solid fa-plus"></i>'

    const indexToRemove = bookList.indexOf(bookId)
    bookList.splice(indexToRemove, 1);
    
}