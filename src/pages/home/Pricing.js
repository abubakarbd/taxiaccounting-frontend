import React from "react";
import { BiWorld } from "react-icons/bi";
import { HiGift } from "react-icons/hi";
import { MdCloudUpload } from "react-icons/md";

const pricingCards = [
   {
        title: "Flexi", price: "80 Now £50", bg: "bg-green-300", desc: [
            {icon: HiGift, text: "Business Advice"},
            {icon: BiWorld, text: "Add weekly income"},
            {icon: BiWorld, text: "Add weekly expense"},
            {icon: MdCloudUpload, text: "6 months free financial statements"},
            {icon: MdCloudUpload, text: "Guide to Self-Assessment registration"},
            {icon: MdCloudUpload, text: "Send your statement to your own Accountant"}
        ]
    },{
        title: "Flexi Plus", price: "120 Now £100", bg: "bg-green-600", desc: [
            {icon: HiGift, text: "Business Advice"},
            {icon: HiGift, text: "Allocated online Accountant"},
            {icon: BiWorld, text: "Weekly income"},
            {icon: MdCloudUpload, text: "Weekly expense"},
            {icon: HiGift, text: "12 months Financial Statements"},
            {icon: HiGift, text: "Submit own Tax Return"}
        ]
    },{
        title: "Premium", price: "150 Now £120", bg: "bg-yellow-700", desc: [
            {icon: HiGift, text: "Business Advie"},
            {icon: HiGift, text: "Allocated Physical Accountant"},
            {icon: BiWorld, text: "Weekly income"},
            {icon: MdCloudUpload, text: "Weekly expense"},
            {icon: HiGift, text: "12 months Financial Statements"},
            {icon: HiGift, text: "HMRC Tax Return with certified Accountant"}
        ]
    }
]
function Pricing() {
    return (
        <div className="md:px-10 mx-3 font-sans  ">
             <h1 className="text-center  font-semibold text-4xl font-sans text-yellow-500 "> Prices</h1>
             
            <p className="text-justify">Costing is a key of every Business For Taxi Business Service cost should be lower and affordable within budget We focused our quality as well as to make our clients happy.</p>
            {/* <h1 className="text-center text-prim text-4xl font-sans ">PRICING</h1> */}
            <div className="grid gap-10 grid-cols-12">
                {pricingCards.map(cd => 
                <div className=" col-span-12 sm:col-span-6 lg:col-span-4 border rounded-lg my-3 font-sans">
                    <div>
                        <p className={` ${ cd.bg }   font-bold text-white text-center text-2xl py-4 rounded-t-md font-sans`}>{cd.title}</p>
                        <p className="py-4 text-price text-3xl font-bold text-center font-sans">£ {cd.price}</p>  
                    </div>
                    <div>
                    {cd.desc.map(de => 
                    <p className="text-left ml-3 my-2 font-sans"><de.icon className="inline text-prim mr-1" /> <span className="font-sans leading-6">{de.text}</span></p>
                        )}
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default Pricing;