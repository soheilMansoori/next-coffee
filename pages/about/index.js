import Header from '@/components/modules/Header/Header'
import About from '@/components/modules/About/About'
import React from 'react'
import Head from 'next/head'

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Header />
            <About />
        </>
    )
}
