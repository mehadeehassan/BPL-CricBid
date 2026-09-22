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
  const [coin, setCoin] = useState(2000);
  const [isSelectedPlayer, setIsSelectedPlayer] = useState<Iplayers[]>([]);

  return (
    <>
      <Navbar coin={coin} />

      {/* Home */}
      <section id="home">
        <Banner />
      </section>

      {/* Teams */}
      <section id="teams">
        <Suspense fallback="Loading...">
          <Players
            playersPromise={playersPromise}
            coin={coin}
            setCoin={setCoin}
            isSelectedPlayer={isSelectedPlayer}
            setIsSelectedPlayer={setIsSelectedPlayer}
          />
        </Suspense>
      </section>

      {/* Fixture */}
      {/* <section id="fixture" className="min-h-screen">
        <h2 className="text-3xl font-bold">Fixture</h2> */}

        {/* Fixture component এখানে রাখবে */}
      {/* </section> */}

      {/* Schedules */}
      {/* <section id="schedules" className="min-h-screen">
        <h2 className="text-3xl font-bold">Schedules</h2> */}

        {/* Schedules component এখানে রাখবে */}
      {/* </section> */}
    </>
  );
}

export default App;