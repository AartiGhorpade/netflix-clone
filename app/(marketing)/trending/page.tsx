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

  console.log(movies);

  return (
    <div className="customContainer px-4 py-10 md:px-8 lg:px-10">
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Trending Now</h2>
        </div>

        <div className="relative mt-8 px-8 md:px-10">
          {movies?.map((_, id) => {
            return (
              <div key={id}>
                <button
                  onClick={() => scroll("left")}
                  className="absolute -left-4 md:-left-2 lg:-left-11 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center rounded-xl bg-[#333333] text-3xl transition hover:bg-white/20 h-40 w-8"
                  aria-label="Scroll left"
                >
                  ‹
                </button>

                <button
                  onClick={() => scroll("right")}
                  className="absolute -right-2 md:-right-2 lg:-right-11 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center rounded-xl bg-[#333333] text-3xl transition hover:bg-white/20 h-40 w-8"
                  aria-label="Scroll right"
                >
                  ›
                </button>
              </div>
            );
          })}

          <div
            ref={scrollRef}
            className="mt-2 flex gap-4 overflow-x-auto px-1 pb-3 scroll-smooth snap-x snap-mandatory hide-scrollbar lg:gap-6 lg:px-2"
          >
            {movies.slice(0, 10)?.map((data, index) => (
              <div
                key={index}
                className={`shrink-0 cursor-pointer relative snap-start px-2`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                  alt={`movie-${index}`}
                  className="h-[180px] w-[160px] md:w-[180px] lg:w-[220px] rounded-3xl object-cover shadow-lg sm:h-[220px] md:h-[260px] lg:h-[320px]"
                  loading="lazy"
                />

                <span
                  className={`absolute bottom-3 -left-1 md:-left-3 text-[60px] md:text-[70px] lg:text-[120px] font-bold text-black text-stroke`}
                >
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
