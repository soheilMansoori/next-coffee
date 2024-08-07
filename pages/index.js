import About from "@/components/modules/About/About";
import Menu from "@/components/modules/Menu/Menu";
import Offer from "@/components/templates/Home/Offer/Offer";
import Reservation from "@/components/modules/Reservation/Reservation";
import Service from "@/components/modules/Service/Service";
import Slider from "@/components/templates/Home/Slider/Slider";
import Testimonials from "@/components/modules/Testimonials/Testimonials";
import Head from "next/head";

export default function HomePage({ services = [], menu = [], comments = [] }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
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
      },
      revalidate: 60 * 60 * 12 // update page after one daye
    }
  } catch (error) {
    console.log("sever error => ", error.message);
    return {
      props: {
        services: [],
        menu: [],
        comments: []
      },
      revalidate: 30 // update after 60 second
    }
  }
}