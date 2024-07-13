import Link from "next/link";

export default function MenuItem({ id, title, description, price, img }) {
    return (
        <div className="row align-items-center mb-5">
            <div className="col-4 col-sm-3">
                <img className="w-100 rounded-circle mb-3 mb-sm-0" src={img} alt="menu-item-img" />
                <h5 className="menu-price">${price}</h5>
            </div>
            <div className="col-8 col-sm-9">
                <Link href={`/product/${id}`}>
                    <h4>{title}</h4>
                </Link>
                <p className="m-0">{description}</p>
            </div>
        </div>
    )
}
