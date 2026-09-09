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
    <div className="flex gap-4 justify-between mt-2 items-center border border-gray-300 rounded-xl py-6 px-6" key={index}>
      <div className="flex gap-4 items-center">
        <img src={Player.PlayerImg} alt={Player.PlayerName} className="w-15 h-15  bg-gray-100 rounded-xl" />
        <div>
          <h2 className="font-bold text-2xl">{Player.PlayerName}</h2>
          <p>{Player.PlayerType}</p>
        </div>
      </div>
      <TbTrash className="text-3xl text-red-500 cursor-pointer" onClick={() => handleRemovePlayer(Player)} />
    </div>
  );
};

export default SelectedplayerCard;
