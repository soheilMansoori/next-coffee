import React, { useState } from 'react'

export default function Navbar() {
    const [isShowDropDown, setIsShowDropDown] = useState(false)
    return (
        // Navbar Start 
        <div className="container-fluid p-0 nav-bar">
            <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <a href="index.html" className="navbar-brand px-lg-4 m-0">
                    <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
                </a>
                <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto p-4">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="menu.html" className="nav-item nav-link">Menu</a>
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
                                <a href="reservation.html" className="dropdown-item">Reservation</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
        //  Navbar End 
    )
}
