import React, { useState } from 'react';
import { Link } from "react-router-dom";
import bot6 from '../Assets/Images/bot6.png';

const VoiceResult = (props) =>{

    const handleClose = () => {
        props.onClose();
      };
    
   

    return(
        <div className="w-[400px] h-[300px] fixed p-5 flex justify-center items-center z-20 mr-[600px]">
            <div className="w-full h-full bg-white rounded-md p-5 flex flex-col space-y-3 border-gray-300 border-[1px]">
                <div className="flex flex-row justify-end">
                    <div className="mr-5">
                    <button onClick={handleClose}>Close</button>
                    </div>
                </div>


                <div className="d-card p-3 flex justify-center items-left flex-col w-ful space-y-3">

                        <div className='h-[100px] mx-auto'>
                            <img src={bot6} alt="" className='h-full'/>
                        </div>

                        <div className='w-full flex flex-col justify-center items-center'>
                        <p>Depression Similarity Value : value</p>
                        <p>Normal Similarity Value     : value</p>
                        </div>

                </div>

            </div>
        </div>
    );
}

export default VoiceResult;