
class FormValidator {

    constructor(idBtn, idInputName, idInputEmail, idCheckbox) {
        this.idBtn = idBtn
        this.idInputName = idInputName
        this.idInputEmail = idInputEmail
        this.idCheckbox = idCheckbox
    }

    tryValidation() {
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
        if (!this.nameValidation(inputName)) {
            alert('El nombre debe tener entre 2 y 100 carácteres')
            inputName.style.border = '1px solid red'
            return false
        }
        if (!this.emailValidation(inputEmail)) {
            alert('Formato de email incorrecto')
            inputEmail.style.border = '1px solid red'
            return false
        }
        if (!this.checkboxValidation(checkbox)) {
            alert('Falta marcar el checkbox')
            return false
        }

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
            .then((json) => console.log(json));
    }

}