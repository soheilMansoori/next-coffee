import { faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/Product.module.css"

export default function ProductDetails({ img, title, off, price, description }) {
    return (
        <div
            className={`${styles.product_main} align-items-center mb-5 text-decoration-none justify-content-center`}
        >
            <img
                className={`${styles.product_img}  mb-3 mb-sm-0`}
                src={img}
            />
            <div style={{ width: "500px" }}>
                <h4 className="text-white mb-3">{title}</h4>
                <hr style={{ borderColor: "white" }} />
                <div className={styles.stars}>
                    <FontAwesomeIcon className={styles.fill_star} icon={faStar} />
                    <FontAwesomeIcon className={styles.fill_star} icon={faStar} />
                    <FontAwesomeIcon className={styles.fill_star} icon={faStar} />
                    <FontAwesomeIcon className={styles.fill_star} icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={styles.price_details}>
                    {off ? (
                        <>
                            <p>${price - (price * off) / 100}</p>
                            <p>${price}</p>
                        </>
                    ) : (
                        <p>${price}</p>
                    )}
                </div>
                <p style={{ color: "#fff" }} className="m-0 pr-5">
                    {description}
                </p>
                <button className={styles.shopping_btn}>
                    buy
                    <FontAwesomeIcon className="ml-2" icon={faShoppingBag} />
                </button>
            </div>
        </div>)
}