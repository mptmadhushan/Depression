import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ViewActivity from '../../Components/ViewActivity';
import AddNewActivity from '../../Components/AddNewActivity';
import ChatBot from '../../Components/chatbot';
import TopNav from "../../Components/TopNav";
import ConsultSideNav from '../../Components/ConsultSideNav';
import axios from 'axios';

const EmployeeHistory = () => {
   


    const [mentalSeverity, setMentalSeverity] = useState('Normal');
    const [mood, setMood] = useState('Happy');
    const [date, setDate] = useState(Date);

    const handleMentalSeverityChange = (e) => {
        setMentalSeverity(e.target.value);
    };
    const handleMoodChange = (e) => {
        setMood(e.target.value);
    };
    const handleDate = (e) => {
        setDate(e.target.value);
    };


    const EmployeeHistoryData = [
        {
            empid:"Emp001",
            empName:'Hiruna Gamage',
            date:'12/08/2023',
            time:'18:05:23',
            mood:'Happy',
            probability:'5',
            interaction:'2',
            depression:'4',
            anxiety:'9',
            stress:'1',
            dss:'12',
        },
        {
            empid:"Emp002",
            empName:'Hiruna Gamage',
            date:'12/08/2023',
            time:'18:05:23',
            mood:'Happy',
            probability:'5',
            interaction:'2',
            depression:'4',
            anxiety:'9',
            stress:'1',
            dss:'12',
        },
        {
            empid:"Emp003",
            empName:'Hiruna Gamage',
            date:'12/08/2023',
            time:'18:05:23',
            mood:'Happy',
            probability:'5',
            interaction:'2',
            depression:'4',
            anxiety:'9',
            stress:'1',
            dss:'12',
        },
        {
            empid:"Emp004",
            empName:'Hiruna Gamage',
            date:'12/08/2023',
            time:'18:05:23',
            mood:'Happy',
            probability:'5',
            interaction:'2',
            depression:'4',
            anxiety:'9',
            stress:'1',
            dss:'12',
        }
    ]








    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState(EmployeeHistoryData); // Initially, show all data
  
    const handleSearch = async() => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/emotion', {user_id:searchInput}, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
        setFilteredData(response.data.employee_data);
  
            console.log('Image captured and uploaded successfully:', response.data);
            
          } catch (error) {
            console.error('Error uploading image:', error);
          }
    //   if (searchInput.trim() === '') {
    //     // If the search input is empty, show all data
    //     setFilteredData(EmployeeHistoryData);
    //   } else {
    //     // Filter the data based on the empid
    //     const filteredResults = EmployeeHistoryData.filter((emp) =>
    //       emp.empid.toLowerCase().includes(searchInput.toLowerCase())
    //     );
    //     setFilteredData(filteredResults);
    //   }
    };



    return (
        <div className="body-wrapper w-full bg-gray-100 flex justify-between flex-row">

        <ConsultSideNav/>
        <TopNav/>
      
            <div className="body-container sm:w-2/3 lg:w-5/6 h-full  mt-[86px] flex flex-col ">
                {/* <div className="flex flex-row w-full space-x-5 p-5">

                    <div className="d-card p-3 file:flex justify-center items-left flex-col w-1/3 space-y-3">
                        <h3 className="text-[#151515] text-[1rem] font-semibold text-left">Date</h3>
                        <select value={date} onChange={handleDate} className='w-full p-2 border-[1px] border-gray-200 rounded-md cursor-pointer'>
                            <option value="2023/10/11">2023/10/11</option>
                            <option value="2023/10/12">2023/10/12</option>
                            <option value="2023/10/13">2023/10/13</option>
                        </select>

                    </div>


                    <div className="d-card p-3 flex justify-center items-left flex-col w-1/3 space-y-3">
                        <h3 className="text-[#151515] text-[1rem] font-semibold text-left">Select Mental Severity Level</h3>
                        <select value={mentalSeverity} onChange={handleMentalSeverityChange} className='w-full p-2 border-[1px] border-gray-200 rounded-md cursor-pointer'>
                            <option value="Happy">Happy</option>
                            <option value="Sad">Sad</option>
                            <option value="Neutral">Neutral</option>
                        </select>

                    </div>


                    <div className="d-card p-3 flex justify-center items-left flex-col w-1/3 space-y-3">
                        <h3 className="text-[#151515] text-[1rem] font-semibold text-left">Select Mood</h3>
                        <select value={mood} onChange={handleMoodChange} className='w-full p-2 border-[1px] border-gray-200 rounded-md cursor-pointer'>
                            <option value="Happy">Happy</option>
                            <option value="Sad">Sad</option>
                            <option value="Neutral">Neutral</option>
                        </select>

                    </div>


                    




                </div> */}


                <div className="w-1/2 flex flex-row space-x-5 p-5">
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

                

                <div className="w-full flex flex-row p-5 space-x-5">


                    <div className="allocate-project bg-white p-2 rounded-md border-gray-100 border-[1px] w-full">
                        <h3 className="text-[#151515] text-[1.3rem] ">Activities</h3>
                        <div className="mt-3 w-full relative overflow-x-auto z-10">
                            <table className="w-full ">
                                <th className="font-medium w-1/12 text-left bg-slate-100 p-2">Emp ID</th>
                                <th className="font-medium w-2/12 text-left bg-slate-100 p-2">Name</th>
                                <th className="font-medium w-1/12 text-left bg-slate-100 p-2">Date</th>
                                <th className="font-medium w-1/12 text-left bg-slate-100 p-2">Time</th>
                                <th className="font-medium w-1/12 text-left bg-slate-100 p-2">Mood</th>
                                {/* <th className="font-medium w-1/12 text-left bg-slate-100 p-2">Probability</th>
                                <th className="font-medium w-1/12 text-left bg-slate-100 p-2">Interaction</th>
                                <th className="font-medium w-1/12 text-left bg-slate-100 p-2">Depression</th>
                                <th className="font-medium w-1/12 text-left bg-slate-100 p-2">Anxiety</th>
                                <th className="font-medium w-1/12 text-left bg-slate-100 p-2">Stress</th>
                                <th className="font-medium w-1/12 text-left bg-slate-100 p-2">DASS21 score</th> */}
                                
                                <tbody className="w-full">


                                {filteredData.map((emp,index) => (
                                    <tr key={index} className="border-collapse border-b-[1px] row-span-5">
                                        <td className='p-2'>{emp.user_id}</td>
                                        <td className='p-2'>{emp.user_name}</td>
                                        <td className='p-2'>{emp.time_stamp}</td>
                                        <td className='p-2'>{emp.time}</td>
                                        <td className='p-2' >{emp.emotion}</td>
                                        {/* <td className='p-2'>{emp.probability}</td>
                                        <td className='p-2'>{emp.interaction}</td>
                                        <td className='p-2'>{emp.depression}</td>
                                        <td className='p-2'>{emp.anxiety}</td>
                                        <td className='p-2'>{emp.stress}</td>
                                        <td className='p-2'>{emp.dss}</td> */}
                                    </tr>
                                ))}
                                   

                                    


                                  


                               


                                   

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>


                <div className="justify-end z-20">
                    <ChatBot />
                </div>

            </div>
        </div>
    );
}

export default EmployeeHistory;