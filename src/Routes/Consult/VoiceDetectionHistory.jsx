import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ViewActivity from '../../Components/ViewActivity';
import AddNewActivity from '../../Components/AddNewActivity';
import ChatBot from '../../Components/chatbot';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import TopNav from "../../Components/TopNav";
import ConsultSideNav from '../../Components/ConsultSideNav';
import DockButton from '../../Components/DockButton';


const VoiceDetectionHistory = () => {
    const [isViewActivityVisible, setIsViewActivityVisible] = useState(false);
    const [isAddNewActivityVisible, setIsAddNewActivityVisible] = useState(false);


    const openViewActivity = () => {
        setIsViewActivityVisible(true);
    };
    const closeViewActivity = () => {
        setIsViewActivityVisible(false);
    };


    const openAddNewActivity = () => {
        setIsAddNewActivityVisible(true);
    };
    const closeAddNewActivity = () => {
        setIsAddNewActivityVisible(false);
    };






    const [date, setDate] = useState('2023/10/11');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };




    const voiceHistoryData = [
        {
            empid: "Emp001",
            empName: 'Hiruna Gamage',
            date: '12/08/2023',
            dsv: '5',
            nsv: '9'
        },
        {
            empid: "Emp002",
            empName: 'Hiruna Gamage',
            date: '12/08/2023',
            dsv: '5',
            nsv: '9'
        },
        {
            empid: "Emp003",
            empName: 'Hiruna Gamage',
            date: '12/08/2023',
            dsv: '5',
            nsv: '9'
        },
        {
            empid: "Emp004",
            empName: 'Hiruna Gamage',
            date: '12/08/2023',
            dsv: '5',
            nsv: '9'
        },

    ]



    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState(voiceHistoryData); // Initially, show all data

    const handleSearch = () => {
        if (searchInput.trim() === '') {
            // If the search input is empty, show all data
            setFilteredData(voiceHistoryData);
        } else {
            // Filter the data based on the empid
            const filteredResults = voiceHistoryData.filter((emp) =>
                emp.empid.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredData(filteredResults);
        }
    };





    return (
        <div className="body-wrapper w-full bg-gray-100 flex justify-between flex-row">

            <ConsultSideNav />
            <TopNav />
            {isViewActivityVisible && <ViewActivity onClose={closeViewActivity} />}
            {isAddNewActivityVisible && <AddNewActivity onClose={closeAddNewActivity} />}
            <div className="body-container sm:w-2/3 lg:w-5/6 h-full  mt-[86px] flex flex-col ">


                <div className="flex flex-row w-1/2 space-x-5 p-5">

                    <div className="d-card file:flex justify-center items-left flex-col w-1/2 space-y-3">
                        <h3 className="text-[#151515] text-[1rem] font-semibold text-left">Date</h3>
                        <select value={date} onChange={handleDateChange} className='w-full p-2 border-[1px] border-gray-200 rounded-md cursor-pointer'>
                            <option value="2023/10/11">2023/10/11</option>
                            <option value="2023/10/12">2023/10/12</option>
                            <option value="2023/10/13">2023/10/13</option>
                        </select>

                    </div>

                </div>


                <div className="w-full justify-between flex flex-row space-x-5 p-5">

                    <div className="w-1/2 flex flex-row space-x-5 ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-white border-gray-200 border-[1px] outline-none p-2 rounded-md w-full"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button
                            className="text-white text-[1rem] bg-[#5C3BB9] w-[128px] py-2 px-2 rounded-md"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>


                    <DockButton />
                </div>



                <div className="w-full flex flex-row p-5 space-x-5">


                    <div className="allocate-project bg-white p-2 rounded-md border-gray-100 border-[1px] w-full">
                        <h3 className="text-[#151515] text-[1.3rem] ">Voice Detection History</h3>
                        <div className="mt-3 w-full">
                            <table className="w-full leading-10">
                                <th className="font-medium w-1/6 text-left bg-slate-100">Emp ID</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Name</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Date</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Depression Similarity Value</th>
                                <th className="font-medium w-1/6 text-left bg-slate-100">Normal Similarity Value</th>


                                <tbody className="w-full">

                                    {filteredData.map((emp, index) => (
                                        <tr key={index} className="border-collapse border-b-[1px]">
                                            <td className='p-2'>{emp.empid}</td>
                                            <td className='p-2'>{emp.empName}</td>
                                            <td className='p-2'>{emp.date}</td>
                                            <td className='p-2'>{emp.dsv}</td>
                                            <td className='p-2'>{emp.nsv}</td>
                                        </tr>
                                    ))}







                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    );
}

export default VoiceDetectionHistory;