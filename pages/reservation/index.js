import Header from '@/components/modules/Header/Header'
import Reservation from '@/components/modules/Reservation/Reservation'
import Head from 'next/head'

export default function ReservationPage() {
    return (
        <>
            <Head>
                <title>Reservation</title>
            </Head>
            <Header />
            <Reservation />
        </>
    )
}
