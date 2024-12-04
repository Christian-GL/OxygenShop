
class Hamburger {

    displayMenu() {
        const imgBtn = document.getElementsByClassName('header__nav__img')[0]
        const menu = document.getElementsByClassName('header__nav__container__menu')[0]

        imgBtn.onclick = () => {
            if (imgBtn.src === 'file:///D:/Varios-PC/Educacion/TrainingOxygen/Temario/Practicas/OXYGEN%20Shop/img/Menu.png') {
                imgBtn.src = './img/X-img.png'
                menu.style.display = 'flex'
                menu.style.flexDirection = 'column'
            }
            else {
                imgBtn.src = './img/Menu.png'
                menu.style.display = 'none'
                menu.style.flexDirection = 'row'
            }
        }
    }

}