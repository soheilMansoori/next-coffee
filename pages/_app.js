import Navbar from '@/components/modules/Navbar/Navbar'
import Slider from '@/components/modules/Slider/Slider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Slider />
      <Component {...pageProps} />


    </>
  )
}