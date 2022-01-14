import React from "react";
const accounting = [
{id: 1, title: "Flexible From Anywhere", desc: "Taxi accounting is a fully flexible online system to control from anywhere"},
{id: 2, title: "Flexible Plus For Anyone", desc: "It is so simple to use that it could be suitable for anyone without any accounting knowledge"},
{id: 3, title: "Premium For Certification", desc: "Premium Account is manually checked and certified by qualified Accountants"}]
function Aboutus() {

    return (
        <div className="px-10 text-black py-10">
            {/* <h2 className="font-bold font-sans text-center text-2xl">About Our System</h2> */}
            <h2 className="font-bold font-sans text-center text-2xl  text-yellow-500  pb-5">UNIQUE ACCOUNTING SYSTEM</h2>
            <hr className="h-2 w-40 content-between"/>
            <div className="md:flex w-full">
                <div className="w-full">                    
                    <div className="mt-20 ml-5">
                        {/* <h2 className="font-bold font-sans text-center text-2xl">UNIQUE ACCOUNTING SYSTEM</h2> */}
                        <div>
                            {accounting.map(ac => 
                            <div className="flex mt-3" key={ac.id}>
                                <div className="w-3 h-3 bg-black"></div>
                                <p className="ml-3">
                                <span className="font-bold text-sm font-sans mr-3">{ac.title} :</span>
                                <span className="text-price text-sm font-sans  ">{ac.desc}</span>
                                </p>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-price mt-5 ml-5 justify-between ">
                        Taxi Accounting is a time consuming system to reduce your time and afford to make your taxi business as simple as you understand After joining win this system, you are no longer.
                        </p>
                        <p className="text-price mt-5 ml-5 justify-between ">
                        wating in the queue for Accountant appointments. You can see your Incomer Expenses and Financial Statements just log from anywhere, anytime. You can see your income, experts
                        
                        and financial statement just login from anywhere, anytime
                        </p>
                        <p className="text-price mt-5 ml-5 justify-between ">
                        If you still think you need some advice from our dedicated accountants then you can make a Skype call or face to face appointment for your emergency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;