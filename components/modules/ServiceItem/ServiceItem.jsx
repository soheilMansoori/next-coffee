import * as Icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ServiceItem({ title, description, img, icon }) {
    return (
        <div className="row align-items-center">
            <div className="col-sm-5">
                <img className="img-fluid mb-3 mb-sm-0" src={img} alt="service-img" />
            </div>
            <div className="col-sm-7">
                <h4>
                    <span className='service-icon'>
                        <FontAwesomeIcon icon={Icons[icon]} />
                    </span>
                    {title}
                </h4>
                <p className="m-0">{description}</p>
            </div>
        </div>
    )
}
