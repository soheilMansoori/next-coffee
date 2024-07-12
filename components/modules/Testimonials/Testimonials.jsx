import CommentItem from "@/components/modules/CommentItem/CommentItem";
import { useRouter } from "next/router";

export default function Testimonials({ comments = [] }) {
    const router = useRouter();

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h4>
                    <h1 className="display-4">Our Clients Say</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    {router.pathname === "/" ? (
                        <>
                            {comments?.slice(0, 4)?.map(comment => <CommentItem key={comment.id} {...comment} />)}
                        </>
                    ) : (
                        <>
                            {comments?.map(comment => <CommentItem key={comment.id} {...comment} />)}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
