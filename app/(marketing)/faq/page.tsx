"use client";
import { title } from "process";
import { useState } from "react";

export default function FAQ() {
  type faqTypes = {
    title: string;
    desc: string;
  };
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqData: faqTypes[] = [
    {
      title: "What is Netflix?",
      desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      title: "How much does Netflix cost?",
      desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.",
    },
    {
      title: "Where can I watch?",
      desc: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do I cancel?",
      desc: "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      title: "What can I watch on Netflix?",
      desc: "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids?",
      desc: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="customContainer text-white mt-20">
      <h2 className="marketingTitle my-5">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 border border-gray-700 bg-[#2d2d2d]">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center text-left px-6 py-5 hover:bg-[#414141] transition-all duration-300 cursor-pointer"
          >
            <h3 className="lg:text-3xl text-xl font-medium text-white">{item.title}</h3>

            <span className="text-5xl text-white">
              {openIndex === index ? "×" : "+"}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-6 py-5 text-gray-300 text:lg lg:text-2xl border-t border-black">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
