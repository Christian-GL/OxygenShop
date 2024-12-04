
class Popup {

    popupControl() {
        const popupContainer = document.getElementById('popup')
        const inputEmail = document.getElementById('popup__email')
        const btnSuscribe = document.getElementById('popup__btn')
        const imgX = document.getElementById('popup__img-x')
        const scroll = new PercentageScroller()
        const form = new FormValidator(null, null, 'popup__email', null)
        sessionStorage.setItem('displayed', 'false')

        window.addEventListener('scroll', () => {
            if (scroll.getPercentageScroll() >= 25 && sessionStorage.getItem('displayed') != 'true') {
                popupContainer.classList.add('popup-js')
                sessionStorage.setItem('displayed', 'true')
            }
        })
        window.setTimeout(() => {
            if (sessionStorage.getItem('displayed') != 'true') {
                popupContainer.classList.add('popup-js')
                sessionStorage.setItem('displayed', 'true')
            }
        }, 5000);

        imgX.addEventListener('click', () => {
            popupContainer.classList.remove('popup-js')
        })
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                popupContainer.classList.remove('popup-js')
            }
        })
        document.addEventListener('click', (event) => {
            if (!popupContainer.contains(event.target)) {
                popupContainer.classList.remove('popup-js')
            }
        })
        // window.addEventListener('scroll', scrollFunction)
        // imgX.addEventListener('click', btnXFunction)
        // document.addEventListener('keydown', escKeyFunction)
        // document.addEventListener('click', clickOutsideFunction)

        btnSuscribe.addEventListener('click', () => {
            if (form.emailValidation(inputEmail)) {
                form.sendData('emailID', inputEmail.value)
                alert('Sucripción realizada con exito')
                popupContainer.classList.remove('popup-js')
            }
            else {
                alert('Formato de email incorrecto')
            }
        })
    }

}