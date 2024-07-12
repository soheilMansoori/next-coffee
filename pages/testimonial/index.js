import Header from '@/components/modules/Header/Header'
import Testimonials from '@/components/modules/Testimonials/Testimonials'

export default function TestimonialPage({ comments = [] }) {
    return (
        <>
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
            }
        }
    } catch (error) {
        console.log("server error => ", error);
        return {
            props: {
                comments: []
            }
        }
    }
}