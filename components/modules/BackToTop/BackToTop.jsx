import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'


export default function BackToTop() {
    const [isScrollIngDown, setIsScrollIngDown] = useState(false)
    useEffect(() => {
        let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHandler = (event) => {
            // console.log(event);
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

        return () => {
            console.log('removeEventListener');
            return window.removeEventListener('scroll', scrollHandler)
        }
    }, [])


    const goToTop = () => {
        // console.log('got to top');
        window.scrollTo(0, 0)
    }
    return (
        <button
            className={`${isScrollIngDown ? 'd-block' : 'd-none'} btn btn-lg btn-primary btn-lg-square back-to-top`}
            onClick={goToTop}
        >
            <FontAwesomeIcon icon={faAngleDoubleUp} />
        </button>
    )
}
