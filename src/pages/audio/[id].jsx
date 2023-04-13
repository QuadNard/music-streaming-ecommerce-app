import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { ProductsContext } from '@/state/ProductsContext';
import { useRouter } from 'next/router'
import { useContext } from 'react';
import * as Icons from '@/components/Icons';
import Link from 'next/link';
import { Button } from '@/components/button';



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
<div className='flex flex-col items-center bg-page-gradient '>
  
    <Link href='/audio/player'>
        <Button className='mt-5'>
     Go Back 
      </Button>
    </Link>
    </div>
<div className='body'>
    <div className='music-player'>
         <h1 className='music-name'>{product.name}</h1>
         <p className='description-name'>{product.description}</p>
          <Image  src={product.image} className='disk' alt='Image' width={180} height={180}/>         
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

const [percentComplete, setPercentComplete] = useState(0);
const [audioPlaying, setAudioPlayer] = useState(null);
const [currentTime, setCurrentTime] = useState(0);
const [sliderValue, setSliderValue] = useState(0);
const [duration, setDuration] = useState(0);
const [volume, setVolume] = useState(40);
const [audio ] = useState(new Audio(product.mp3Url));
const router = useRouter()








// Play or pause audio
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
 
// Calculate percentage of audio played
useEffect(() => {
   
    if (duration !== 0) {
      setPercentComplete((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);



// skip forwards or backwards by 10 seconds
 function handleSkip(forward) {
    audio.currentTime += forward ? 10 : -10; 
  }

  // Format time to mm:ss
  const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};

// Stop audio when navigating away from page
useEffect(() => {
  setAudioPlayer(audio)
  const handleRouteChange = () => {
  if(playing){
    audio.pause();
  }
}
router.events.on('routeChangeStart', handleRouteChange)
return() => {
  audio.pause();
  audio.currentTime = 0;
  setAudioPlayer(null)
  router.events.off('routeChangeStart', handleRouteChange);
}
},[router, playing])

useEffect(() => {
    if (audioPlaying) {
      if (playing) {
        audioPlaying.play();
      } else {
        audioPlaying.pause();
      }
    }
  }, [playing, audioPlaying]);

   const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    if (audioPlaying) {
      audioPlaying.currentTime = event.target.value;
    } else {
      console.log("No audio player");
    }
  };


return (
  <>
      <div className='song-slider'>
                <input type='range'  className='seek-bar' value={percentComplete} onChange={handleSliderChange }   />
                <span className='current-time'>{formatTime(currentTime)}</span>
                <span className='song-duration'>{formatTime(duration)}</span>   
           <div className='flex  items-center justify-center'>
            <PlayerControls  playing={playing} onPlayPause={() => setPlaying(!playing)} onSkip={handleSkip} />
            </div> 
           </div>         
    </>
)
}




//  Audio Player controls 
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

