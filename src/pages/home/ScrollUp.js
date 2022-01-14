import React from "react";
import { FaArrowUp } from "react-icons/fa";
function ScrollUp() {
    return (
        <div className="fixed bottom-0 right-0 px-6 mb-3 ">
            <button className="border-2 rounded-full p-2"><FaArrowUp className="text-white p-1" /></button>
            
        </div>
    );
}

export default ScrollUp;