
class HamburgerMenu {

    menuControl() {
        const imgHamb = document.getElementById('header__nav__img__hamburger')
        const imgX = document.getElementById('header__nav__img__x')
        const menu = document.getElementById('header__nav__container__menu')

        imgHamb.addEventListener('click', () => {
            imgHamb.classList.add('header__nav__img__hamburger-js')
            imgX.classList.add('header__nav__img__x-js')
            menu.classList.add('header__nav__container__menu-js')
        })

        imgX.addEventListener('click', () => {
            imgHamb.classList.remove('header__nav__img__hamburger-js')
            imgX.classList.remove('header__nav__img__x-js')
            menu.classList.remove('header__nav__container__menu-js')
        })
    }

}