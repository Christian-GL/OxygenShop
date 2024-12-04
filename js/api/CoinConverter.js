
class CoinConverter {

    constructor(coinConversions) {
        this.coinConversions = coinConversions
    }

    switchCoinType() {
        const selectType = document.getElementById('prices__coin-type')
        const priceBasic = document.getElementById('prices__card__container-plan__price--basic')
        const priceProfessional = document.getElementById('prices__card__container-plan__price--professional')
        const pricePremium = document.getElementById('prices__card__container-plan__price--premium')
        const numberBasic = priceBasic.innerHTML.slice(1)
        const numberProfessional = priceProfessional.innerHTML.slice(1)
        const numberPremium = pricePremium.innerHTML.slice(1)

        window.addEventListener('change', () => {
            let type = parseInt(selectType.value)
            let symbol
            let value
            switch (type) {
                case 1:
                    symbol = '$'
                    value = this.coinConversions.getUsd
                    break;
                case 2:
                    symbol = '€'
                    value = this.coinConversions.getEur
                    break;
                case 3:
                    symbol = '£'
                    value = this.coinConversions.getGbp
                    break;
                default:
                    break;
            }

            let basicConversion = (numberBasic * value).toFixed(2)
            let professionalConversion = (numberProfessional * value).toFixed(2)
            let premiumConversion = (numberPremium * value).toFixed(2)

            priceBasic.innerHTML = `${symbol}${basicConversion}`
            priceProfessional.innerHTML = `${symbol}${professionalConversion}`
            pricePremium.innerHTML = `${symbol}${premiumConversion}`
        })
    }

}