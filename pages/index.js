import About from "@/components/modules/About/About";
import Menu from "@/components/modules/Menu/Menu";
import Offer from "@/components/templates/Home/Offer/Offer";
import Reservation from "@/components/modules/Reservation/Reservation";
import Service from "@/components/modules/Service/Service";
import Slider from "@/components/templates/Home/Slider/Slider";
import Testimonial from "@/components/modules/Testimonial/Testimonial";

export default function HomePage() {
  return (
    <>
      <Slider />
      <About />
      <Service />
      <Offer />
      <Menu />
      <Reservation />
      <Testimonial />
    </>
  )
}
