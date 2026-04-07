import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-white items-center justify-center flex flex-col h-140 lg:h-screen text-center max-md:pb-20 customContainer">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl max-w-120 md:max-w-lg md:leading-20">
        Unlimited movies, shows, and more
      </h1>
      <p className="text-xl font-semibold mt-4 mb-8">
        Starts at ₹149. Cancel at any time.
      </p>

      <p className="text-lg font-medium mb-4 max-md:max-w-lg">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full">
        <input
          type="email"
          placeholder="Email address"
          className="px-4 py-5 w-80 md:w-md border border-gray-700 rounded bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white"
        />
        <button className="redBtn font-semibold cursor-pointer md:py-4! md:px-8! py-3! px-4! text-2xl flex items-center gap-2">
          Get Started
          <Image
            src="/Images/marketing/greater-than-svgr-white.svg"
            alt="arrow-svg"
            width={22}
            height={20}
            className="text-white"
          />
        </button>
      </div>
    </div>
  );
}
