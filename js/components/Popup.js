
class Popup {

    constructor(idPopup) {
        this.idPopup = idPopup
        this.popupContainer = document.getElementById('popup')
        sessionStorage.setItem('displayed', 'false')

        this.windowsEvents()
        this.documentEvents()
        this.elementEvents()
    }

    windowsEvents() {
        const scroll = new PercentageScroller()

        window.addEventListener('scroll', () => {
            if (scroll.getPercentageScroll() >= 25 && sessionStorage.getItem('displayed') != 'true') {
                this.popupContainer.classList.add('popup-js')
                sessionStorage.setItem('displayed', 'true')
            }
        })
        window.setTimeout(() => {
            if (sessionStorage.getItem('displayed') != 'true') {
                this.popupContainer.classList.add('popup-js')
                sessionStorage.setItem('displayed', 'true')
            }
        }, 5000);
    }

    documentEvents() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.popupContainer.classList.remove('popup-js')
            }
        })
        document.addEventListener('click', (event) => {
            if (!this.popupContainer.contains(event.target)) {
                this.popupContainer.classList.remove('popup-js')
            }
        })
    }

    elementEvents() {
        const inputEmail = document.getElementById('popup__email')
        const errorMessage = document.getElementById('popup__error-message')
        const btnSuscribe = document.getElementById('popup__btn')
        const imgX = document.getElementById('popup__img-x')
        const form = new FormValidator(null, null, 'popup__email', null)

        imgX.addEventListener('click', () => {
            this.popupContainer.classList.remove('popup-js')
        })
        btnSuscribe.addEventListener('click', () => {
            if (form.emailValidation(inputEmail)) {
                form.sendData('emailID', inputEmail.value)
                alert('Sucripción realizada con exito')
                this.popupContainer.classList.remove('popup-js')
                errorMessage.innerHTML = `&nbsp;`
            }
            else {
                errorMessage.innerHTML = `Formato de email incorrecto`
            }
        })
    }

}