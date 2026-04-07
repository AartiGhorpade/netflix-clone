import Hero from "./hero/page";
import MarketingNavbar from "./navbar/page";
import Trending from "./trending/page";

export default function Marketing() {
  return (
    <section
      className="h-full w-full bg-cover bg-[#000000]/70 bg-blend-multiply"
      style={{ backgroundImage: "url('/Images/marketing/marketing-home.jpg')" }}
    >
      <MarketingNavbar />
      <Hero />
      <Trending />
    </section>
  );
}
