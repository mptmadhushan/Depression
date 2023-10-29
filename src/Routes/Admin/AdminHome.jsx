import React from "react";
import { Link } from "react-router-dom";
import ChatBot from "../../Components/chatbot";
import TopNav from "../../Components/TopNav";
import AdminSideNav from "../../Components/AdminSideNav";


const Dashboard = () => {






    return (
        <div className="body-wrapper w-full bg-gray-100 flex justify-between flex-row overflow-y-auto " id="style-7" >

        <AdminSideNav/>
        <TopNav/>
            <div className="body-container sm:w-2/3 lg:w-5/6 mt-[86px] flex flex-col overflow-y-auto" id="style-7">
            
                <div className="flex flex-row w-full space-x-5 p-5">

                    <div className="d-card p-3 bg-white rounded-lg flex justify-center items-center flex-col w-1/4">
                        <h3 className="text-[#151515] text-[1.3rem] font-semibold">Total Projects</h3>
                        <h4 className="text-[#5C3BB9] text-[1.6rem] font-semibold">10</h4>
                    </div>

                    <div className="d-card p-3 bg-white rounded-lg flex justify-center items-center flex-col w-1/4">
                        <h3 className="text-[#151515] text-[1.3rem] font-semibold">Today Working Employees</h3>
                        <h4 className="text-[#5C3BB9] text-[1.6rem] font-semibold">10</h4>
                    </div>

                    <div className="d-card p-3 bg-white rounded-lg flex justify-center items-center flex-col w-1/4">
                        <h3 className="text-[#151515] text-[1.3rem] font-semibold">Working Days</h3>
                        <h4 className="text-[#5C3BB9] text-[1.6rem] font-semibold">10</h4>
                    </div>

                    <div className="d-card p-3 bg-white rounded-lg flex justify-center items-center flex-col w-1/4">
                        <h3 className="text-[#151515] text-[1.3rem] font-semibold">Total Leaving Employees</h3>
                        <h4 className="text-[#5C3BB9] text-[1.6rem] font-semibold">10</h4>
                    </div>

                </div>


                <div className="w-1/2 flex flex-row space-x-5 p-5">
                    <button className="text-white text-[1rem] bg-[#5C3BB9] w-1/2 py-2 px-2 rounded-md">Add New Employee</button>
                    <button className="text-white text-[1rem] bg-[#5C3BB9] w-1/2 py-2 px-2 rounded-md">Add New Project</button>
                </div>


                <div className="w-full flex flex-row p-5 space-x-5">


                    <div className="allocate-project bg-white p-2 rounded-md border-gray-100 border-[1px] w-1/2">
                        <h3 className="text-[#151515] text-[1.3rem] ">Allocate Projects</h3>
                        <div className="mt-3 w-full">
                            <table className="w-full leading-10">
                                <th className="font-medium w-1/5 text-left bg-slate-100">#</th>
                                <th className="font-medium w-2/5 text-left bg-slate-100">Employee</th>
                                <th className="font-medium w-2/5 text-left bg-slate-100">Allocate Project</th>
                  
                                <tbody className="w-full">
                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>Admin - CIC - UAT</td>
                                        <td>Super Administrator</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>Admin - CIC - UAT</td>
                                        <td>Super Administrator</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>Admin - CIC - UAT</td>
                                        <td>Super Administrator</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>Admin - CIC - UAT</td>
                                        <td>Super Administrator</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>Admin - CIC - UAT</td>
                                        <td>Super Administrator</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>



                    <div className="Leave-request bg-white p-2 rounded-md border-gray-100 border-[1px] w-1/2">
                        <h3 className="text-[#151515] text-[1.3rem] ">Allocate Projects</h3>
                        <div className="mt-3 w-full">
                            <table className="w-full leading-10">
                                <th className="font-medium w-1/6 text-left bg-slate-100">#</th>
                                <th className="font-medium w-1/4 text-left bg-slate-100">Employee</th>
                                <th className="font-medium w-1/4 text-left bg-slate-100">Allocate Project</th>
                                <th className="font-medium w-2/4 text-center bg-slate-100">Action</th>
                                <tbody className="w-full">
                                    <tr className="border-collapse border-b-[1px] leading-8">
                                        <td className="py-2">1</td>
                                        <td className="py-2">Admin - CIC - UAT</td>
                                        <td className="py-2">Super Administrator</td>
                                        <td className="flex flex-row justify-center space-x-2 py-2">
                                            <button className="border-red-400 rounded-md border-[2px]  text-[0.7rem] sm:w-[56px] text-red-500 font-semibold">Reject</button>
                                            <button className="border-green-400 rounded-md border-[2px]  text-[0.7rem] sm:w-[56px] text-green-500 font-semibold">Approve</button>
                                        </td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] leading-8">
                                        <td className="py-2">1</td>
                                        <td className="py-2">Admin - CIC - UAT</td>
                                        <td className="py-2">Super Administrator</td>
                                        <td className="flex flex-row justify-center space-x-2 py-2">
                                            <button className="border-red-400 rounded-md border-[2px]  text-[0.7rem] sm:w-[56px] text-red-500 font-semibold">Reject</button>
                                            <button className="border-green-400 rounded-md border-[2px]  text-[0.7rem] sm:w-[56px] text-green-500 font-semibold">Approve</button>
                                        </td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] leading-8">
                                        <td className="py-2">1</td>
                                        <td className="py-2">Admin - CIC - UAT</td>
                                        <td className="py-2">Super Administrator</td>
                                        <td className="flex flex-row justify-center space-x-2 py-2">
                                            <button className="border-red-400 rounded-md border-[2px]  text-[0.7rem] sm:w-[56px] text-red-500 font-semibold">Reject</button>
                                            <button className="border-green-400 rounded-md border-[2px]  text-[0.7rem] sm:w-[56px] text-green-500 font-semibold">Approve</button>
                                        </td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] leading-8">
                                        <td className="py-2">1</td>
                                        <td className="py-2">Admin - CIC - UAT</td>
                                        <td className="py-2">Super Administrator</td>
                                        <td className="flex flex-row justify-center space-x-2 py-2">
                                            <button className="border-red-400 rounded-md border-[2px]  text-[0.7rem] sm:w-[56px] text-red-500 font-semibold">Reject</button>
                                            <button className="border-green-400 rounded-md border-[2px]  text-[0.7rem] sm:w-[56px] text-green-500 font-semibold">Approve</button>
                                        </td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] leading-8">
                                        <td className="py-2">1</td>
                                        <td className="py-2">Admin - CIC - UAT</td>
                                        <td className="py-2">Super Administrator</td>
                                        <td className="flex flex-row justify-center space-x-2 py-2">
                                            <button className="border-red-400 rounded-md border-[2px]  text-[0.7rem] sm:w-[56px] text-red-500 font-semibold">Reject</button>
                                            <button className="border-green-400 rounded-md border-[2px]  text-[0.7rem] sm:w-[56px] text-green-500 font-semibold">Approve</button>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>





                <div className="w-full flex flex-row p-5 space-x-5">


                    <div className="allocate-project bg-white p-2 rounded-md border-gray-100 border-[1px] w-full">
                        <h3 className="text-[#151515] text-[1.3rem] ">Allocate Projects</h3>
                        <div className="mt-3 w-full">
                            <table className="w-full leading-10">
                                <th className="font-medium w-1/6 text-left bg-slate-100">#</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Date</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Time</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Project</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Title</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Attenders</th>

                                <tbody className="w-full">
                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20/10/2023</td>
                                        <td>13:20:45</td>
                                        <td>Project Name</td>
                                        <td>Title</td>
                                        <td>Mr.Perera, Mr.Sugath</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20/10/2023</td>
                                        <td>13:20:45</td>
                                        <td>Project Name</td>
                                        <td>Title</td>
                                        <td>Mr.Perera, Mr.Sugath</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20/10/2023</td>
                                        <td>13:20:45</td>
                                        <td>Project Name</td>
                                        <td>Title</td>
                                        <td>Mr.Perera, Mr.Sugath</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20/10/2023</td>
                                        <td>13:20:45</td>
                                        <td>Project Name</td>
                                        <td>Title</td>
                                        <td>Mr.Perera, Mr.Sugath</td>
                                    </tr>

                                    <tr className="border-collapse border-b-[1px] ">
                                        <td>1</td>
                                        <td>20/10/2023</td>
                                        <td>13:20:45</td>
                                        <td>Project Name</td>
                                        <td>Title</td>
                                        <td>Mr.Perera, Mr.Sugath</td>
                                    </tr>

                                    
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>



                <div>
                    <ChatBot />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;