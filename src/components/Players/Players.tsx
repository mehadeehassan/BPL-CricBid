import { use, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Iplayers } from "../../Types/playerTypes";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const MAX_PLAYERS = 6;

interface playersProps {
  playersPromise: Promise<Iplayers[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  isSelectedPlayer: Iplayers[];
  setIsSelectedPlayer: Dispatch<SetStateAction<Iplayers[]>>;
}

const Players = ({ playersPromise, coin, setCoin, isSelectedPlayer, setIsSelectedPlayer }: playersProps) => {
  const players = use(playersPromise);
  const [buttonTpye, setButtontype] = useState<"available" | "selected">("available");

  const hendleUpdateBtnType = (type: "available" | "selected") => {
    setButtontype(type);
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">
          {buttonTpye === "available"
            ? "Available Players"
            : `Selected Player (${isSelectedPlayer.length}/${MAX_PLAYERS})`}
        </h2>
        <div className="flex">
          <button
            onClick={() => hendleUpdateBtnType("available")}
            className={`btn text-black rounded-r-none ${buttonTpye === "available" ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => hendleUpdateBtnType("selected")}
            className={`btn rounded-l-none ${buttonTpye === "selected" ? "bg-[#E7FE29]" : ""}`}
          >
            Selected ({isSelectedPlayer.length})
          </button>
        </div>
      </div>
      {buttonTpye === "available" ? (
        <AvailablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          isSelectedPlayer={isSelectedPlayer}
          setIsSelectedPlayer={setIsSelectedPlayer}
        />
      ) : (
        <SelectedPlayers
          isSelectedPlayer={isSelectedPlayer}
          setIsSelectedPlayer={setIsSelectedPlayer}
          coin={coin}
          setCoin={setCoin}
          setActiveTab={setButtontype}
        />
      )}
    </div>
  );
};

export default Players;