import type { Dispatch, SetStateAction } from "react";
import { TbTrash } from "react-icons/tb";
import type { Iplayers } from "../../Types/playerTypes";
import { toast } from "react-toastify";

interface IselectedPlayerCardProps {
  Player: Iplayers;
  isSelectedPlayer: Iplayers[];
  setIsSelectedPlayer: Dispatch<SetStateAction<Iplayers[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  index: number;
}
const SelectedplayerCard = ({ Player, isSelectedPlayer, setIsSelectedPlayer, coin, setCoin, index }: IselectedPlayerCardProps) => {
  const handleRemovePlayer = (player: Iplayers) => {
    const restPlayers = isSelectedPlayer.filter((selectedPlayer) => selectedPlayer.PlayerName !== player.PlayerName);
    setIsSelectedPlayer(restPlayers);
    toast.info(`${player.PlayerName} removed successfully`);

    const newCoinPrice = coin + player.price;
    setCoin(newCoinPrice);
  };
  return (
    <div className="flex flex-wrap gap-4 justify-between mt-2 items-center border border-gray-300 rounded-xl py-4 px-4 sm:py-6 sm:px-6" key={index}>
      <div className="flex min-w-0 gap-4 items-center">
        <img src={Player.PlayerImg} alt={Player.PlayerName} className="h-14 w-14 shrink-0 bg-gray-100 rounded-xl object-cover sm:h-15 sm:w-15" />
        <div className="min-w-0">
          <h2 className="truncate font-bold text-lg sm:text-2xl">{Player.PlayerName}</h2>
          <p className="truncate text-sm sm:text-base">{Player.PlayerType}</p>
        </div>
      </div>
      <TbTrash className="shrink-0 text-2xl text-red-500 cursor-pointer sm:text-3xl" onClick={() => handleRemovePlayer(Player)} />
    </div>
  );
};

export default SelectedplayerCard;
