import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ViewActivity = (props) =>{

    const handleClose = () => {
        props.onClose();
      };
    
    const [mentalSeverity, setMentalSeverity] = useState('Normal');
    const [mood, setMood] = useState('Happy');

    const handleMentalSeverityChange = (e) => {
        setMentalSeverity(e.target.value);
    };
    const handleMoodChange = (e) => {
        setMood(e.target.value);
    };

   
    return(
        <div className="w-full h-screen fixed p-5 flex justify-center items-center bg-gray-400 backdrop-blur-md bg-opacity-30 z-20">
            <div className="w-[70%] bg-white rounded-md h-auto p-5 flex flex-col space-y-3">
                <div className="flex flex-row justify-between">
                    <h3 className="text-[#151515] text-[1.3rem] ">View Activity</h3>
                    <div className="mr-5">
                    <button onClick={handleClose}>Close</button>
                    </div>
                </div>


                {/* <div className="d-card p-3 file:flex justify-center items-left flex-col w-ful space-y-3">
                        <h3 className="text-[#151515] text-[1rem] font-semibold text-left">Select Mental Severity Level</h3>
                        <select value={mentalSeverity} onChange={handleMentalSeverityChange} className='w-full p-2 border-[1px] border-gray-200 rounded-md cursor-pointer'>
                            <option value="Normal">Normal</option>
                            <option value="Mild">Mild</option>
                            <option value="Moderate">Moderate</option>
                        </select>

                    </div>

                    <div className="d-card p-3 flex justify-center items-left flex-col w-full space-y-3">
                        <h3 className="text-[#151515] text-[1rem] font-semibold text-left">Select Mood</h3>
                        <select value={mood} onChange={handleMoodChange} className='w-full p-2 border-[1px] border-gray-200 rounded-md cursor-pointer'>
                            <option value="Happy">Happy</option>
                            <option value="Sad">Sad</option>
                            <option value="Neutral">Neutral</option>
                        </select>

                    </div> */}


                    <div className="flex flex-row justify-between">
                        <h3 className="text-[#151515] text-[1.3rem] ">Recommended Activities</h3>
                        <div className="mr-5">
                            <span>Add new Activity</span>
                        </div>
                    </div>


                    <div className='w-full p-2 justify-center border-gray-200 border-[1px] rounded-md'>
                        <span>Activity</span>
                    </div>

                    <div className='w-full p-2 justify-center border-gray-200 border-[1px] rounded-md'>
                        <span>Activity</span>
                    </div>

                    <div className='w-full p-2 justify-center border-gray-200 border-[1px] rounded-md'>
                        <span>Activity</span>
                    </div>
                    

                    <div className='flex flex-row w-full justify-end space-x-5'>
                            <button className="text-white text-[1rem] bg-[#5C3BB9]  py-2 px-2 rounded-md w-[128px]">Save</button>
                            <button className="text-[#5C3BB9] text-[1rem] border-[#5C3BB9] border-[1px] py-2 px-2 rounded-md  w-[128px]">Cancel</button>
                    </div>

            </div>
        </div>
    );
}

export default ViewActivity;