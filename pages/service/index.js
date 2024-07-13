import Header from "@/components/modules/Header/Header"
import Service from "@/components/modules/Service/Service"
import Head from "next/head";

export default function ServicePage({ services }) {
    return (
        <>
            <Head>
                <title>Service</title>
            </Head>
            <Header />
            <Service services={services} />
        </>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch("http://localhost:4000/services");
        const services = await res.json();
        return {
            props: {
                services
            },
            revalidate: 
        }
    } catch (error) {
        console.log("sever error => ", error.message);
        return {
            props: {
                services: []
            },
            revalidate: 30 // update page after 30 seconds
        }
    }
}
