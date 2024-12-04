
class ReturnToTheTop {

    getToTop() {
        const btnToTop = document.getElementById('return-top')
        const percentageScroller = new PercentageScroller()

        window.addEventListener('scroll', () => {
            if (percentageScroller.getPercentageScroll() >= 25) {
                btnToTop.style.visibility = 'visible'
            }
            else {
                btnToTop.style.visibility = 'hidden'
            }
        })

        btnToTop.addEventListener('click', () => {
            window.scrollTo(0, 0);
            btnToTop.style.visibility = 'hidden'
        })
    }
}