import { faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/Product.module.css"

export default function ProductDetails({ img, title, off, price, description, score }) {
    return (
        <div
            className={`${styles.product_main} align-items-center mb-5 text-decoration-none justify-content-center`}
        >
            <div className={styles.product_img_wrapper}>
                <img
                    className={`${styles.product_img}  mb-3 mb-sm-0`}
                    src={img}
                />
            </div>
            <div style={{ maxWidth: "500px" }}>
                <h4 className="text-white mb-3">{title}</h4>
                <hr style={{ borderColor: "white" }} />
                <div className={styles.stars}>
                    {Array.from({ length: 5 }, (_, index) => index + 1).map(item => {
                        if (item <= score) {
                            return <FontAwesomeIcon className={styles.fill_star} icon={faStar} />
                        }
                        return <FontAwesomeIcon icon={faStar} />
                    })}
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
