//VARIAVEIS
const btnSearch = document.querySelector('#btn-search')
const ulBookList = document.querySelector('#book-list')

//EVENTOS
btnSearch.addEventListener('click', () => {
    const elementoCardBook = criarElemento()
    ulBookList.append(elementoCardBook)
})

//FUNCOES
function criarElemento() {
    const li = document.createElement('li')

    const div1 = document.createElement('div')
    div1.classList.add('book-cover')
    const img = document.createElement('img')
    img.setAttribute('src', 'https://books.google.com/books/content?id=RhqJWjZ_6o4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')
    const button = document.createElement('button')
    button.textContent = '+'

    div1.append(img)
    div1.append(button)
    li.append(div1)

    const div2 = document.createElement('div')
    div2.classList.add('book-info')
    const h2 = document.createElement('h2')
    h2.textContent = 'O Guia do Mochileiro das Galaxias'
    const p = document.createElement('p')
    p.textContent = 'Considerado um dos maiores clássicos da literatura de ficção científica, O Guia do Mochileiro das Galáxias vem encantando gerações de leitores ao redor do mundo com seu humor afiado. Este é o primeiro título da famosa série escrita por Douglas Adams, que conta as aventuras espaciais do inglês Arthur Dent e de seu amigo Ford Prefect. A dupla escapa da destruição da Terra pegando carona numa nave alienígena, graças aos conhecimentos de Prefect, um E.T. que vivia disfarçado de ator desempregado enquanto fazia pesquisa de campo para a nova edição do Guia do Mochileiro das Galáxias, o melhor guia de viagens interplanetário. Mestre da sátira, Douglas Adams cria personagens inesquecíveis e situações mirabolantes para debochar da burocracia, dos políticos, da \"alta cultura\" e de diversas instituições atuais. Seu livro, que trata em última instância da busca do sentido da vida, não só diverte como também faz pensar.'

    div2.append(h2)
    div2.append(p)
    li.append(div2)

    return li
}