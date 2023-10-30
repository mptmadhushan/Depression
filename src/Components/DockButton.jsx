import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faFolder, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import VoiceResult from '../Components/VoiceResult';
import axios from 'axios';

const DockButton = () => {
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const fileInputRef = useRef(null);
const [respo, setRespo] = useState({
  "depressed similarity": "0.81",
  "normal similarity": "0.19"
})
  const toggleButtons = () => {
    setIsButtonsVisible(!isButtonsVisible);
  };


  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {   
      if (selectedFile.type.startsWith("audio/")) {
        console.log("Selected audio file:", selectedFile);
        uploadAudioFile(selectedFile);
      } else {
        alert("Please select a valid audio file.");
      }
      fileInputRef.current.value = "";
    }
  };
  const uploadAudioFile = (file) => {
    const formData = new FormData();
    formData.append('audio', file);

    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    axios
      .post('http://127.0.0.1:5000/api/thresholding', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setRespo(response.data)
        // Handle the response from the API
        console.log('API Response:', response.data);
      })
      .catch((error) => {
        // Handle API call errors
        console.error('API Call Error:', error);
      });

    fileInputRef.current.value = ""; // Clear the file input
  };

  const openFileInput = () => {  
    fileInputRef.current.click();
  };



  const [isViewResultVisible, setIsViewResultVisible] = useState(false);
  const openViewResult = () => {
    setIsViewResultVisible(true);
  };
const closeViewResult = () => {
  setIsViewResultVisible(false);
};

  return (
    <div className="flex flex-row justify-center items-center relative ">
       {isViewResultVisible && <VoiceResult  onClose={closeViewResult} res={respo} />}

      {isButtonsVisible && (
        <div className="bg-[#5C3BB9] bg-opacity-40 absolute mr-[100px] w-[100px] h-[200px] flex  DockNavigator ">
         
          <div>
      <input
        type="file"
        accept="audio/*" 
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileInputChange}
      />

      <button
        className="w-[32px] h-[32px] rounded-md bg-[#5C3BB9] text-center flex justify-center items-center text-white p-2 absolute top-3 right-2"
        onClick={openFileInput}
      >
        <FontAwesomeIcon icon={faFolder} />
      </button>
    </div>


    
          <button 
          className=" h-[32px] rounded-md bg-[#5C3BB9] text-center  flex justify-center items-center text-white absolute top-1/2 -translate-y-1/2 left-2 p-2"
          onClick={openViewResult}>Check</button>

          <Link to="/VoiceDetectionHistory">
          <button className="w-[32px] h-[32px] rounded-md bg-[#5C3BB9] text-center flex justify-center items-center text-white p-2 absolute bottom-3 right-2"><FontAwesomeIcon icon={faClockRotateLeft} /></button>
          </Link>
        </div>
      )}

      <button
        className="text-white z-10 text-[1rem] bg-[#5C3BB9] py-2 px-2 w-[54px] h-[54px] rounded-full border-[2px] border-gray-100"
        onClick={toggleButtons}
        
      >
        <FontAwesomeIcon icon={faMicrophone} />
      </button>


    </div>
  );
}

export default DockButton;
