import React from "react";
import { FaAndroid, FaApple, FaBuilding, FaEnvelope, FaFacebook, FaGooglePlus, FaPhone, FaPinterest, FaPrint, FaTwitter, FaWindows, FaYoutube } from "react-icons/fa";

const contacts = [
    {icon: FaEnvelope, text: "info@taxiaccounting.co.uk"},
    {icon: FaPhone, text: "0191 691 8791"},
    {icon: FaBuilding, text: "Unit-3, 2A Beaconsfield St, Newcastle upon Tyne NE4 5JN"},
]
const social = [{icon: FaFacebook}]
function Footer() {
    return (
        <div className="text-white">
            <div className="sm:flex bg-black px-20 pt-10 pb-5 justify-between">
                <div className="w-full sm:w-6/12 lg:w-w-2/5">
                    <h2 className="font-mon-alt text-2xl mb-5">Policy</h2>
                    <p>This first part of a company's Health & Safety Policy is the employer's Health & Safety Policy Statement (sometimes referred to as the Statement of Intent).
</p>
                </div>
                {/* <div className="w-full sm:w-6/12 lg:w-1/3">
                    <h2 className="font-mon-alt text-2xl mb-5">Help</h2>
                    <p>Now you can download our app on every mobile device:</p>
                    <div className="flex mt-5">
                        <button className="py-2 px-2 hover:bg-purple-700 p-2 bg-yellow-600 text-white rounded-full">
                            <FaApple />
                        </button>
                        <button className="py-2 px-2 p-2 hover:bg-purple-700 bg-yellow-600 text-white rounded-full">
                            <FaAndroid />
                        </button>
                        <button className="py-2 px-2 p-2 hover:bg-purple-700 bg-yellow-600 text-white rounded-full">
                            <FaWindows />
                        </button>
                    </div>
                </div> */}
                <div className="w-full sm:w-6/12 lg:w-w-1/4">
                    <h2 className="font-mon-alt text-2xl mb-5">Contacts</h2>
                    <div>
                        {contacts.map(ct => 
                        <p className="pt-2"><ct.icon className="inline mr-3" />{ct.text}</p>
                        )}
                    </div>
                </div>
                {/* <div className="w-full sm:w-6/12 lg:w-3/12">
                    <h2 className="font-mon-alt text-2xl mb-5">MoreStuff</h2>
                    <div>
                        <p><FiCheck className="inline text-yellow-600 font-bold text-sm" />Taxi drivers for hire in your city</p>
                        <p><FiCheck className="inline text-yellow-600 font-bold text-sm" />Latest from our blog</p>
                        <p><FiCheck className="inline text-yellow-600 font-bold text-sm" />Useful links - check the complete list</p>
                        <p><FiCheck className="inline text-yellow-600 font-bold text-sm" />New bigger & better F.A.Q. section</p>
                    </div>
                </div> */}
            </div>
            <div className="bg-dark px-20 pt-10 pb-4 flex justify-between">
                <p className="text-sm self-center">Copyright &copy;2022 Taxi Accounting</p>
                <div className="flex">
                    {social.map(so =>
                    <a href="https://www.facebook.com/taxiaccounting/" target="_blank" className="border-2 py-3 px-3 hover:bg-blue-600 rounded-full mx-1 bg-grey cursor-pointer"><so.icon className="text-center" /></a>
                    )}
                </div>
                <p className="self-center">about | contacts</p>
            </div>
        </div>
    );
}

export default Footer;