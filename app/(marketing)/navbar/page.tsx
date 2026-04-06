import Image from "next/image";

export default function MarketingNavbar() {
  return (
    <nav className="customContainer py-4 bg-linear-to-b from-[#000000] to-transparent">
      <div className="md:mx-16 flex justify-between items-center">
        <Image
          src="/images/netflix-logo-marketing.png"
          alt="Netflix Logo"
          width={180}
          height={100}
          className="md:w-45 w-25"
        />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 pr-6 py-1.5 border border-gray-400 rounded text-white">
            <span>English</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <button className="redBtn font-semibold cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
