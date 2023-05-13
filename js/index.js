let colunavoltar = document.querySelector('#coluna')

function menu() {
    if (coluna.style.display == 'block') {
        colunavoltar.classList.add('back')
        coluna.style.display = 'inherit'
    } else {
        coluna.style.display = 'block'
        colunavoltar.classList.remove('back')
    }
}