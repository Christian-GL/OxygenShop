
class Slider {

    constructor() {
        this.slider = document.getElementById('slider')
        this.imgArrowLeft = document.getElementById('slider__img-arrow--left')
        this.imgArrowRight = document.getElementById('slider__img-arrow--right')
        this.imgPrinted = document.getElementById('slider__img-printed')
        this.listSrcImg = [
            'img/Slider 1.png',
            'img/Slider 2.png',
            'img/Slider 3.png',
            'img/Slider 4.png',
            'img/Slider 5.png']
        this.listIdBtn = []
        for (let i = 0; i < this.listSrcImg.length; i++) {
            this.listIdBtn.push(document.getElementById(`slider__container-position__btn-${i + 1}`))
        }
        this.idImg = 0

        this.switchColors(this.idImg)
        this.automaticAdvance()
        this.addListeners()
    }

    addListeners() {
        this.imgArrowLeft.addEventListener('click', () => {
            (this.idImg === 0) ? this.idImg = 4 : this.idImg--
            this.imgPrinted.src = this.listSrcImg[this.idImg]
            this.switchColors(this.idImg)
        })

        this.imgArrowRight.addEventListener('click', () => {
            (this.idImg === this.listSrcImg.length - 1) ? this.idImg = 0 : this.idImg++
            this.imgPrinted.src = this.listSrcImg[this.idImg]
            this.switchColors(this.idImg)
        })

        for (let i = 0; i < this.listIdBtn.length; i++) {
            this.listIdBtn[i].addEventListener('click', () => {
                this.idImg = i
                this.imgPrinted.src = this.listSrcImg[this.idImg]
                this.switchColors(this.idImg)
            })
        }
    }

    switchColors() {
        for (let i = 0; i < this.listIdBtn.length; i++) {
            if (i === this.idImg) {
                this.listIdBtn[i].classList.remove('slider__container-position__btn-white-js')
                this.listIdBtn[i].classList.add('slider__container-position__btn-yellow-js')
            }
            else {
                this.listIdBtn[i].classList.remove('slider__container-position__btn-yellow-js')
                this.listIdBtn[i].classList.add('slider__container-position__btn-white-js')
            }
        }
    }

    automaticAdvance() {
        setInterval(() => {
            (this.idImg === this.listSrcImg.length - 1) ? this.idImg = 0 : this.idImg++
            this.imgPrinted.src = this.listSrcImg[this.idImg]
            this.switchColors(this.idImg)
        }, 5000);
    }

}