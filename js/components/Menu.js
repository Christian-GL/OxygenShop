
class Menu {

    addListeners() {
        const whyusOption = document.getElementById('header__nav__container__menu__option__whyus')
        const benefitsOption = document.getElementById('header__nav__container__menu__option__benefits')
        const pricesOption = document.getElementById('header__nav__container__menu__option__prices')
        const contactOption = document.getElementById('header__nav__container__menu__option__contact')
        
        const whyusSection = document.getElementById('popular__title')
        const benefitsSection = document.getElementById('advertising__card--first')
        const pricesSection = document.getElementById('prices__title')
        const contactSection = document.getElementById('contact__container-left__title')

        whyusOption.addEventListener('click', () => {
            window.scrollTo(0, whyusSection.offsetTop-10);
        })
        benefitsOption.addEventListener('click', () => {
            window.scrollTo(0, benefitsSection.offsetTop-10);
        })
        pricesOption.addEventListener('click', () => {
            window.scrollTo(0, pricesSection.offsetTop-10);
        })
        contactOption.addEventListener('click', () => {
            window.scrollTo(0, contactSection.offsetTop-10);
        })
    }

}