
const hamburgerMenu = new HamburgerMenu()
hamburgerMenu.menuControl()

const scroll = new PercentageScroller()
scroll.addScrollToPage()

const returnTop = new ReturnToTheTop()
returnTop.getToTop()

const form = new FormValidator('contact__container-right__container-btn__send',
    'contact__container-right__input-name',
    'contact__container-right__input-email',
    'contact__container-right__container-terms__checkbox')
form.tryValidation()

const dom = new DomHandler('idDom')
const apiCoin = new APICoin(dom)

const popup = new Popup()
popup.popupControl()

const slider = new Slider()
slider.addListeners()