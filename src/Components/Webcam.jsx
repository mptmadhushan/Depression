import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WebcamComponent = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const constraints = { video: { width: 500, height: 500 } };

    const openWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
        setTimeout(() => {
          captureImage();
        }, 5000); // Capture image after 5 seconds
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    const captureImage = async () => {
      navigate('/result');
      if (videoRef.current && videoRef.current.srcObject) {
        const canvas = document.createElement('canvas');
        canvas.width = 500;
        canvas.height = 500;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, 500, 500);
        const capturedImage = canvas.toDataURL('image/jpeg');

        // Create a Blob from the base64 image data
        const byteCharacters = atob(capturedImage.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const blob = new Blob([new Uint8Array(byteNumbers)], { type: 'image/jpeg' });

        // Create a File object from the Blob
        const imageFile = new File([blob], 'capturedImage.jpeg', { type: 'image/jpeg' });

        // Create a FormData object and append the image file
        const formData = new FormData();
        formData.append('image', imageFile);

        // Make a POST request to your API using Axios with the FormData
        try {
          const response = await axios.post('http://127.0.0.1:5000/api/face', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          console.log('Image captured and uploaded successfully:', response.data);
          const role = response.data.user_role
          if(role==='Employee'){
            navigate('/EmployeeDash')
          }
          if(role==='Consultant'){
            navigate('/EmployeeDash')

          }
          if(role==='Admin'){
            navigate('/EmployeeDash')

          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    };

    openWebcam();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="camera-wrapper flex w-full relative justify-center items-center">
      <video ref={videoRef} autoPlay playsInline muted width="500" height="500" className='rounded-[56px] border-[1px] p-5'></video>
    </div>
  );
};

export default WebcamComponent;
