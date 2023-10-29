// import React, { useRef } from 'react';

// function MusicPlayer() {
//   const audioPlayer = useRef(null);

//   const play = () => {
//     audioPlayer.current.play();
//   };

//   const pause = () => {
//     audioPlayer.current.pause();
//   };

//   const stop = () => {
//     audioPlayer.current.pause();
//     audioPlayer.current.currentTime = 0;
//   };

//   const next = () => {
//     // Implement next track logic here
//   };

//   const prev = () => {
//     // Implement previous track logic here
//   };

//   return (
//     <div className="music-player w-full bg-[#5C3BB9] bg-opacity-25 h-[320px] rounded-lg">
//       <audio id="audioPlayer" ref={audioPlayer} controls>
//         <source src="your-audio-file.mp3" type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>

//       <div className="controls">
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//         <button onClick={stop}>Stop</button>
//         <button onClick={next}>Next</button>
//         <button onClick={prev}>Previous</button>
//       </div>
//     </div>
//   );
// }

// export default MusicPlayer;






import { useEffect, useState } from "react"; 
import useSound from "use-sound"; // for handling the sound
// import qala from "../assets/qala.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons
import musiccover from "../Assets/Images/music-cover.png";


function MusicPlayer(){




    const [isPlaying, setIsPlaying] = useState(false);

    const [play, { pause, duration, sound }] = useSound("");

    const playingButton = () => {
        if (isPlaying) {
          pause(); // this will pause the audio
          setIsPlaying(false);
        } else {
          play(); // this will play the audio
          setIsPlaying(true);
        }
      };


    return(
<div className="component w-full  items-center p-3 flex flex-col space-y-2 bg-[#5C3BB9] bg-opacity-25 rounded-md">
      <h2 className="font-semibold text-[#5C3BB9]">Playing Now</h2>
      <img
        className="musicCover mx-auto"
        src={musiccover}
        alt="cover"
      />
      <div className="mx-auto w-full flex items-center flex-col">
        <h3 className="title text-center">Title</h3> 
        <p className="subTitle text-center">sub title</p>
      </div>
      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#5C3BB9" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#5C3BB9" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#5C3BB9" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#5C3BB9" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
    );
}


export default MusicPlayer;