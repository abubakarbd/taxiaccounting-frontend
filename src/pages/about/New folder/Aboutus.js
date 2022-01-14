import React from "react";
import banar from '../../img/accounting.jpg';
const accounting = [
{id: 1, title: "Flexible From Anywhere", desc: "Taxi accounting is a fully flexible online system to control from anywhee"},
{id: 2, title: "Flexible Plus For Anyone", desc: "It is so simple to use that it could be suitable for anyone without any accounting knowledge"},
{id: 3, title: "Premium", desc: "Premium Account is manually checked and cerfied by qualified Accountants"}]
function Aboutus() {

    return (
        <div className="px-24 text-black py-10">
            <h2 className="font-bold font-sans text-center text-2xl">About Our System</h2>
            <div className="md:flex w-full">
                <div className="w-full md:w-1/2">
                    <div className="md:mt-10">
                        <img className="w-full pt-5 m-2" src={banar}  alt="" />
                    </div>
                </div>
                <div className="w-full md:w-1/2">                    
                    <div className="mt-10 ml-5">
                        <h2 className="font-bold font-sans text-center text-2xl">UNIQUE ACCOUNTING SYSTEM</h2>
                        <div>
                            {accounting.map(ac => 
                            <div className="flex mt-3" key={ac.id}>
                                <div className="w-3 h-3 bg-black"></div>
                                <p className="ml-3">
                                <span className="font-bold text-sm font-sans mr-3">{ac.title} :</span>
                                <span className="text-price text-sm font-sans">{ac.desc}</span>
                                </p>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-10">

                        <h2 className="font-bold font-sans text-center text-2xl">OUR SERVICES</h2>
                        <p className="text-price mt-5 ml-5 justify-between">Tand Accounting is a time consuming system to reduce your time and afford to make your taxi business as simple as you understand After joining win this system, you are no longe
wating in the queue for Accountan appointments. You can see your incomer experies and financial statements just log from anywhere, anytime. You can see your income, experts
and tinancial statement just login from anywhere, anytime
If you still think you need some advice from our dedicated accountants then you can make a Skype calor face to face appointment for your emergency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;