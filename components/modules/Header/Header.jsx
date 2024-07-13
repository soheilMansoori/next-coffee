import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Header() {
    const { pathname } = useRouter();
    const [_, routName] = pathname.split("/");
    const firstLetterUppercaseHandler = (text = "") => text.charAt(0).toUpperCase() + text.slice(1);
    const headerTitle = firstLetterUppercaseHandler(routName);

    return (
        <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
            <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: "400px" }}>
                <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">{headerTitle}</h1>
                <div className="d-inline-flex mb-lg-5">
                    <p className="m-0 text-white">
                        <Link href="/" className="text-white">Home</Link>
                    </p>
                    <p className="m-0 text-white px-2">/</p>
                    <p className="m-0 text-white">
                        <Link href={pathname}>{headerTitle}</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
