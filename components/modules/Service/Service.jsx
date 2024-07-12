import ServiceItem from "../ServiceItem/ServiceItem";

export default function Service({ services }) {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Services</h4>
                    <h1 className="display-4">Fresh & Organic Beans</h1>
                </div>
                <div className="row">
                    {services?.map(service => (
                        <div key={service.id} className="col-lg-6 mb-5">
                            <ServiceItem {...service} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
