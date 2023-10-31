import React, { useState, useEffect, useRef } from "react";
import bot1 from "../Assets/Images/bot1.png";
import bot2 from "../Assets/Images/bot2.png";
import bot3 from "../Assets/Images/bot3.png";
import bot4 from "../Assets/Images/bot4.png";
import bot5 from "../Assets/Images/bot5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophoneLines,
  faMicrophoneSlash,
  faPaperPlane,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ChatBot = () => {
  const chatMessengerRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  const [activeButton, setActiveButton] = useState(null);
  const [botRes, setBotres] = useState("");
  const [botImageIndex, setBotImageIndex] = useState(0);
  const botImages = [bot1, bot2, bot3, bot4, bot5];

  const switchBotImage = () => {
    setBotImageIndex((prevIndex) => (prevIndex + 1) % botImages.length);
  };

  useEffect(() => {
    getQuiz()
    const interval = setInterval(switchBotImage, 2000);
    return () => clearInterval(interval);
  }, []);

  const getQuiz=()=>{
    axios
    .get("http://127.0.0.1:5000/api/bot_question")
    .then((response) => {
      setQuestions(response.data.questions);
      console.log("New Button API Response:", response.data);
    })
    .catch((error) => {
      console.error("New Button API Call Error:", error);
    });
  }
  const handleDocumentTouch = (e) => {
    if (
      chatMessengerRef.current &&
      !chatMessengerRef.current.contains(e.target)
    ) {
      setIsChatOpen(false);
    }
  };

  useEffect(() => {
    if (isChatOpen) {
      document.body.addEventListener("touchstart", handleDocumentTouch);
    } else {
      document.body.removeEventListener("touchstart", handleDocumentTouch);
    }
    return () => {
      document.body.removeEventListener("touchstart", handleDocumentTouch);
    };
  }, [isChatOpen]);

  const [messages, setMessages] = useState([
    { type: "received", text: "Hi, I got your message" },
  ]);

  const [textInputValue, setTextInputValue] = useState(""); // State for text input

  const handleSendMessage = () => {
    const inputField = document.getElementById("chatInput");
    const message = inputField.value;
    if (message) {
      setMessages([
        ...messages,
        { type: "sent", text: message },
        { type: "received", text: "This is a sample response." },
      ]);
      inputField.value = ""; // Clear the input field
    }
  };

  const [isVoiceInputActive, setIsVoiceInputActive] = useState(false);
  const [voiceInputText, setVoiceInputText] = useState("");
  const [recognition, setRecognition] = useState(null);
  const userData = JSON.parse(localStorage.getItem("dassValue"));
  
  const reqData = {
    questions: [
      {
        question: "I was unable to become enthusiastic about anything",
        answer: "0",
      },

      {
        question: "I felt down-hearted and blue",
        answer: "1",
      },

      {
        question: "I felt that life was meaningless",
        answer: "2",
      },

      {
        question: "I felt that I was using a lot of nervous energy",
        answer: "3",
      },

      {
        question: "I experienced trembling (e",
        answer: "0",
      },

      {
        question: "I experienced breathing difficulty (e",
        answer: "1",
      },

      {
        question: "I felt I wasn't worth much as a person",
        answer: "2",
      },

      {
        question:
          "Do you feel that your team members are approachable and easy to work with?",
        answer: "uploads/voice/NO Voice (1).ogg",
      },

      {
        question:
          "Do you feel that your team members are generally respectful of one another's opinions and ideas?",
        answer: "uploads/voice/NO Voice (2).ogg",
      },

      {
        question:
          "Do you feel that your team members are open to constructive feedback from one another?",
        answer: "uploads/voice/NO Voice (2).ogg",
      },
    ],
    user_id: userData.user_id,
  };
  useEffect(() => {
    if ("SpeechRecognition" in window) {
      const newRecognition = new window.SpeechRecognition();
      newRecognition.lang = "en-US";
      newRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setVoiceInputText(transcript);
        setTextInputValue(transcript); // Append recognized text to text input
      };
      newRecognition.onend = () => {
        setIsVoiceInputActive(false);
      };
      setRecognition(newRecognition);
    } else {
      console.log("SpeechRecognition not supported in this browser.");
    }
  }, []);

  const handleVoiceInput = () => {
    if (recognition) {
      if (isVoiceInputActive) {
        recognition.stop();
        setIsVoiceInputActive(false);
      } else {
        recognition.start();
        setIsVoiceInputActive(true);
      }
    }
  };

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
 
  // Function to handle the new button click and make a separate API call
  const handleNewButtonClick = () => {
    // setTextInputValue('')
  
    console.log("textInputValue", textInputValue);
    // Check if the "DASS21" button is active before making the API call
    if (activeButton === "DASS21") {
      // Make the API call specific to the "New Button"
      const serverURL = "http://127.0.0.1:5000/api/dass_bot";

      axios
        .post(serverURL, reqData)
        // axios
        // .post('http://127.0.0.1:5000/api/dass_bot', {
        //   reqData
        // })
        .then((response) => {
          localStorage.setItem("dassValue", JSON.stringify(response.data));
          console.log("New Button API Response:", response.data);
        })
        .catch((error) => {
          console.error("New Button API Call Error:", error);
        });
    } else {
      // Make the API call specific to the "New Button"
      axios
        .post("http://127.0.0.1:5000/api/nlp_bot", { user: textInputValue })
        .then((response) => {
          setBotres(response.data.response);
          console.log("New Button API Response:", response.data);
        })
        .catch((error) => {
          console.error("New Button API Call Error:", error);
        });
    }
  };
  const initialQuestions = [
    "I experienced breathing difficulty (e",
    "I felt that I was using a lot of nervous energy",
    "I was aware of the action of my heart in the absence of physical exertion (e",
    "I was worried about situations in which I might panic and make a fool of myself",
    "I felt I was close to panic",
    "I felt that I had nothing to look forward to",
    "I found it hard to wind down",
    "Do you feel that your team members are approachable and easy to work with?",
    "Do you feel that your team members work well together to solve problems?",
    "Do you feel that your team members are generally respectful of one another's opinions and ideas?",
  ];
  const [questions, setQuestions] = useState(initialQuestions);
  const [answers, setAnswers] = useState(
    Array(initialQuestions.length).fill("")
  );
  const user_id = "EMP002";

  const handleAnswerChange = (questionIndex, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = answer;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="justify-end fixed top-0">
      <div
        className={`chat-messenger relative ${
          isChatOpen ? "open" : "closed"
        } sm:w-[300px] sm:h-[400px] p-3 bg-white fixed sm:bottom-[96px] sm:right-[50px]  rounded-md w-full h-[80vh] z-50 bottom-[60px] overflow-hidden flex flex-col border-[1px] border-gray-300 `}
      >
        <button
          className={`w-1/2 text-white p-2 ${
            activeButton === "DASS21"
              ? "bg-[#5C3BB9]"
              : "bg-[#5C3BB9] opacity-40"
          }`}
          onClick={() => handleButtonClick("DASS21")}
        >
          DASS21
        </button>
        <button
          className={`w-1/2 text-white p-2 ${
            activeButton === "Chat Agent"
              ? "bg-[#5C3BB9]"
              : "bg-[#5C3BB9] opacity-40"
          }`}
          onClick={() => handleButtonClick("Chat Agent")}
        >
          Chat Agent
        </button>

          <div
            className="message-container flex flex-col relative w-full overflow-y-scroll sm:h-[340px] h-[60vh]"
            id="style-7"
          >
            {messages.map((message, index) => (
                        <div
                            key={`message-${index}`}
                            className={`${message.type === "sent" ? 
                            "sent-message bg-[#5C3BB9]" : "received-message"
                                } p-3 mt-3 rounded-tl-md rounded-tr-md rounded-bl-md shadow-md shadow-gray-300 border-gray-300 border-[1px] border-opacity-30`}
                        >
                            <p className={`${message.type === "sent"
                                    ? "text-white "
                                    : "text-gray-900"
                                } sm:text-[0.8rem] text-[12px]`}>{message.text}</p>
                        </div>
                    ))}
            {botRes}

            {  activeButton === "DASS21" &&questions.map((question, index) => (
              <div key={index}>
                <p>{question}</p>
                <input
                  type="text"
                  style={{borderColor:'black',borderWidth:1}}
                  value={answers[index]}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
        <div className="w-full sm:h-[80px] bg-white  border-collapse border-gray-300 border-opacity-60 border-t-[1px] justify-center flex items-center">
          <div className="text-[12px] sm:text-[0.8rem] bg-[#5C3BB9] w-full bg-opacity-25 h-[44px] justify-between items-center flex flex-row">
            <input
              id="chatInput"
              type="text"
              placeholder="Type here.."
              className="p-2 h-full w-full bg-transparent text-gray-800"
              value={textInputValue}
              onChange={(e) => setTextInputValue(e.target.value)}
            />
            <div className="w-1/3 justify-end items-center flex space-x-3 p-2">
              <button
                className={`voice-message p-2 flex justify-center sm:w-[24px] sm:h-[24px] rounded-sm items-center ${
                  isVoiceInputActive ? "bg-red-500" : "bg-[#5C3BB9]"
                }`}
                onClick={handleVoiceInput}
              >
                <FontAwesomeIcon
                  icon={isVoiceInputActive ? faMicrophoneSlash : faMicrophone}
                  className={`text-white ${
                    isVoiceInputActive ? "text-red-200" : ""
                  }`}
                />
              </button>

              <button
                className="send-response p-2 bg-[#5C3BB9] text-white flex justify-center sm:w-[24px] sm:h-[24px] rounded-sm items-center"
                onClick={handleNewButtonClick}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bot-icon h-[200px] ${
          isChatOpen ? "open" : "closed"
        } fixed z-50 `}
      >
        <img
          src={botImages[botImageIndex]}
          alt=""
          className=" cursor-pointer h-[200px]"
          onClick={toggleChat}
        />
      </div>
    </div>
  );
};

export default ChatBot;
