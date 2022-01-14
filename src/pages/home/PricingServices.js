import React from "react";
import { FaMedal } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { GrDiamond } from "react-icons/gr";
import { ImFire } from "react-icons/im";
import { IoTrophyOutline } from "react-icons/io5";
const text1 = "It's a very simple way to register with our online system. Just need user name and e-mail. After registration start using our system to complete your business profile and personal details Add your weekly incomes and expenses to view your monthly statement. It is as simple as it is. You can add or delete your input from anywhere and maintain as you demand. You can also see your estimated tax and submit your Tax Return ofline on our dedicated certified accountant will submit tot de";

const text2 = "Our It's a huge benefit for Taxi drivers to maintain their business and submit their accounts on time just using our system. You are no more worried about keeping your expense receipts because our system will store all papers virtually, even though you not paying any more late submission fees. Our automated notification will send you massage about submission alert";
const text3 = "Self-Assessment is a big part of a taxi driver to declave as a self employed taxi driver with HMRC You just nequest to HMRC for your UTR Numberand give us permission to deal it for your taxi business and on dedicated system will do rest";
const text4="Using our system you are not fully depend on your accountant, most of your calculation will do automated and you will see your incomes, expenses, statements even estimated taxStill it you think you need some advice for your business or some guides in your crucial time then you can make a Skype call to our dedicated Accountant on face to face meeting with allocated Accountant";
const text5 = 'Its a very cost effective system compare to traditional accounting system. Our price is nearly half of any other physical accountants. In current market taxi drivers are charged for £160 to £180 per tax year by any certified accountants, on the other hand we are charging only £120 with secure accounting system as well as certified Accountant. We also offer payments flexibility by monthly instalments. All together its an unbeatable price and hard to find anywhere else.';
const text6= 'Now its time for technology, last few years UK government changed many paper works to online and they have plan to paperless e-governments within few years. Private company also changing rapidly. Therefore PDF copy and e-receipts are acceptable with HMRC. With our system you can copy and store all of your payment receipts for your e-documentation.';
const services = [
    {title: "HOW IT WORKS", desc: text1, icon: FiZap},
    {title: "BENEFITS", desc: text2, icon: FaMedal},
    {title: "SELF-ASSESSMENT", desc: text3, icon: GrDiamond},
    {title: "LOCAL ACCOUNTANT", desc: text4, icon: ImFire},
    {title: "COST EFFECTIVE", desc: text5, icon: IoTrophyOutline},
    {title: "E-DOCUMENTS", desc: text6, icon: IoTrophyOutline},
]
function PricingServices() {
    return (
        <div className="md:px-10 mx-3 py-10">
            <h1 className="text-center font-semibold text-4xl font-sans text-yellow-500 ">Features</h1>
            <p>To continue our qualty and service, we focused few features to define our goal. We are not traditional Accounting Service Provider we are och base Accounting Service Provider to
           pointing certain group of people and our initial step is Tw Business.</p>
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