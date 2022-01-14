import React from "react";
import { BiWorld } from "react-icons/bi";
import { HiGift } from "react-icons/hi";
import { MdCloudUpload } from "react-icons/md";

const pricingCards = [
    {
        title: "Test Drive", price: "FREE", bg: "bg-test-drive",desc: [
            {icon: HiGift, text: "Free sign up"},
            {icon: BiWorld, text: "Add weekly income"},
            {icon: BiWorld, text: "Add weekly expense"},
            {icon: BiWorld, text: "Business Advice"},
            {icon: MdCloudUpload, text: "Six months free financial Statement"}
        ]
    },{
        title: "Flexi", price: "70.00", bg: "bg-flexi ", desc: [
            {icon: HiGift, text: "Business Advice"},
            {icon: BiWorld, text: "Add weekly income"},
            {icon: BiWorld, text: "Add weekly expense"},
            {icon: MdCloudUpload, text: "6 months free financial statements"},
            {icon: MdCloudUpload, text: "Guide to Self-Assessment registration"},
            {icon: MdCloudUpload, text: "Send your statement to your own Accountant"}
        ]
    },{
        title: "Flexi Plus", price: "100.00", bg: "bg-flexi-plus", desc: [
            {icon: HiGift, text: "Free sign up"},
            {icon: HiGift, text: "Allocated online Accountant"},
            {icon: BiWorld, text: "Weekly income"},
            {icon: MdCloudUpload, text: "Weekly expense"},
            {icon: HiGift, text: "12 months Financial Statements"},
            {icon: HiGift, text: "Submit own Tax Return"}
        ]
    },{
        title: "Premium", price: "120.00", bg: "bg-premium", desc: [
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
             <h1 className="text-center font-semibold text-4xl font-sans">Services and Prices</h1>
            <p>To continue our quality and service, we focused few features to define our goal. We are not traditional Accounting Service Provider, we are tech base Accounting Service Provider to pointing certain group of people and our initial step is taxi useness.</p>
            {/* <h1 className="text-center text-prim text-4xl font-sans ">PRICING</h1> */}
            <div className="grid gap-10 grid-cols-12">
                {pricingCards.map(cd => 
                <div className=" col-span-12 sm:col-span-6 lg:col-span-3 border rounded-lg my-3 font-sans">
                    <div>
                        <p className={`£{cd.bg}   bg-green-500 font-bold text-black text-center text-2xl py-4 rounded-t-md font-sans`}>{cd.title}</p>
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