import About from "@/components/modules/About/About";
import Menu from "@/components/modules/Menu/Menu";
import Offer from "@/components/templates/Home/Offer/Offer";
import Reservation from "@/components/modules/Reservation/Reservation";
import Service from "@/components/modules/Service/Service";
import Slider from "@/components/templates/Home/Slider/Slider";
import Testimonial from "@/components/modules/Testimonial/Testimonial";

export default function HomePage({ services = [], menu = [] }) {
  return (
    <>
      <Slider />
      <About />
      <Service services={services} />
      <Offer />
      <Menu menu={menu} />
      <Reservation />
      <Testimonial />
    </>
  )
}

// SSG Page
export async function getStaticProps() {
  try {
    const [servicesResponse, menuResponse] = await Promise.all([fetch("http://localhost:4000/services"), fetch("http://localhost:4000/menu")]);
    const [services, menu] = await Promise.all([servicesResponse.json(), menuResponse.json()]);
    return {
      props: {
        services,
        menu,
      }
    }
  } catch (error) {
    console.log("sever error => ", error.message);
    return {
      props: {
        services: [],
        menu: []
      }
    }
  }
}