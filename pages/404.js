import Header from "@/components/modules/Header/Header";
import Head from "next/head";
import styles from "@/styles/404.module.css";

export default function NotFoundPage() {
    return (
        <>
            <Head>
                <title>Not-Found</title>
            </Head>
            <Header />
            <section className={styles.wrapper}>
                oops Page Not Found !!!
            </section>
        </>
    )
}
