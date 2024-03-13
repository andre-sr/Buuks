//VARIAVEIS
//const imgBookCover = document.querySelector('')
///const btnSearch = document.querySelector('#btn-search')
//const btnShowMore = document.querySelector('#btn-show-more')
const modalElement = document.querySelector('.modal')

//EVENTOS
document.addEventListener('btnSearchPress', () => {
    eventListenerCreator()
})

document.addEventListener('btnShowMorePress', () => {
    eventListenerCreator()
})

//FUNCOES
function eventListenerCreator() {
    //debugger
    const liAll = document.querySelectorAll('li')

    for (let i = 0; i < liAll.length; i++) {
        liAll[i].addEventListener('click', () => {
            console.log('ai')
            createModal()
        })
    }
}

function createModal() {
    modalElement.classList.toggle('hidden')
}

