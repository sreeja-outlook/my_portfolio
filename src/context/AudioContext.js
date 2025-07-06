import React, { createContext, useState, useCallback } from 'react';
import useSound from 'use-sound';
import musicTrack from '../assets/music-sample.mp3';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [volume, setVolume] = useState(0.5);
  const [play, { pause }] = useSound(musicTrack, {
    volume: volume,
    loop: true,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, pause, play]);

  const adjustVolume = useCallback((value) => {
    setVolume(value);
  }, []);

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, volume, adjustVolume }}>
      {children}
    </AudioContext.Provider>
  );
};
