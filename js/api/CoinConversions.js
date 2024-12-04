
class CoinConversions {

    constructor(usd, eur, gbp) {
        this._usd = usd
        this._eur = eur
        this._gbp = gbp
    }

    get getUsd() {
        return this._usd
    }
    get getEur() {
        return this._eur
    }
    get getGbp() {
        return this._gbp
    }
}