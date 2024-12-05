
class ReturnToTheTop {

    getToTop() {
        const btnToTop = document.getElementById('return-top')
        const scroll = new PercentageScroller()

        window.addEventListener('scroll', () => {
            if (scroll.getPercentageScroll() >= 25) {
                btnToTop.style.visibility = 'visible'
            }
            else {
                btnToTop.style.visibility = 'hidden'
            }
        })

        btnToTop.addEventListener('click', () => {
            window.setTimeout(() => {
                window.scrollTo(0, 0);
                btnToTop.style.visibility = 'hidden'
            }, 200);
        })
    }
}