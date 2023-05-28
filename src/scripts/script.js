/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function handModal(){

    const button = document.querySelector('.header__button')
    const modalController = document.querySelector('.modal__controller')

    button.addEventListener('click', function() {
        modalController.showModal()

    closeModal()
    })
}

function closeModal(){
    
    const button = document.querySelector('.modal__close')
    const modalController = document.querySelector('.modal__controller')
    
    button.addEventListener('click', function(){
        modalController.close()
    })
}

handModal()