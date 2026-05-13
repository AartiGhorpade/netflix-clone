import FAQ from "./faq/page";
import Hero from "./hero/page";
import MarketingNavbar from "./navbar/page";
import ReasonsToJoin from "./reasonsToJoin/page";
import Trending from "./trending/page";

export default function Marketing() {
  return (
    <section className="bg-black text-white ">
      <div
        className="h-full w-full bg-cover bg-[#000000]/70 bg-blend-multiply"
        style={{
          backgroundImage: "url('/Images/marketing/marketing-home.jpg')",
        }}
      >
        <MarketingNavbar />
        <Hero />
      </div>
      <Trending />
      <ReasonsToJoin />
      <FAQ />
    </section>
  );
}
