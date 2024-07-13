import Header from '@/components/modules/Header/Header'
import Testimonials from '@/components/modules/Testimonials/Testimonials'
import Head from 'next/head';

export default function TestimonialPage({ comments = [] }) {
    return (
        <>
            <Head>
                <title>Testimonial</title>
            </Head>
            <Header />
            <Testimonials comments={comments} />
        </>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch("http://localhost:4000/comments");
        const comments = await res.json();
        return {
            props: {
                comments
            },
            revalidate: 60 * 60 * 12 // update page after one day
        }
    } catch (error) {
        console.log("server error => ", error);
        return {
            props: {
                comments: []
            },
            revalidate: 30 // update page after 30 seconds
        }
    }
}