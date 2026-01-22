import React from "react";

export default function AnimatedServices() {
  return (
    <div className="flex items-center gap-6">
      {/* LEFT BIG CARD */}
      <div
        className="w-[520px] h-[300px] rounded-3xl bg-gradient-to-br 
                      from-blue-500 to-indigo-600 p-6 text-white
                      flex flex-col justify-between shadow-xl"
      >
        <div className="flex flex-wrap gap-3">
          {["Real-time Analytics", "Social", "Agile Advance", "Advance"].map(
            (item, i) => (
              <span
                key={i}
                className="px-4 py-1 text-sm border rounded-full border-white/40 backdrop-blur"
              >
                {item} ↗
              </span>
            ),
          )}
        </div>

        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Rising Stars Obscure</h2>
          <span
            className="flex items-center justify-center w-10 h-10 font-semibold text-black bg-white rounded-full"
          >
            01
          </span>
        </div>
      </div>

      {/* VERTICAL EXPANDABLE CARDS */}
      {[
        { title: "Digital Marketing", num: "02" },
        { title: "Instantly Analyze", num: "03" },
        { title: "Web & Mobile", num: "04" },
      ].map((card, i) => (
        <div
          key={i}
          className="group relative h-[300px] w-[80px] hover:w-[260px]
                     bg-[#6C4CF2] rounded-3xl text-white
                     transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
                     overflow-hidden cursor-pointer shadow-lg"
        >
          {/* NUMBER */}
          <span
            className="absolute bottom-4 left-1/2 -translate-x-1/2
             w-9 h-9 rounded-full bg-white text-black
             flex items-center justify-center text-sm font-semibold
             
             group-hover:top-4 group-hover:left-4
             group-hover:bottom-auto
             group-hover:translate-x-0
             
             transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
          >
            {card.num}
          </span>

          {/* VERTICAL TITLE */}
          <h3
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         text-lg font-medium
                         [writing-mode:vertical-rl] rotate-180
                         group-hover:opacity-0 transition-all duration-300"
          >
            {card.title}
          </h3>

          {/* EXPANDED CONTENT */}
          <div
            className="flex flex-col justify-end h-full p-6 transition-all duration-500 opacity-0 group-hover:opacity-100"
          >
            <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
            <p className="mb-3 text-sm text-white/80">
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
            <span className="flex items-center gap-2 text-sm font-medium">
              Read More →
            </span>
          </div>
        </div>
      ))}

      {/* RIGHT BIG CARD */}
      <div
        className="w-[260px] h-[300px] rounded-3xl
                      bg-gradient-to-br from-cyan-300 to-purple-300
                      p-6 flex flex-col justify-between shadow-xl"
      >
        <span className="flex items-center justify-center font-semibold bg-white rounded-full w-9 h-9">
          05
        </span>

        <div>
          <h3 className="mb-2 text-xl font-semibold">Email Marketing</h3>
          <p className="mb-4 text-sm">
            Reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
          <span className="flex items-center gap-2 text-sm font-medium">
            Read More →
          </span>
        </div>
      </div>
    </div>
  );
}
