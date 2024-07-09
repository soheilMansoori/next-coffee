import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function Navbar() {
    const { pathname } = useRouter();
    const [isShowDropDown, setIsShowDropDown] = useState(false)

    return (
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <Link href="/" className="navbar-brand px-lg-4 m-0">
                    <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
                </Link>
                <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto p-4">
                        <Link href="/" className={`nav-item nav-link ${pathname === "/" && "active"}`}>Home</Link>
                        <Link href="/about" className={`nav-item nav-link ${pathname === "/about" && "active"}`}>About</Link>
                        <Link href="/service" className={`nav-item nav-link ${pathname === "/service" && "active"}`}>Service</Link>
                        <Link href="/menu" className={`nav-item nav-link ${pathname === "/menu" && "active"}`}>Menu</Link>
                        <div className="nav-item dropdown">
                            <a href="#"
                                className="nav-link dropdown-toggle"
                                onMouseEnter={() => setIsShowDropDown(true)}
                            >
                                Pages
                            </a>
                            <div
                                className={`dropdown-menu text-capitalize ${isShowDropDown && 'd-block '}`}
                                onMouseLeave={() => setIsShowDropDown(false)}
                            >
                                <Link href="/reservation" className="dropdown-item">Reservation</Link>
                                <Link href="/testimonial" className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <Link href="/contact" className={`nav-item nav-link ${pathname === "/contact" && "active"}`}>Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
