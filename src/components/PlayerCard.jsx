import {
  LayoutGroup,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as Icons from "./Icons";

import { FaVolumeMute, FaVolumeDown, FaVolumeUp } from 'react-icons/fa';

const PlayerCard = ({ product }) => {
  let [playing, setPlaying] = useState(false);
const [audio ] = useState(new Audio(product.mp3Url));






const [volume, setVolume] = useState(30);

 function handleVolumeChange(event) {
    setVolume(event.target.value);
  }





const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [percentComplete, setPercentComplete] = useState(0);




  useEffect(() => {
    playing ? audio.play() : audio.pause();
     if(audio) {
      audio.volume = volume / 100;
     }

     const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateCurrentTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    // Remove event listeners on component unmount
    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };

  }, [playing, audio, volume]);

useEffect(() => {
    // Calculate percentage of audio played
    if (duration !== 0) {
      setPercentComplete((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);




 function handleSkip(forward) {
    audio.currentTime += forward ? 10 : -10; // skip forwards or backwards by 10 seconds
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen sm:py-6">
      <div className="max-w-[390px] w-full flex mx-auto flex-col relative shadow-2xl overflow-hidden sm:rounded-xl">
        <div className="flex flex-col items-center flex-1 w-full px-6 shadow-2xl">
          <motion.img
            src={product.image}
            initial={false}
             animate={playing ? "grow" : "shrink"}
            variants={{
              grow: {
                scale: 1,
                transition: {
                  type: "spring",
                  duration: 1,
                  bounce: 0.5,
                  delay: 0.05,
                },
              },
              shrink: {
                scale: 0.73,
                transition: {
                  type: "spring",
                  duration: 0.7,
                  bounce: 0,
                  delay: 0.05,
                },
              },
            }}
            className="relative z-10 block w-full shadow-2xl rounded-xl aspect-square"
          />

          <div className="mt-[45px] w-full px-2">
            <Title product={product} />

            <LayoutGroup>
            
<div className="relative">
      <div
        className="h-2 bg-gray-200 rounded-full overflow-hidden"
      
      >
        <div
          className="h-2 bg-green-500 absolute top-0 left-0"
          style={{ width: `${percentComplete}%` }}
        />
      </div>
      <div className="text-xs text-gray-500 flex justify-between mt-1">
        <div>{formatTime(currentTime)}</div>
        <div>{formatTime(duration)}</div>
      </div>
    </div>


              <PlayerControls
                playing={playing}
                onPlayPause={() => setPlaying(!playing)}
                onSkip={handleSkip}
              />
              <div className='flex items-center justify-between w-full mt-[38px]'>
                <Icons.VolumeMute className='h-[28px]' />
                <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} />
                <VolumeBar volume={volume}  setVolume={setVolume} />
                </div>
            </LayoutGroup>
            <IconBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;

function Title({product }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xl font-medium leading-tight text-white truncate">
            {product.description}
        </p>
        <p className=" text-xl leading-tight truncate text-[#A49FC3]/90">
           {product.name}
        </p>
      </div>
    </div>
  );
}



function PlayerControls({ playing, onPlayPause, onSkip, }) {

 

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between px-4">
        <button onClick={() => onSkip(false)} className="w-20 h-20 p-3">
          <Icons.Skip className="w-[42px] h-[42px] text-white rotate-180" />
        </button>

        <button onClick={onPlayPause} autoPlay={false} className="w-20 h-20 p-3 text-white">
          {playing ? (
            <Icons.Pause className="w-full h-full" />
          ) : (
            <Icons.Play className="w-full h-full" />
          )}
        </button>

        <button onClick={() => onSkip(true)} className="w-20 h-20 p-3">
          <Icons.Skip className="w-[42px] h-[42px] text-white" />
        </button>
      </div>
    </div>
  );
}



function IconBar() {
  return (
    <div className="flex px-[46px] mt-6 justify-between pb-12">
      <button className="text-[#A29CC0] active:text-white p-1">
        <Icons.Lyrics className="h-[21px]" />
      </button>
      <button className="text-[#A29CC0] active:text-white p-1">
        <Icons.AirPlay className="h-[21px]" />
      </button>
      <button className="text-[#A29CC0] active:text-white p-1">
        <Icons.List className="h-[21px]" />
      </button>
    </div>
  );
}


function VolumeBar({ volume }) {
  let icon;
  if (volume === 0) {
    icon = <FaVolumeMute />;
  } else if (volume <= 50) {
    icon = <FaVolumeDown />;
  } else {
    icon = <FaVolumeUp />;
  }

  return (
    <div className="volume-bar">
      {icon}
      <div className="volume-bar-fill" style={{ width: `${volume}%` }}></div>
    </div>
  );
}


const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};


