import React from "react";
import { Link } from "react-router-dom";


const TopNav = () =>{
    return(
        <div className="nav-wrapper w-full h-[72px] bg-white flex fixed z-10">
            <div className="nav-body  p-3 flex flex-row w-full justify-between items-center">
                <div className="flex flex-row w-1/3 text-center items-center justify-between">
                    <div className="flex flex-row w-1/2 text-center justify-center items-center">
                        {/* <h2 className="text-[#5C3BB9] font-bold sm:text-[2.5rem] text-center ">Name</h2> */}
                    </div>
                    <div className="flex flex-row w-1/2 text-center justify-center items-center">
                        <h2 className="text-[#151515] font-bold sm:text-[1.2rem] text-center ">Dashboard</h2>
                    </div>
                </div>
                <div className="flex flex-row w-2/3">
                    <div className="flex flex-row w-full justify-end sm:mr-10">
                        <h2 className="text-[#151515] font-bold sm:text-[1.2rem] text-center ">Welcome back Kasun!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;