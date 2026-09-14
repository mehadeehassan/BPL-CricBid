import type { Dispatch, SetStateAction } from "react";
import { FaUser } from "react-icons/fa";
import { GiBowlSpiral, GiCricketBat } from "react-icons/gi";
import { IoFlagSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import type { Iplayers } from "../../Types/playerTypes";

interface IPlayersCardPops {
  player: Iplayers;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  isSelectedPlayer: Iplayers[];
  setIsSelectedPlayer: Dispatch<SetStateAction<Iplayers[]>>;
}

const isSelected = isSelectedPlayer.some(
  (p) => p.PlayerName === player.PlayerName
);

const PlayersCard = ({ player, coin, setCoin, isSelectedPlayer, setIsSelectedPlayer }: IPlayersCardPops) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPlayers = () => {
    const newCoinPrice = coin - player.price;
    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);
      setIsSelected(true);
      //selected player
      setIsSelectedPlayer([...isSelectedPlayer, player]);
      toast.success(`You have successfully purchased ${player.PlayerName}`);
    } else {
      toast.error(`You don't have enough coins to purchase ${player.PlayerName}`);
    }
  };

  return (
    <div className="card bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Player Image */}
      <figure className="relative h-64 bg-base-200">
        <img src={player.PlayerImg} alt={player.PlayerName} className="w-full h-full object-contain" />

        {/* Player Type Badge */}
        <span className="absolute top-3 right-3 badge badge-primary font-semibold">{player.PlayerType}</span>
      </figure>

      {/* Card Content */}
      <div className="card-body p-5">
        {/* Name */}
        <div className="flex items-center gap-2">
          <FaUser className="text-primary" />
          <h2 className="text-xl font-bold">{player.PlayerName}</h2>
        </div>

        {/* Origin + Rating */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-sm font-medium text-base-content/70">
            <IoFlagSharp className="text-primary text-lg" />
            <span>{player.Origin}</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-yellow-400 font-bold text-lg">★ ★ ★</span>
            <span className="font-bold text-lg text-primary">{player.Rating}</span>
          </div>
        </div>

        <div className="divider my-2"></div>

        {/* Batting & Bowling */}
        <div className="grid grid-cols-2 gap-3">
          {/* Batting */}
          <div className="bg-base-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <GiCricketBat className="text-primary text-lg" />
              <p className="text-xs text-base-content/60">Batting</p>
            </div>

            <p className="font-semibold text-sm">{player.BattingStyle}</p>
          </div>

          {/* Bowling */}
          <div className="bg-base-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <GiBowlSpiral className="text-primary text-lg" />
              <p className="text-xs text-base-content/60">Bowling</p>
            </div>

            <p className="font-semibold text-sm">{player.BowlingStyle}</p>
          </div>
        </div>

        {/* Price + Button */}
        <div className="card-actions items-center justify-between mt-4">
          <div>
            <p className="text-xs text-base-content/60">Player Price</p>
            <h2 className="text-xl font-bold text-primary">${player.price}</h2>
          </div>

          <button
            onClick={() => handleSelectPlayers()}
            className="btn btn-primary"
            // disabled = {isSelected ? true : false}
            disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayersCard;
