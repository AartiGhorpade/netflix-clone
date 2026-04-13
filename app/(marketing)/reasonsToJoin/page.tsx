import pcImg from "@/public/Images/marketing/monitor.png";
import arrow from "@/public/Images/marketing/down-arrow.png";
import scope from "@/public/Images/marketing/telescope.png";
import smile from "@/public/Images/marketing/smile.png";
import Image, { StaticImageData } from "next/image";

type joinTypes = {
  title: string;
  desc: string;
  imgPath: StaticImageData;
};
export default function ReasonsToJoin() {
  const JoinData: joinTypes[] = [
    {
      title: "Enjoy on your TV",
      desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      imgPath: pcImg,
    },
    {
      title: "Download your shows to watch offline",
      desc: "Save your favourites easily and always have something to watch.",
      imgPath: arrow,
    },
    {
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      imgPath: scope,
    },
    {
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      imgPath: smile,
    },
  ];
  return (
    <div className="customContainer text-white">
      <h2 className="marketingTitle my-5">More reasons to join</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 ">
        {JoinData.map((item, index) => (
          <div
            key={index}
            className="bg-linear-to-br from-[#1f1b3a] via-[#1a1333] to-[#0d0b1f] p-6 rounded-2xl flex flex-col justify-between lg:h-84"
          >
            <div>
              <h2 className="marketingTitle mb-4">{item.title}</h2>
              <p className="text-gray-300 text-[16px]">{item.desc}</p>
            </div>
            <div className="relative">
              <Image
                src={item.imgPath}
                alt={item.title}
                className="lg:w-14 lg:h-14 float-end"
                width={20}
                height={20}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-fuchsia-600 to-purple-900 mix-blend-overlay"></div>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
