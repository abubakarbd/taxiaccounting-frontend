import React from "react";
import { FaApple, FaWindows } from "react-icons/fa";
import { MdAndroid } from "react-icons/md";
function DownloadApp() {
    return (
        <div className="px-24 text-black py-10">
            <h2 className="text-center text-2xl pt-5">download our app</h2>
            <div className="md:flex w-full">
                <div className="w-full md:w-1/2">
                    <img src="https://demo.exptheme.com/citycab/wp-content/uploads/2015/02/app.jpg" alt="" />
                </div>
                <div className="w-full md:w-1/2">
                    <div>
                        <h2 className="font-semibold text-center mt-10">book your taxi in just a few second!</h2>
                        
                        <p className="text-price text-center text-sm mt-5">Our app is easy to use and very user friendly. Just choose your start and end location, select the car you like and in just a few minutes we’ll be at your doorstep.</p>
                        
                    </div>
                    <div>
                        <h2 className="font-semibold text-center mt-10">book your taxi in just a few second!</h2>
                        <div className="flex">
                            <div className="mt-2">
                            <div className="text-white bg-prim w-10 h-10 hover:bg-black rounded-full font-bold text-2xl"><p className="pt-3 pl-3 text-sm">01</p></div>
                            </div>
                            <div className="text-price text-center text-sm mt-5">
                                <p>ate the trip mileage // lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mt-2">
                                <div className="text-white bg-prim w-10 h-10 hover:bg-black rounded-full font-bold text-2xl"><p className="pt-3 pl-3 text-sm">02</p></div>
                            </div>
                            <div className="text-price text-center text-sm mt-5">
                                <p>ate the trip mileage // lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mt-2">
                            <div className="text-white bg-prim w-10 h-10 hover:bg-black rounded-full font-bold text-2xl"><p className="pt-3 pl-3 text-sm">03</p></div>
                            </div>
                            <div className="text-price text-center text-sm mt-5">
                                <p>ate the trip mileage // lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <h2 className="text-center font-bold">download now:</h2>
                        <p className="text-price mt-4 text-center text-sm">This app is available for: Android, iOS & Windows Mobile!
                        <br />
                        CityCab is reserving the rights to change prices, rates, vehicles in our disgrace.</p>
                        <div className="flex w-2/6 mr-auto ml-auto justify-between mt-5 text-prim">
                            <button className="py-4 px-4 hover:bg-blue-700 bg-black rounded-full">
                                <FaApple />
                            </button>
                            <button className="py-4 px-4 hover:bg-blue-700  bg-black rounded-full">
                                <MdAndroid />
                            </button>
                            <button className="py-4 px-4 hover:bg-blue-700 bg-black rounded-full">
                                <FaWindows />
                            </button>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
}

export default DownloadApp;