import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import ViewActivity from '../../Components/ViewActivity';
import AddNewActivity from '../../Components/AddNewActivity';
import ChatBot from '../../Components/chatbot';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import TopNav from "../../Components/TopNav";
import ConsultSideNav from '../../Components/ConsultSideNav';
import DockButton from '../../Components/DockButton';

const Dashboard = () => {
    const [isViewActivityVisible, setIsViewActivityVisible] = useState(false);
    const [isAddNewActivityVisible, setIsAddNewActivityVisible] = useState(false);
    const [respo, setRespo] = useState();


    const openViewActivity = () => {
        setIsViewActivityVisible(true);
      };
    const closeViewActivity = () => {
        setIsViewActivityVisible(false);
    };


    const  openAddNewActivity =async () => {
        await handleApiCall()
        setIsAddNewActivityVisible(true);
      };
    const closeAddNewActivity = () => {
        setIsAddNewActivityVisible(false);
    };






    const [mentalSeverity, setMentalSeverity] = useState('Normal');
    const [mood, setMood] = useState('Happy');

    const handleMentalSeverityChange = (e) => {
        setMentalSeverity(e.target.value);
    };
    const handleMoodChange = (e) => {
        setMood(e.target.value);
    };
    const handleApiCall = () => {
        const postData = {
          Age: 20,
          Gender: "Female",
          "Severity Level": mentalSeverity,
          Emotion:mood,
        };
    
        axios
          .post("http://127.0.0.1:5000/api/activity", postData)
          .then((response) => {
            console.log("API Response:", response.data);
            setRespo(response.data)
          })
          .catch((error) => {
            console.error("API Call Error:", error);
          });
      };
    return (
        <div className="body-wrapper w-full bg-gray-100 flex justify-between flex-row">

        <ConsultSideNav/>
        <TopNav/>
        {isViewActivityVisible && <ViewActivity onClose={closeViewActivity}  />}
        {isAddNewActivityVisible && <AddNewActivity onClose={closeAddNewActivity}  />}
            <div className="body-container sm:w-2/3 lg:w-5/6 h-full  mt-[86px] flex flex-col ">
                <div className="flex flex-row w-1/2 space-x-5 p-5">

                    <div className="d-card p-3 file:flex justify-center items-left flex-col w-1/2 space-y-3">
                        <h3 className="text-[#151515] text-[1rem] font-semibold text-left">Select Mental Severity Level</h3>
                        <select value={mentalSeverity} onChange={handleMentalSeverityChange} className='w-full p-2 border-[1px] border-gray-200 rounded-md cursor-pointer'>
                            <option value="Normal">Normal</option>
                            <option value="Mild">Mild</option>
                            <option value="Moderate">Moderate</option>
                        </select>

                    </div>

                    <div className="d-card p-3 flex justify-center items-left flex-col w-1/2 space-y-3">
                        <h3 className="text-[#151515] text-[1rem] font-semibold text-left">Select Mood</h3>
                        <select value={mood} onChange={handleMoodChange} className='w-full p-2 border-[1px] border-gray-200 rounded-md cursor-pointer'>
                            <option value="Happy">Happy</option>
                            <option value="Sad">Sad</option>
                            <option value="Neutral">Neutral</option>
                        </select>
                    </div>



                </div>


                <div className="w-full justify-between flex flex-row space-x-5 p-5">
                    <button className="text-white text-[1rem] bg-[#5C3BB9] w-1/2 py-2 px-2 rounded-md" onClick={openAddNewActivity}>Add New Activity</button>
                    <DockButton/>
                </div>

                

                <div className="w-full flex flex-row p-5 space-x-5">


                    <div className="allocate-project bg-white p-2 rounded-md border-gray-100 border-[1px] w-full">
                        <h3 className="text-[#151515] text-[1.3rem] ">Activities</h3>
                        <div className="mt-3 w-full">
                            <table className="w-full leading-10">
                                <th className="font-medium w-1/6 text-left bg-slate-100">#</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Mental Severity Level</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Mood</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Recommended Activities</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Action</th>


                                <tbody className="w-full">
                                    <tr className="border-collapse border-b-[1px] row-span-5">
                                        <td>1</td>

                                        <td>Normal</td>

                                        <td>
                                            <tr>
                                                <td>
                                                    Happy
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Sad
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Neutral
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Disgust
                                                </td>
                                            </tr>

                                        </td>


                                        <td>
                                            <tr>
                                                <td>
                                                    Activity
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Activity
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Activity
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Activity
                                                </td>
                                            </tr>

                                        </td>



                                        <td>
                                            <tr>
                                                <td className="flex flex-row w-full space-x-3">
                                                    <button className="text-blue-500 " onClick={openViewActivity}>View</button>
                                                   
                                                    <button className="text-green-500">Update</button>
                                                    <button className="text-red-500">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="flex flex-row w-full space-x-3">
                                                <button className="text-blue-500 " onClick={openViewActivity}>View</button>
                                                    <button className="text-green-500">Update</button>
                                                    <button className="text-red-500">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="flex flex-row w-full space-x-3">
                                                <button className="text-blue-500 " onClick={openViewActivity}>View</button>
                                                    <button className="text-green-500">Update</button>
                                                    <button className="text-red-500">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="flex flex-row w-full space-x-3">
                                                <button className="text-blue-500 " onClick={openViewActivity}>View</button>
                                                    <button className="text-green-500">Update</button>
                                                    <button className="text-red-500">Delete</button>
                                                </td>
                                            </tr>

                                        </td>


                                    </tr>





                                    <tr className="border-collapse border-b-[1px] row-span-5">
                                        <td>2</td>

                                        <td>Normal</td>

                                        <td>
                                            <tr>
                                                <td>
                                                    Happy
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Sad
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Neutral
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Disgust
                                                </td>
                                            </tr>

                                        </td>


                                        <td>
                                            <tr>
                                                <td>
                                                    Activity
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Activity
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Activity
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    Activity
                                                </td>
                                            </tr>

                                        </td>



                                        <td>
                                            <tr>
                                                <td className="flex flex-row w-full space-x-3">
                                                <button className="text-blue-500 " onClick={openViewActivity}>View</button>
                                                    <button className="text-green-500">Update</button>
                                                    <button className="text-red-500">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="flex flex-row w-full space-x-3">
                                                <button className="text-blue-500 " onClick={openViewActivity}>View</button>
                                                    <button className="text-green-500">Update</button>
                                                    <button className="text-red-500">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="flex flex-row w-full space-x-3">
                                                <button className="text-blue-500 " onClick={openViewActivity}>View</button>
                                                    <button className="text-green-500">Update</button>
                                                    <button className="text-red-500">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="flex flex-row w-full space-x-3">
                                                <button className="text-blue-500 " onClick={openViewActivity}>View</button>
                                                    <button className="text-green-500">Update</button>
                                                    <button className="text-red-500">Delete</button>
                                                </td>
                                            </tr>

                                        </td>


                                    </tr>









                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                



            </div>
        </div>
    );
}

export default Dashboard;