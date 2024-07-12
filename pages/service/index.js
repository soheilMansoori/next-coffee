import Header from "@/components/modules/Header/Header"
import Service from "@/components/modules/Service/Service"

export default function ServicePage({ services }) {
    return (
        <>
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
            }
        }
    } catch (error) {
        console.log("sever error => ", error.message);
        return {
            props: {
                services: []
            }
        }
    }
}
