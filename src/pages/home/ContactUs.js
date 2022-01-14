import React from "react";
import { FaAsterisk } from 'react-icons/fa';
import banar from '../../img/cab.png';
function ContactUs() {
    return (
        <div className="booking_taxi">
            <h3 className="text-center text-white  font-bold text-4xl font-mon-alt pt-3">Contact us</h3>
            <div className="w-full md:flex text-white  ">
                <div className="w-full md:w-1/2 pb-10 pt-5 m-2">
                    <form action="" className="ml-20">
                        <div className="flex w-full">
                            <span className="bg- w-4/12 text-white font-bold">When <FaAsterisk className="text-red-700 text-sm inline" /
                            ></span>
                            <input type="date" className="w-8/12 text-white m-3 rounded p-2" name="date" id="date" style={{backgroundColor: "111"}} />
                        </div>
                        <div className="flex w-full">
                            <span className="w-4/12 text-white font-bold">Hour <FaAsterisk className="text-red-700 text-sm inline" /
                            ></span>
                            <input type="text" className="w-8/12 m-3 text-black rounded p-2" name="date" id="date" style={{backgroundColor: "1a1a1a"}} />
                        </div>
                        <div className="flex w-full">
                            <span className="w-4/12 text-white font-bold">Start Destination <FaAsterisk className="text-red-700 text-sm inline" /
                            ></span>
                            <input type="text" className="w-8/12 text-black  m-3 rounded py-2" name="date" id="date" style={{backgroundColor: "1a1a1a"}} />
                        </div>
                        <div className="flex w-full">
                            <span className="w-4/12 text-white font-bold">End Destination <FaAsterisk className="text-red-700 text-sm inline" /
                            ></span>
                            <input type="text" className="w-8/12 text-black m-3 rounded py-2" name="date" id="date" style={{backgroundColor: "1a1a1a"}} />
                        </div>
                       
                        <div className="flex w-full">
                            <span className="w-4/12 text-white font-bold ">Phone <FaAsterisk className="text-red-700 text-sm inline" /
                            ></span>
                            <input type="text" className="w-8/12 text-black  m-3 rounded py-2" name="phone" id="phone" style={{backgroundColor: "1a1a1a"}} />
                        </div>
                        <div className="flex w-full">
                            <span className="w-4/12 text-white font-bold">End Destination <FaAsterisk className="text-red-700 text-sm inline" /
                            ></span>
                            <div className="">
                                <label for="town taxi" className="block">
                                    <input type="radio" className="" name="vehicle" id="town taxi" style={{backgroundColor: "1a1a1a"}} />
                                    <span className="ml-2 font-bold text-white">Town Taxi</span>
                                </label>
                                
                                <label for="hybrid taxi" className="block">
                                    <input type="radio" className="" name="vehicle" id="hybrid taxi" style={{backgroundColor: "1a1a1a"}} />
                                    <span className="ml-2 font-bold text-white">Hybrid Taxi</span>
                                </label>
                                <label for="limousine taxi" className="block">
                                    <input type="radio" className="" name="vehicle" id="limousine taxi" style={{backgroundColor: "1a1a1a"}} />
                                    <span className="ml-2 font-bold text-white">Limousine Taxi</span>
                                </label>
                                <label for="suv taxi" className="block">
                                    <input type="radio" className="" name="vehicle" id="suv taxi" style={{backgroundColor: "1a1a1a"}} />
                                    <span className="ml-2 font-bold text-white">Suv Taxi</span>
                                </label>
                            </div>
                        </div>
                        <input className="text-white bg-yellow-600 hover:bg-yellow-700 py-2 px-5 rounded-full cursor-pointer" type="submit" name="" value="Submit" />
                    </form>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="h-120 m-2">
                    <img src={banar}  alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;