import React from 'react'
import MenuItem from "@/components/modules/MenuItem/MenuItem";
import { useRouter } from 'next/router';

export default function Menu({ menu = [] }) {
    const router = useRouter();
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Menu & Pricing</h4>
                    <h1 className="display-4">Competitive Pricing</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="mb-5">Hot Coffee</h1>
                        {router.pathname === "/" ? (
                            <>
                                {menu.filter(item => item.type === "hot").slice(0, 3).map(item => <MenuItem key={item.id} {...item} />)}
                            </>

                        ) : (
                            <>
                                {menu.flatMap(item => item.type === "hot" ? <MenuItem key={item.id} {...item} /> : [])}
                            </>
                        )}
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-5">Cold Coffee</h1>
                        {router.pathname === "/" ? (
                            <>
                                {menu.filter(item => item.type === "cold").slice(0, 3).map(item => <MenuItem key={item.id} {...item} />)}
                            </>

                        ) : (
                            <>
                                {menu.flatMap(item => item.type === "cold" ? <MenuItem key={item.id} {...item} /> : [])}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
