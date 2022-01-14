import React from "react";
import { FaThumbsUp } from "react-icons/fa";
function TaxiAdverttising() {
    return (
        <div className="px-20 bg-prim py-10">
            <h2 className="text-center text-white font-thin text-2xl">taxi advertising</h2>
            <div className="md:flex w-full">
                <div className="w-full md:w-2/6">
                    <h2 className="text-2xl font-thin my-10 ">advertise on our taxis now!</h2>
                    <p className="text-white mt-10 text-sm">London Taxi Advertising. The UK's leading taxi advertising agency enabling you to advertise on the iconic black Taxi cab anywhere in the UK..</p>

                    <h3 className="mt-5">3 easy steps:</h3>
                    <div className="mt-5">
                        <p><FaThumbsUp className="inline mr-3" /><span className="text-white">Choose a taxi model</span></p>
                        <p className="my-2"><FaThumbsUp className="inline mr-3" /><span className="text-white">Choose advertising position</span></p>
                        <p><FaThumbsUp className="inline mr-3" /><span className="text-white">Select time period</span></p>
                    </div>
                    <h2 className='text-2xl text-white mt-10 font-thin'>contact us and get started!</h2>
                    <button className="bg-black text-white  py-4 px-8 rounded-full focus:outline-none mt-8 border hover:bg-green-700 border-pink">Contact us for pricing</button>
                </div>
                <div className="w-full md:w-4/6 md:flex mt-10 px-10 justify-between">
                    <div>
                        <img src="https://demo.exptheme.com/citycab/wp-content/uploads/2015/02/taxi1.png" alt="" />
                    </div>
                    <div className="sm:mt-10 md:ml-12">
                        <img src="https://demo.exptheme.com/citycab/wp-content/uploads/2015/02/taxi2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaxiAdverttising;