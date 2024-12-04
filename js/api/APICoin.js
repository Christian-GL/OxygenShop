
class APICoin extends API {

    constructor(dom) {
        super('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
        this.dom = dom
        this.getExchange(this.processData)
    }

    processData(json) {
        try {
            let usd = 1; usd = usd.toFixed(2)
            let eur = json.usd.eur.toFixed(2)
            let gbp = json.usd.gbp.toFixed(2)

            const coinConversions = new CoinConversions(usd, eur, gbp)
            const coinConverter = new CoinConverter(coinConversions)
            coinConverter.switchCoinType()

        }
        catch (error) {
            console.log(error)
            alert('Formato de JSON incorrecto o error en el código interno')
        }
    }

}