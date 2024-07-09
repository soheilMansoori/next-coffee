import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'


export default function BackToTop() {
    const [isScrollIngDown, setIsScrollIngDown] = useState(false)
    useEffect(() => {
        // scroll position
        let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

        // scroll btn Handler
        const scrollHandler = () => {
            const scrollTopPosition = window.scrollY || document.documentElement.scrollTop;

            if (scrollTopPosition > lastScrollTop) {
                // console.log('scrolling down');
                setIsScrollIngDown(true)
            } else if (scrollTopPosition < lastScrollTop) {
                // console.log('scrolling up');
                setIsScrollIngDown(false)
            }
            lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
        }

        window.addEventListener('scroll', scrollHandler)

        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    // backToTopBtnAction
    const goToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <button
            className={`${isScrollIngDown ? 'd-block' : 'd-none'} btn btn-lg btn-primary btn-lg-square back-to-top`}
            onClick={goToTop}
        >
            <FontAwesomeIcon icon={faAngleDoubleUp} />
        </button>
    )
}
