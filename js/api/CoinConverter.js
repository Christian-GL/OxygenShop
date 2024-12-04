
class CoinConverter {

    constructor(apiCoin) {
        this.apiCoin = apiCoin
        this.switchCoinType()       // <--arguumento?
    }

    switchCoinType(conversions) {
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
            conversions = [1.00, 0.95, 0.79]        // <-- Provisional
            let basicConversion = (numberBasic * conversions[type - 1]).toFixed(2)
            let professionalConversion = (numberProfessional * conversions[type - 1]).toFixed(2)
            let premiumConversion = (numberPremium * conversions[type - 1]).toFixed(2)

            switch (type) {
                case 1:
                symbol = '$'
                    break;
                case 2:
                symbol = '€'
                    break;
                case 3:
                symbol = '£'
                    break;
                default:
                    break;
            }

            priceBasic.innerHTML = `${symbol}${basicConversion}`
            priceProfessional.innerHTML = `${symbol}${professionalConversion}`
            pricePremium.innerHTML = `${symbol}${premiumConversion}`
        })
    }

}