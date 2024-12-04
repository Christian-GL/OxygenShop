
class Slider {

    constructor() {
        this.slider = document.getElementById('slider')
        this.imgArrowLeft = document.getElementById('slider__img-arrow--left')
        this.imgArrowRight = document.getElementById('slider__img-arrow--right')
        this.imgPrinted = document.getElementById('slider__img-printed')
        this.listIdBtn = [
            document.getElementById('slider__container-position__btn-1'),
            document.getElementById('slider__container-position__btn-2'),
            document.getElementById('slider__container-position__btn-3'),
            document.getElementById('slider__container-position__btn-4'),
            document.getElementById('slider__container-position__btn-5')]
        this.listSrcImg = [
            'img/Slider cat white.png',
            'img/Slider cat Beluga.png',
            'img/Slider cat mouth.png',
            'img/Slider cat Uh.png',
            'img/Slider cat ball.png']
        this.idImg = 0
        this.switchColors(this.idImg)
        this.automaticAdvance()
    }

    cosas() {
        this.imgArrowLeft.addEventListener('click', () => {
            (this.idImg === 0) ? this.idImg = 4 : this.idImg--
            this.imgPrinted.src = this.listSrcImg[this.idImg]
            this.switchColors(this.idImg)
        })

        this.imgArrowRight.addEventListener('click', () => {
            (this.idImg === 4) ? this.idImg = 0 : this.idImg++
            this.imgPrinted.src = this.listSrcImg[this.idImg]
            this.switchColors(this.idImg)
        })

        for (let i = 0; i < this.listIdBtn.length; i++) {        // for each !!
            this.listIdBtn[i].addEventListener('click', () => {
                this.idImg = i
                this.imgPrinted.src = this.listSrcImg[this.idImg]
                this.switchColors(this.idImg)
            })
        }
    }

    switchColors() {     // for each !!
        for (let i = 0; i < this.listIdBtn.length; i++) {
            (i === this.idImg) ?
                this.listIdBtn[i].style.backgroundColor = 'yellow' :
                this.listIdBtn[i].style.backgroundColor = 'white'
        }
    }

    automaticAdvance() {
        setInterval(() => {
            (this.idImg === 4) ? this.idImg = 0 : this.idImg++
            this.imgPrinted.src = this.listSrcImg[this.idImg]
            this.switchColors(this.idImg)
        }, 5000);
    }

}