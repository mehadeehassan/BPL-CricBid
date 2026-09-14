import type { Dispatch, SetStateAction } from "react";
import type { Iplayers } from "../../Types/playerTypes";
import SelectedplayerCard from "./SelectedplayerCard";

interface IselectedPlayerPops {
  isSelectedPlayer: Iplayers[];
  setIsSelectedPlayer: Dispatch<SetStateAction<Iplayers[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  setActiveTab: Dispatch<SetStateAction<"available" | "selected">>;
}

const SelectedPlayers = ({ isSelectedPlayer, setIsSelectedPlayer, coin, setCoin, setActiveTab }: IselectedPlayerPops) => {


  if(isSelectedPlayer.length === 0) {
    return (
      <div className="flex min-h-75 items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-900">No Player Selected yet</h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">Go to Available tab to select player</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 mt-6">
      {isSelectedPlayer.map((Player: Iplayers, index: number) => {
        return <SelectedplayerCard 
        index={index} 
        Player={Player} 
        key={index} 
        isSelectedPlayer={isSelectedPlayer} 
        setIsSelectedPlayer={setIsSelectedPlayer} 
        coin={coin} 
        setCoin={setCoin} />;
      })}
      {/* Add More Player */}
      {isSelectedPlayer.length < 6 && (
        <div className="mt-6">
          <button onClick={() => setActiveTab("available")} 
          className="mt-8 rounded-xl bg-[#E7FE29] px-8 py-3 text-base font-bold text-black ring-2 ring-gray-800 ring-offset-4 ring-offset-white shadow-[0_0_25px_rgba(190,255,60,0.5)]">
            Add More Player
          </button>
        </div>
      )}
    </div>
  );
};
export default SelectedPlayers;
