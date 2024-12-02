
class Panadero extends Persona {

    constructor(name, surnames, tipo) {
        super(name, surnames)
        this.tipo = tipo
    }

    returnHtmlCard() {
        const card = document.createElement('div')
        const p = document.createElement('p')
        const p2 = document.createElement('p')
        p.innerText = `${this.name} ${this.surnames}`
        p2.innerText = this.tipo
        card.appendChild(p)
        card.appendChild(p2)
        return card
    }
}