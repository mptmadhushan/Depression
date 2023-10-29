import React from "react";
import { Link } from "react-router-dom";
import ChatBot from "../../Components/chatbot";
import TopNav from "../../Components/TopNav";
import EmpSideNav from "../../Components/EmpSideNav";

const Dashboard = () => {
    return (
        <div className="body-wrapper w-full bg-gray-100 flex justify-between flex-row">

        <EmpSideNav/>
        <TopNav/>
            <div className="body-container sm:w-2/3 lg:w-5/6 h-full  mt-[86px] flex flex-col ">


                <div className="flex flex-row w-full space-x-5 p-5">

                    <div className="d-card p-3 bg-white rounded-lg flex justify-center  flex-col w-full">
                        <h2 className="text-[#5C3BB9] text-[1rem]">You have new Recommended Activity</h2>
                        <h3 className="text-[#151515] text-[1.3rem] font-semibold">Deep breathing/ diaphragmatic breathing</h3>
                        <h4 className="text-[#151515] text-[0.8rem] ">4 Steps</h4>
                    </div>
                </div>


                <div className="w-full flex flex-row p-5 space-x-5">


                    <div className="allocate-project bg-white p-2 rounded-md border-gray-100 border-[1px] w-full">
                        <h3 className="text-[#151515] text-[1.3rem] ">Pending Task</h3>
                        <div className="mt-3 w-full">
                            <table className="w-full leading-10">
                                <th className="font-medium w-1/6 text-left bg-slate-100">#</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Start Date</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">End Date</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Task</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Project</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Progress</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Status</th>

                                <tbody className="w-full">
                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20 Aug 2023</td>
                                        <td>22 Aug 2023</td>
                                        <td>UI Design</td>
                                        <td>BOC Web</td>
                                        <td>10%</td>
                                        <td>WIP</td>
                                    </tr>
                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20 Aug 2023</td>
                                        <td>22 Aug 2023</td>
                                        <td>UI Design</td>
                                        <td>BOC Web</td>
                                        <td>10%</td>
                                        <td>WIP</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20 Aug 2023</td>
                                        <td>22 Aug 2023</td>
                                        <td>UI Design</td>
                                        <td>BOC Web</td>
                                        <td>10%</td>
                                        <td>WIP</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20 Aug 2023</td>
                                        <td>22 Aug 2023</td>
                                        <td>UI Design</td>
                                        <td>BOC Web</td>
                                        <td>10%</td>
                                        <td>WIP</td>
                                    </tr>
                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20 Aug 2023</td>
                                        <td>22 Aug 2023</td>
                                        <td>UI Design</td>
                                        <td>BOC Web</td>
                                        <td>10%</td>
                                        <td>WIP</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>


                <div className="w-full flex flex-row p-5 space-x-5">

                    <div className="allocate-project bg-white p-2 rounded-md border-gray-100 border-[1px] w-1/2">
                        <h3 className="text-[#151515] text-[1.3rem] ">Level Request</h3>
                        <div className="mt-3 w-full">
                            <table className="w-full leading-10">
                                <th className="font-medium w-1/4 text-left bg-slate-100">#</th>
                                <th className="font-medium w-1/4 text-left bg-slate-100">To Date</th>
                                <th className="font-medium w-1/4 text-left bg-slate-100">From Date</th>
                                <th className="font-medium w-1/4 text-left bg-slate-100">Status</th>

                                <tbody className="w-full">
                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20 Aug 2023</td>
                                        <td>24 Aug 2023</td>
                                        <td>24 Pending</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20 Aug 2023</td>
                                        <td>24 Aug 2023</td>
                                        <td>24 Pending</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20 Aug 2023</td>
                                        <td>24 Aug 2023</td>
                                        <td>24 Pending</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20 Aug 2023</td>
                                        <td>24 Aug 2023</td>
                                        <td>24 Pending</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20 Aug 2023</td>
                                        <td>24 Aug 2023</td>
                                        <td>24 Pending</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>



                    <div className="Leave-request bg-white p-2 rounded-md border-gray-100 border-[1px] w-1/2">
                        <h3 className="text-[#151515] text-[1.3rem] ">Meetings</h3>
                        <div className="mt-3 w-full">
                            <table className="w-full leading-10">
                                <th className="font-medium w-1/6 text-left bg-slate-100">#</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Date</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Time</th>
                                <th className="font-medium w-1/6 text-center bg-slate-100">Project</th>
                                <th className="font-medium w-1/6 text-center bg-slate-100">Title</th>
                                <th className="font-medium w-1/6 text-center bg-slate-100">Attenders</th>
                                <tbody className="w-full">
                                    <tr className="border-collapse border-b-[1px] leading-8">
                                        <td >1</td>
                                        <td >20/10/2023</td>
                                        <td >13:20:45</td>
                                        <td >Project Name</td>
                                        <td >Title</td>
                                        <td >Mr.Perera, Mr.Sugath</td>

                                    </tr>

                                    <tr className="border-collapse border-b-[1px] leading-8">
                                        <td >1</td>
                                        <td >20/10/2023</td>
                                        <td >13:20:45</td>
                                        <td >Project Name</td>
                                        <td >Title</td>
                                        <td >Mr.Perera, Mr.Sugath</td>

                                    </tr>
                                    <tr className="border-collapse border-b-[1px] leading-8">
                                        <td >1</td>
                                        <td >20/10/2023</td>
                                        <td >13:20:45</td>
                                        <td >Project Name</td>
                                        <td >Title</td>
                                        <td >Mr.Perera, Mr.Sugath</td>

                                    </tr>

                                    <tr className="border-collapse border-b-[1px] leading-8">
                                        <td >1</td>
                                        <td >20/10/2023</td>
                                        <td >13:20:45</td>
                                        <td >Project Name</td>
                                        <td >Title</td>
                                        <td >Mr.Perera, Mr.Sugath</td>

                                    </tr>
                                    <tr className="border-collapse border-b-[1px] leading-8">
                                        <td >1</td>
                                        <td >20/10/2023</td>
                                        <td >13:20:45</td>
                                        <td >Project Name</td>
                                        <td >Title</td>
                                        <td >Mr.Perera, Mr.Sugath</td>

                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>

                <div className="w-full flex flex-wrap gap-5 p-5 justify-center">
                    <div className="w-1/6 sm:h-[200px] bg-white rounded-md border-[1px] border-gray-200 flex flex-col space-y-2 justify-center items-center">
                        <h2>Employee Name</h2>
                        <div className="w-full h-full bg-slate-300">

                        </div>
                    </div>

                    <div className="w-1/6 sm:h-[200px] bg-white rounded-md border-[1px] border-gray-200 flex flex-col space-y-2 justify-center items-center">
                        <h2>Employee Name</h2>
                        <div className="w-full h-full bg-slate-300">

                        </div>
                    </div>

                    <div className="w-1/6 sm:h-[200px] bg-white rounded-md border-[1px] border-gray-200 flex flex-col space-y-2 justify-center items-center">
                        <h2>Employee Name</h2>
                        <div className="w-full h-full bg-slate-300">

                        </div>
                    </div>

                    <div className="w-1/6 sm:h-[200px] bg-white rounded-md border-[1px] border-gray-200 flex flex-col space-y-2 justify-center items-center">
                        <h2>Employee Name</h2>
                        <div className="w-full h-full bg-slate-300">

                        </div>
                    </div>

                    <div className="w-1/6 sm:h-[200px] bg-white rounded-md border-[1px] border-gray-200 flex flex-col space-y-2 justify-center items-center">
                        <h2>Employee Name</h2>
                        <div className="w-full h-full bg-slate-300">

                        </div>
                    </div>

                    <div className="w-1/6 sm:h-[200px] bg-white rounded-md border-[1px] border-gray-200 flex flex-col space-y-2 justify-center items-center">
                        <h2>Employee Name</h2>
                        <div className="w-full h-full bg-slate-300">

                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-row p-5 space-x-5">


                    <div className="Birthdays bg-white p-2 rounded-md border-gray-100 border-[1px] w-full">
                        <h3 className="text-[#151515] text-[1.3rem] ">Upcoming Birthdays</h3>
                        <div className="mt-3 w-full">
                            <table className="w-full leading-10">
                                <th className="font-medium w-1/4 text-left bg-slate-100">#</th>
                                <th className="font-medium w-1/4 text-left bg-slate-100">Name</th>
                                <th className="font-medium w-1/4 text-left bg-slate-100">Date</th>
                                <th className="font-medium w-1/4 text-left bg-slate-100"></th>
                                

                                <tbody className="w-full ">
                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>Ishini Chamathka</td>
                                        <td>Today</td>
                                        <td className="flex justify-center">
                                            <button className="w-[128px] border-[1px] border-[#5C3BB9] rounded-md">Send Wish</button>
                                        </td>
                                     
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>Ishini Chamathka</td>
                                        <td>Today</td>
                                        <td className="flex justify-center">
                                            <button className="w-[128px] border-[1px] border-[#5C3BB9] rounded-md">Send Wish</button>
                                        </td>
                                     
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>Ishini Chamathka</td>
                                        <td>Today</td>
                                        <td className="flex justify-center">
                                            <button className="w-[128px] border-[1px] border-[#5C3BB9] rounded-md">Send Wish</button>
                                        </td>
                                     
                                    </tr>
                                    

                                

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>




                <div >
          <ChatBot />
        </div>


            </div>
        </div>
    );
}

export default Dashboard;