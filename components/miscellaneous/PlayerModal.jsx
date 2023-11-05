

import React, {useEffect, useState, useRef} from 'react'
import usePlayerModal from '../../utils/hooks/useModal';
import { AnimatePresence, motion } from 'framer-motion';
import { Slider } from '@radix-ui/react-slider';
import useSound from "use-sound";
import { BsFillPauseCircleFill } from 'react-icons/bs';
import * as Icons from './Icons';

const PlayerModal = () => {
  const { isOpen, toggleModal, currentBeat, setCurrentBeat, currentBeatName } = usePlayerModal();
  const [currentTime, setCurrentTime] = useState(0); // Current time of the audio
  const [duration, setDuration] = useState(0); // Duration of the audio
  const audioRef = useRef();


const closePlayer = () => {
  toggleModal();
};

useEffect(() => {
  const timeUpdateHandler = () => {
    setCurrentTime(audioRef.current.currentTime);
  };
  const loadedMetadataHandler = () => {
    setDuration(audioRef.current.duration);
  };

  const audioElement = audioRef.current;

  if (audioElement) {
    audioElement.addEventListener('timeupdate', timeUpdateHandler);
    audioElement.addEventListener('loadedmetadata', loadedMetadataHandler);

    return () => {
      audioElement.removeEventListener('timeupdate', timeUpdateHandler);
      audioElement.removeEventListener('loadedmetadata', loadedMetadataHandler);
    };
  }
}, []);


useEffect(() => {
  if(isOpen) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }
}, [isOpen]);

const handleSeekBarChange = (event) => {
  audioRef.current.currentTime = event.target.value;
  setCurrentTime(event.target.value);
}


const PlayPause = () => {
  audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
}


const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

const getPlayPauseIcon = () => {
  if (audioRef.current) {
    return audioRef.current.paused ?  <Icons.Play className="w-[32px] h-[32px]" /> : <Icons.Pause className="w-[32px] h-[32px]" />;
  } else {
    console.log("audioRef.current is null"); // Add this console.log
    // Return a default icon or null if audioRef.current is not defined
    return null;
  }
};

// ...

<button onClick={PlayPause}>
  {getPlayPauseIcon()}
</button>


  return (
   <AnimatePresence>
    <motion.div className={`bg-neutral-400 bg-opacity-30 w-max  p-2.5 z-20 fixed left-1/2 transform -translate-x-1/2 bottom-8 flex gap-2.5 rounded-full backdrop-blur-15 ${isOpen ? 'block' : 'hidden'}`}>
       <audio src={currentBeat} ref={audioRef} />
       <div className='player-card'>
          <span className='flex gap-20'>
            {currentBeatName}
            <button onClick={closePlayer} className='rounded-full border p-1 w-8 hover:border-blue-300'>X</button>
          </span>
          <div className='flex items-center justify-between flex-shrink-0 p-3'>
              <p>{formatTime(currentTime)}</p>
              <input
                className="seek-bar"
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleSeekBarChange}
                />
              <p>{formatTime(duration)}</p>
              <button onClick={PlayPause} className='p-2'>
                 {getPlayPauseIcon()}
            </button>
          </div>
       </div>
    </motion.div>
   </AnimatePresence>
  )
}

export default PlayerModal

