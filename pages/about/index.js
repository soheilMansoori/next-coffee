import Header from '@/components/modules/Header/Header'
import About from '@/components/templates/index/About/About'
import React from 'react'

export default function AboutPage() {
    return (
        <>
            <Header title='About' />
            {/* About Start  */}
            <About />
            {/* About End  */}
        </>
    )
}
