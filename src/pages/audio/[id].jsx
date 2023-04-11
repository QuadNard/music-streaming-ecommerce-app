import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { ProductsContext } from '@/state/ProductsContext';
import { useRouter } from 'next/router'
import { useContext } from 'react';
import * as Icons from '@/components/Icons';
import Link from 'next/link';



function IdPlayer () {
     const { products, loading } = useContext(ProductsContext)
    const context = useRouter()
    const { id } = context.query
   const product = products.find((p) => p.id === parseInt(id));

return (
<div>
{loading ? (
<p>Loading...</p>
) : product ? (
<>
<div className='bg-[#5f7a61]'>
<Link href='/audio/player'>
  <button className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded'>
                 Go back 
  </button>
    </Link>
    </div>
<div className='body'>
    <div className='music-player'>
         <h1 className='music-name'>{product.name}</h1>
         <p className='description-name'>{product.description}</p>
          <Image  src={product.image} className='disk'/>         
               <Player product={product} /> 
    </div>
</div>
</>
) : (
<p>Product not found</p>
)}
</div>
);
}

export default IdPlayer


function Player({ product }) {
 let [playing, setPlaying] = useState(false);
const [audio ] = useState(new Audio(product.mp3Url));


const [volume, setVolume] = useState(30);


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

     const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};

return (
  <>
      <div className='song-slider'>
                <input type='range' value='0' className='seek-bar' />
                <span className='current-time'>{formatTime(currentTime)}</span>
                <span className='song-duration'>{formatTime(duration)}</span>   
           <div className='flex  items-center justify-center'>
            <PlayerControls  playing={playing} onPlayPause={() => setPlaying(!playing)} onSkip={handleSkip} />
            </div> 
           </div>         
    </>
)
}





function PlayerControls({ playing, onPlayPause, onSkip, }) {
  
  return (
    <div>
      <div>
        <button onClick={() => onSkip(false)} className="w-20 h-20 p-3">
          <Icons.Skip className="w-[32px] h-[32px] text-white rotate-180" />
        </button>

        <button onClick={onPlayPause} autoPlay={false} className="w-20 h-20 p-3 text-white">
          {playing ? (
            <Icons.Pause className="w-[32px] h-[32px]" />
          ) : (
            <Icons.Play className="w-[32px] h-[32px]" />
          )}
        </button>

        <button onClick={() => onSkip(true)} className="w-20 h-20 p-3">
          <Icons.Skip className="w-[32px] h-[32px] text-white" />
        </button>
      </div>
    </div>
  );
}

