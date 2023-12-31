import { faAward, faCoffee, faTable, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Service() {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Services</h4>
                    <h1 className="display-4">Fresh & Organic Beans</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="images/service-1.jpg" alt="" />
                            </div>
                            <div className="col-sm-7">
                                <h4>
                                    <FontAwesomeIcon icon={faTruck} className='service-icon' />
                                    Fastest Door Delivery
                                </h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="images/service-2.jpg" alt="" />
                            </div>
                            <div className="col-sm-7">
                                <h4>
                                    <FontAwesomeIcon icon={faCoffee} className='service-icon' />
                                    Fresh Coffee Beans
                                </h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="images/service-3.jpg" alt="" />
                            </div>
                            <div className="col-sm-7">
                                <h4>
                                    <FontAwesomeIcon icon={faAward} className='service-icon' />
                                    Best Quality Coffee
                                </h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="row align-items-center">
                            <div className="col-sm-5">
                                <img className="img-fluid mb-3 mb-sm-0" src="/images/service-4.jpg" alt="" />
                            </div>
                            <div className="col-sm-7">
                                <h4>
                                    <FontAwesomeIcon icon={faTable} className='service-icon' />
                                    Online Table Booking
                                </h4>
                                <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
