import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import * as Icons from '@/components/Icons';

const Player = ({ product }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audio] = useState(new Audio(product.mp3Url));
  const [volume, setVolume] = useState(0.4);
  const router = useRouter();

  // Play / Pause audio
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audio.pause() : audio.play();
  };

  const updateTime = () => {
    // When audio ends, restart to beginning
    if (audio.currentTime == audio.duration) {
      setIsPlaying(false);
      audio.currentTime = 0;
    }
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
  };

  const handleSeekBarChange = (e) => {
    audio.currentTime = e.target.value;
  };

  const handleVolumeBarChange = (e) => {
    setVolume(e.target.value);
    audio.volume = e.target.value;
  };

  // Skips forwards or backwards by 10 seconds
  const handleSkip = (forward) => {
    audio.currentTime += forward ? 10 : -10;
  };

  // This UseEffect udates the progress bar
  useEffect(() => {
    audio.addEventListener('timeupdate', updateTime);
    // Without this setDuration, the inition duration of the audio will be 0.
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
    };
  }, []);

  // This UseEffect will pause the audio when moving out of the page
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      audio.pause(); // pause audio when navigating to a different page
    });
    return () => {
      router.events.off('routeChangeStart', () => {
        audio.pause();
      });
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-full">
        <audio
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onLoadedMetadata={updateTime}
        />
        <input
          className="seek-bar"
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeekBarChange}
        />
      </div>

      <div className="flex justify-between items-center space-y-1 w-full">
        <span className="text-sm">{formatTime(currentTime)}</span>
        <span className="text-sm">{formatTime(duration)}</span>
      </div>

      <div className="flex items-center justify-around p-3 text-white w-11/12">
        <button onClick={() => handleSkip(false)} className="">
          <Icons.Skip className="w-[32px] h-[32px] rotate-180" />
        </button>

        <button className="" onClick={togglePlay}>
          {isPlaying ? (
            <Icons.Pause className="w-[32px] h-[32px]" />
          ) : (
            <Icons.Play className="w-[32px] h-[32px]" />
          )}
        </button>

        <button onClick={() => handleSkip(true)} className="">
          <Icons.Skip className="w-[32px] h-[32px]" />
        </button>
      </div>

      <div className="flex justify-center items-center w-full space-x-1 my-2">
        <Icons.VolumeMute className="w-[30px] h-[30px]" />
        <input
          className="seek-bar"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeBarChange}
        />
        <Icons.VolumeHigh className="w-[30px] h-[30px]" />
      </div>
    </div>
  );
};

export default Player;
