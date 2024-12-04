
const hamburger = new Hamburger()
hamburger.displayMenu()

const scroll = new PercentageScroller()
scroll.addScrollToPage()

const returnTop = new ReturnToTheTop()
returnTop.getToTop()

const form = new FormValidator()
form.tryValidation()



const dom = new DomHandler('idDom')
const apiCoin = new APICoin(dom)
const coinConverter = new CoinConverter(apiCoin)