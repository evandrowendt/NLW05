import { createContext } from 'react';

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
};

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    play: (episode: Episode) => void;
    togglePlay: () => void;
    setPlayingState: (state: boolean) => void;
};

 // o conteúdo que passo dentro do createContext serve para ditar qual o formato de dado espero receber na chamada do método
export const PlayerContext = createContext({} as PlayerContextData);