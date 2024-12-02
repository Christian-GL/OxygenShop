
class Persona {

    constructor(name, surnames) {
        this.name = name
        this.surnames = surnames
    }

    returnHtmlCard() {
        const card = document.createElement('div')
        const p = document.createElement('p')
        p.innerText = `${this.name} ${this.surnames}`
        card.appendChild(p)
        
        return card
    }
}