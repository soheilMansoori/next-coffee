import Header from '@/components/modules/Header/Header'
import ContactForm from '@/components/templates/Contact/ContactForm/ContactForm'
import ContactMap from '@/components/templates/Contact/Map/Map'

export default function ContactPage() {
    return (
        <>
            <Header />
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="section-title">
                        <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Contact Us</h4>
                        <h1 className="display-4">Feel Free To Contact</h1>
                    </div>
                    <div className="row px-3 pb-2">
                        <div className="col-sm-4 text-center mb-3">
                            <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                            <h4 className="font-weight-bold">Address</h4>
                            <p>123 Street, New York, USA</p>
                        </div>
                        <div className="col-sm-4 text-center mb-3">
                            <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                            <h4 className="font-weight-bold">Phone</h4>
                            <p>+012 345 6789</p>
                        </div>
                        <div className="col-sm-4 text-center mb-3">
                            <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
                            <h4 className="font-weight-bold">Email</h4>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pb-5">
                            <ContactMap />
                        </div>
                        <div className="col-md-6 pb-5">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End  */}
        </>
    )
}
