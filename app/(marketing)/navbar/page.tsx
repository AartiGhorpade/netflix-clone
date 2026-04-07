import Image from "next/image";

export default function MarketingNavbar() {
  return (
    <nav className="customContainer py-4 bg-linear-to-b from-[#000000] to-transparent">
      <div className="md:mx-8 flex justify-between items-center">
        <Image
          src="/images/netflix-logo-marketing.png"
          alt="Netflix Logo"
          width={180}
          height={100}
          className="md:w-45 w-25"
        />

        <div className="flex items-center gap-4">
          <div className="border border-gray-500 rounded">
            <select className="border border-gray-500 rounded text-white bg-transparent sm:px-2 py-1 border-r-transparent sm:border-r-8">
              <option value="en" defaultValue="EN">
                🌐 EN
              </option>
            </select>
          </div>
          <button className="redBtn font-semibold cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
