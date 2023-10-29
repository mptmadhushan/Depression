import React from "react";
import { Link } from "react-router-dom";
import ChatBot from "../../Components/chatbot";
import TopNav from "../../Components/TopNav";
import EmpSideNav from "../../Components/EmpSideNav";

const EmployeeActivities = () => {
    return (
        <div className="body-wrapper w-full bg-gray-100 flex justify-between flex-row">

        <EmpSideNav/>
        <TopNav/>
            <div className="body-container sm:w-2/3 lg:w-5/6 h-full  mt-[86px] flex flex-col ">


                <div className="flex flex-col w-full space-y-5 p-5">

                    <div className="d-card p-3 bg-white rounded-lg flex justify-center  flex-col w-full">
                        <h3 className="text-[#151515] text-[1.3rem] font-semibold ">Deep breathing/ diaphragmatic breathing</h3>
                        <h4 className="text-[#151515] text-[1.2rem] mt-5">4 Steps</h4>
                        <ol className="list-decimal ml-[30px]">
                            <li>Breathe in through the nose for a count of 4.</li>
                            <li>Hold breath for a count of 4.</li>
                            <li>Breath out for a count of 4.</li>
                            <li>Hold breath for a count of 4.</li>
                        </ol>
                        <p className="text-[1.2rem] mt-5">
                        Deep breathing/diaphragmatic breathing and Box breathing, where you refocus your attention on your breathing. Box breathing is a breathing exercise to assist patients with stress management and can be implemented before, during, and/or after stressful experiences. Box breathing uses four simple steps. Its title is intended to help the patient visualize a box with four equal sides as they perform the exercise. This exercise can be implemented in a variety of circumstances and does not require a calm environment to be effective.
                        </p>
                    </div>

                    <div className="w-full mt-5 justify-center items-center flex flex-row space-x-5">
                            <button className="w-[128px] border-[1px] border-[#5C3BB9] bg-[#5C3BB9] rounded-md text-white py-2">Accept</button>
                            <button className="w-[128px] border-[1px] border-red-500 text-red-500 rounded-md py-2">Reject</button>
                    </div>
                </div>


                <div >
          <ChatBot />
        </div>

            </div>
        </div>
    );
}

export default EmployeeActivities;