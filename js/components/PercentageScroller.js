
class PercentageScroller {

    addScrollToPage() {
        const scroll = document.getElementsByClassName('header__page-scroll')[0]
        window.addEventListener('scroll', () => {
            scroll.style.width = `${this.getPercentageScroll()}%`
        })
    }

    getPercentageScroll() {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement
        return (scrollTop / (scrollHeight - clientHeight) * 100)
    }

}