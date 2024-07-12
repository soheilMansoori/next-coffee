import Header from "@/components/modules/Header/Header";
import Menu from "@/components/modules/Menu/Menu";

export default function MenuPage({ menu = [] }) {
    return (
        <>
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
            }
        }
    } catch (error) {
        console.log("sever error => ", error.message);
        return {
            props: {
                menu: []
            }
        }
    }
}