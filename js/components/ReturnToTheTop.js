// import { getPercentageScroll } from './PercentageScroller.js';

class ReturnToTheTop {

    getToTop() {
        const btnToTop = document.getElementById('return-top')
        const si = new PercentageScroller()

        window.addEventListener('scroll', () => {
            if (si.getPercentageScroll() >= 25) {
                btnToTop.style.visibility = 'visible'
            }
            else {
                btnToTop.style.visibility = 'hidden'
            }
        })

        btnToTop.onclick = () => {
            window.scrollTo(0, 0);
            btnToTop.style.visibility = 'hidden'
        }
    }
}