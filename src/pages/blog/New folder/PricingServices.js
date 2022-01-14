import React from "react";
import { FaMedal } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { GrDiamond } from "react-icons/gr";
import { ImFire } from "react-icons/im";
import { IoTrophyOutline } from "react-icons/io5";
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto accusantium enim hic at suscipit tenetur minima! Odit odio nisi deleniti voluptatum officiis nostrum! Ipsum in quod reprehenderit voluptatum nihil fugit tempore eos dignissimos et eligendi fuga sit velit, fugiat veritatis voluptate magnam, doloremque aspernatur perspiciatis delectus excepturi aperiam saepe vero molestiae? Necessitatibus, inventore! Nulla quod asperiores molestias quam cum voluptates? Fuga suscipit a ea porro quidem eum excepturi quis pariatur recusandae culpa accusamus omnis est'
const services = [
    {title: "HOW IT WORKS", desc: text, icon: FiZap},
    {title: "BENEFITS", desc: text, icon: FaMedal},
    {title: "SELF-ASSESSMENT", desc: text, icon: GrDiamond},
    {title: "LOCAL ACCOUNTANT", desc: text, icon: ImFire},
    {title: "COST EFFECTIVE", desc: text, icon: IoTrophyOutline},
    {title: "E-DOCUMENTS", desc: text, icon: IoTrophyOutline},
]
function PricingServices() {
    return (
        <div className="md:px-10 mx-3 py-10">
            <h1 className="text-center font-semibold text-4xl font-sans bg-blue-500">Features</h1>
            <div className="mt-8 grid gap-10 grid-cols-12">
                {services.map(ser => 
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <div className="w-16 mr-auto ml-auto">
                        <div className="w-12 h-12 bg-prim rounded-full flex"><ser.icon className="text-white self-center ml-3 text-2xl" /></div>
                    </div>
                    <h2 className="mt-5 text-center font-sans text-price text-2xl font-bold">{ser.title}</h2>
                    <p className="font-sans leading-6 text-price mt-3">{ser.desc}</p>
                </div>
                )}
            </div>
        </div>

    );
}

export default PricingServices;