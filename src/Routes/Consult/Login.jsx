import React from "react";
import homebg from '../../Assets/Images/login.png';
import { Link } from "react-router-dom";
import WebcamComponent from "../../Components/Webcam";


const Login = () => {

    return (
        <div className="body-wrapper w-full h-screen bg-[#18001F] fixed">
            <div className="body-main sm:p-5 h-full justify-center items-center flex relative w-[80%] mx-auto">
                <div className="body-content sm:p-5 flex flex-row w-full h-full justify-center items-center sm:space-x-5 relative">
                    <div className="content-holder sm:w-1/2 flex justify-center items-center">
                        <div className="flex flex-col w-full text-left">
                            <h2 className="font-semibold text-white sm:text-[2rem]">Let’s do something
                                amazing today.</h2>
                            <p className="sm:text-[1rem] text-white">Maybe some text here will help me see it better. Oh God. Oke, let’s do it then. </p>
                            <h2 className="sm:text-[4rem] text-white font-bold">Name</h2>
                        </div>
                    </div>
                    <div className="main-img-holder sm:w-1/2 relative flex justify-center items-center flex-col sm:space-y-5">
                        <div className="flex w-full relative justify-center items-center ">
                            <WebcamComponent/>
                        </div>
                        <Link to="/Dashboard">
                            <h3 className="text-white sm:text-[1.5rem]">Login</h3>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;