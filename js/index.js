let image = document.querySelector('#hamburguer')
let colunavoltar = document.querySelector('#coluna')

function menu() {
    if (coluna.style.display == 'block') {
        colunavoltar.classList = 'back'
        coluna.style.display = 'inherit'
        image.src = 'src/imgs/menu.png'
    } else {
        coluna.style.display = 'block'
        colunavoltar.classList.remove('back')
        image.src = 'src/imgs/xsolid.png'
    }
} 