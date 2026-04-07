"use client";
import { useEffect, useRef, useState } from "react";

export default function Trending() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth; // better than fixed 300

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  type Movie = {
    id: number;
    poster_path: string;
  };
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="bg-black text-white px-4 md:px-10 py-6 customContainer py-20">
      <div className="relative">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Trending Now</h2>

        {/* LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-2 lg:-left-8 top-1/2 -translate-y-1/2 z-2 bg-white/10 rounded-lg px-2 py-10 cursor-pointer"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-2 lg:-right-10 top-1/2 -translate-y-1/2 z-2 bg-white/10 rounded-lg px-2 py-10 cursor-pointer"
        >
          ›
        </button>

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-hidden lg:pl-5 scroll-smooth mt-10"
        >
          {movies?.map((data, index) => (
            <div key={index} className="shrink-0 cursor-pointer relative">
              <img
                src={data.poster_path}
                alt={`movie-${index}`}
                className="lg:h-70 lg:w-50 w-30 h-40 rounded-lg"
              />
              {/* Number */}
              <span className="absolute bottom-0 lg:-left-6 -left-4 text-[60px] lg:text-[100px] font-bold text-black text-stroke">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
