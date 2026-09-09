import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Players from "./components/Players/Players";
import type { Iplayers } from "./Types/playerTypes";


const playersFetch = async (): Promise<Iplayers[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [playersPromise] = useState(() => playersFetch());
  const [coin, setCoin] = useState(1500)
  const [isSelectedPlayer, setIsSelectedPlayer] = useState<Iplayers[]>([]);


  return (
    <>
      <Navbar coin={coin}/>
      <Banner />
      <Suspense fallback="Loading...">
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
          isSelectedPlayer={isSelectedPlayer}
          setIsSelectedPlayer={setIsSelectedPlayer}
        />
      </Suspense>
    </>
  );
}

export default App;
