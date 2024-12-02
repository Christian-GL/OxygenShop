
class API {

    constructor(url) {
        this.url = url
    }

    async getPersonas(processInfo) {

        const request = await fetch(this.url)
        
        if (request.ok) {
            try {
                const json = await request.json()
                processInfo(json)
            }
            catch (error) {
                console.log('Error con la respuesta de la API')
                alert(error)
            }
        }
        else {
            console.log('Error en la llamada a la api')
        }
    }

}