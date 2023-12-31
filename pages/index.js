import About from "@/components/templates/index/About/About";
import Menu from "@/components/templates/index/Menu/Menu";
import Offer from "@/components/templates/index/Offer/Offer";
import Reservation from "@/components/templates/index/Reservation/Reservation";
import Service from "@/components/templates/index/Service/Service";

export default function Home() {
  return (
    <>
      <About />
      <Service />
      <Offer />
      <Menu />
      <Reservation />
    </>
  )
}
