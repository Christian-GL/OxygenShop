
class PersonsAPI extends API {

    constructor(dom) {
        super('https://fakerapi.it/api/v2/persons?_quantity=10&_gender=female&_birthday_start=2005-01-01')
        this.dom = dom
        this.getPersonas(this.processInfo)
    }

    processInfo(json) {
        try {
            // console.log('JSON -->')
            // console.log(json)

            let x = json.data.map((persona, index) =>
                index % 2 === 0 ?
                    // new Persona(persona.firstname, persona.lastname) :           // <-- Para el "JSON filtrado"
                    // new Panadero(persona.firstname, persona.lastname, 'M'))
                    dom.append(new Persona(persona.firstname, persona.lastname).returnHtmlCard()) :
                    dom.append(new Panadero(persona.firstname, persona.lastname, 'Soy Panadero').returnHtmlCard()))

            // console.log('JSON filtrado --->')
            // console.log(x)

            return x
        }
        catch(error) {
            console.log(error)
            alert('Formato de JSON incorrecto o error en el código interno')
        }
    }

}