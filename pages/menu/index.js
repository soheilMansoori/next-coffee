import Header from "@/components/modules/Header/Header";
import Menu from "@/components/modules/Menu/Menu";
import Head from "next/head";

export default function MenuPage({ menu = [] }) {
    return (
        <>
            <Head>
                <title>Menu</title>
            </Head>
            <Header />
            <Menu menu={menu} />
        </>
    )
}


export async function getStaticProps() {
    try {
        const res = await fetch("http://localhost:4000/menu");
        const menu = await res.json();
        return {
            props: {
                menu
            },
            revalidate: 60 * 60 * 12 // update page after one day
        }
    } catch (error) {
        console.log("sever error => ", error.message);
        return {
            props: {
                menu: []
            },
            revalidate: 30 // update page after 30 seconds
        }
    }
}