import type { Dispatch, SetStateAction } from "react";
import type { Iplayers } from "../../Types/playerTypes";
import PlayersCard from "../Players/PlayersCard";

interface AvailablePlayersProps {
  players: Iplayers[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  isSelectedPlayer: Iplayers[];
  setIsSelectedPlayer: Dispatch<SetStateAction<Iplayers[]>>;
}

const AvailablePlayers = ({ players, coin, setCoin, isSelectedPlayer, setIsSelectedPlayer }: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3">
      {players.map((player: Iplayers, index: number) => {
        return <PlayersCard 
          key={index} 
          player={player} 
          coin={coin} 
          setCoin={setCoin} 
          isSelectedPlayer={isSelectedPlayer} 
          setIsSelectedPlayer={setIsSelectedPlayer} 
          />;
      })}
    </div>
  );
};

export default AvailablePlayers;
