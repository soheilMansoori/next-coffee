import About from "@/components/modules/About/About";
import Menu from "@/components/modules/Menu/Menu";
import Offer from "@/components/templates/Home/Offer/Offer";
import Reservation from "@/components/modules/Reservation/Reservation";
import Service from "@/components/modules/Service/Service";
import Slider from "@/components/templates/Home/Slider/Slider";
import Testimonial from "@/components/modules/Testimonial/Testimonial";

export default function HomePage({ services }) {
  return (
    <>
      <Slider />
      <About />
      <Service services={services} />
      <Offer />
      <Menu />
      <Reservation />
      <Testimonial />
    </>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:4000/services");
    const data = await res.json();
    return {
      props: {
        services: data
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