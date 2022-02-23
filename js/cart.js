const cart = () => {
    const buttonCart = document.querySelector('.button-cart')
    const modalCart = document.querySelector('#modal-cart')
    const modalClose = document.querySelector('.modal-close')

    buttonCart.addEventListener('click', () => {
        modalCart.style.display = 'flex'
    })

    modalClose.addEventListener('click', () => {
        modalCart.style.display = ''
    })

    modalCart.addEventListener('click', (evt) => {
        const target = evt.target

        if (target.classList.contains('overlay')) {
            modalCart.style.display = ''
        }
    })


}

cart()