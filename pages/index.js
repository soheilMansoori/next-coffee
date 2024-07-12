import About from "@/components/modules/About/About";
import Menu from "@/components/modules/Menu/Menu";
import Offer from "@/components/templates/Home/Offer/Offer";
import Reservation from "@/components/modules/Reservation/Reservation";
import Service from "@/components/modules/Service/Service";
import Slider from "@/components/templates/Home/Slider/Slider";
import Testimonials from "@/components/modules/Testimonials/Testimonials";

export default function HomePage({ services = [], menu = [], comments = [] }) {
  return (
    <>
      <Slider />
      <About />
      <Service services={services} />
      <Offer />
      <Menu menu={menu} />
      <Reservation />
      <Testimonials comments={comments} />
    </>
  )
}

// SSG Page
export async function getStaticProps() {
  try {
    const [servicesResponse, menuResponse, commentsResponse] = await Promise.all([fetch("http://localhost:4000/services"), fetch("http://localhost:4000/menu"), fetch("http://localhost:4000/comments")]);
    const [services, menu, comments] = await Promise.all([servicesResponse.json(), menuResponse.json(), commentsResponse.json()]);
    return {
      props: {
        services,
        menu,
        comments,
      }
    }
  } catch (error) {
    console.log("sever error => ", error.message);
    return {
      props: {
        services: [],
        menu: [],
        comments: []
      }
    }
  }
}