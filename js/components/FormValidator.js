
class FormValidator {

    constructor(idBtn, idInputName, idInputEmail, idCheckbox) {
        this.idBtn = idBtn
        this.idInputName = idInputName
        this.idInputEmail = idInputEmail
        this.idCheckbox = idCheckbox
    }

    trySendAllValidations() {
        const btnSend = document.getElementById(this.idBtn)
        const inputName = document.getElementById(this.idInputName)
        const inputEmail = document.getElementById(this.idInputEmail)
        const checkbox = document.getElementById(this.idCheckbox)

        btnSend.addEventListener('click', () => {
            if (this.checkAllValidations(inputName, inputEmail, checkbox)) {
                this.sendData(inputName.value, inputEmail.value)
                alert('Enviado con exito')
            }
        })
    }

    nameValidation(inputName) {
        let name = inputName.value

        let validated = (name.length >= 2 && name.length <= 100) ? true : false
        return validated
    }

    emailValidation(inputEmail) {
        let email = inputEmail.value
        const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        let validated = (regex.test(email)) ? true : false
        return validated
    }

    checkboxValidation(checkbox) {
        let checked = checkbox.checked

        let validated = (checked) ? true : false
        return validated
    }

    checkAllValidations(inputName, inputEmail, checkbox) {
        const errorMessageName = document.getElementById('contact__container-right__error-message--name')
        const errorMessageEmail = document.getElementById('contact__container-right__error-message--email')

        if (!this.nameValidation(inputName)) {
            // alert('El nombre debe tener entre 2 y 100 carácteres')
            errorMessageName.innerHTML = `El nombre debe tener entre 2 y 100 carácteres`
            inputName.classList.add('contact__container-right__input__border1pxRed-js')
            return false
        }
        inputName.classList.remove('contact__container-right__input__border1pxRed-js')
        errorMessageName.innerHTML = `&nbsp;`
        if (!this.emailValidation(inputEmail)) {
            // alert('Formato de email incorrecto')
            errorMessageEmail.innerHTML = `Formato de email incorrecto`
            inputEmail.classList.add('contact__container-right__input__border1pxRed-js')
            return false
        }
        inputEmail.classList.remove('contact__container-right__input__border1pxRed-js')
        errorMessageEmail.innerHTML = `&nbsp;`
        if (!this.checkboxValidation(checkbox)) {
            alert('Falta marcar el checkbox')
            checkbox.classList.add('contact__container-right__container-terms__checkbox__border2pxRed-js')
            return false
        }
        checkbox.classList.remove('contact__container-right__container-terms__checkbox__border2pxRed-js')

        return true
    }

    sendData(title, body) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
    }

}