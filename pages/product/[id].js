import ProductComments from "@/components/templates/Product/ProductComments/ProductComments";
import ProductDetails from "@/components/templates/Product/ProductDetails/ProductDetails";
import Head from "next/head";

export default function ProductPage({ productInfo, comments = [] }) {
    return (
        <>
            <Head>
                <title>Product-Details</title>
            </Head>
            <ProductDetails {...productInfo} />
            <ProductComments comments={comments} />
        </>
    )
}


// SSR
export async function getServerSideProps(context) {
    const { id } = context.params
    try {
        const res = await fetch(`http://localhost:4000/menu/${id}?_embed=comments`);
        const mainProductInfo = await res.json();
        if (res.status === 404) {
            return {
                notFound: true
            }
        }
        return {
            props: {
                productInfo: mainProductInfo,
                comments: mainProductInfo.comments,
            }
        }
    } catch (error) {
        console.log("server error => ", error);
        return {
            props: {}
        }
    }
}


