import React from 'react'
import MenuItem from "@/components/modules/MenuItem/MenuItem";

export default function Menu({ menu }) {
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
                        {menu.filter(item => item.type === "hot").map(item => <MenuItem key={item.id} {...item} />)}
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-5">Cold Coffee</h1>
                        {menu.filter(item => item.type === "cold").map(item => <MenuItem key={item.id} {...item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
