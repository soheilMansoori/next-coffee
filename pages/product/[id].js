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

export async function getStaticPaths() {
    try {
        const productsResponse = await fetch("http://localhost:4000/menu");
        const products = await productsResponse.json();
        const paths = products.map(product => ({ params: { id: String(product.id) } }));
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log("server error => ", error);
        return {
            paths: [],
            fallback: false
        }
    }
}


// SSG
export async function getStaticProps(context) {
    const { id } = context.params
    try {
        const res = await fetch(`http://localhost:4000/menu/${id}?_embed=comments`);
        const mainProductInfo = await res.json();

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


