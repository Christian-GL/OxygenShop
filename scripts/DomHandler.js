
class DomHandler {

    constructor(id) {
        this.id = id
    }

    append(htmlElement) {
        const parentElement = document.getElementById(this.id)
        parentElement.appendChild(htmlElement)
    }
}