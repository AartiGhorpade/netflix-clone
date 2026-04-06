import MarketingNavbar from "./navbar/page";

export default function Marketing() {
  return (
    <section
      className="h-screen w-full bg-cover bg-[#000000]/[.7] bg-blend-multiply"
      style={{ backgroundImage: "url('/Images/marketing-home.jpg')" }}
    >
      <MarketingNavbar />
    </section>
  );
}
