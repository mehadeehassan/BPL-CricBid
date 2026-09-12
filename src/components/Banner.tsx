import BannerLogo from "../assets/banner-main.png";
import BannerImg from "../assets/bg-shadow.png";
export default function Banner() {
  return (
    <section className="container mx-auto relative w-full overflow-hidden rounded-3xl bg-[#0a0a0d] px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      {/* background glow */}
      <img src={BannerImg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <img src={BannerLogo} alt="Cricket" className="mb-6 h-24 w-auto select-none sm:h-32 md:h-40" />

        <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>

        <p className="mt-4 max-w-lg text-sm text-gray-400 sm:text-base">Beyond Boundaries Beyond Limits</p>

        {/* <button className="mt-8 rounded-full bg-[#E7FE29] px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#d8e65e] ring-2  ring-[#5774d4]">
          Claim Free Credit
        </button> */}
        <button className="mt-8 rounded-2xl bg-[#E7FE29] px-8 py-3 text-base font-bold text-black ring-5 ring-lime-300 ring-offset-4 ring-offset-black shadow-[0_0_25px_rgba(190,255,60,0.5)] transition-all hover:bg-lime-200 hover:shadow-[0_0_35px_rgba(190,255,60,0.7)]">
          Claim Free Credit
        </button>
      </div>
    </section>
  );
}
