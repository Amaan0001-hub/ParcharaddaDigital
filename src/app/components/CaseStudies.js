'use client'

import { useState } from 'react'

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(3) 

  const caseStudies = [
    {
      id: 1,
      title: 'Rising Stars Obscure',
      category: 'Real-time Analytics, Social, Agile Advance, Advance',
      image: '/assets/img/case-studies/01.jpg',
      icon: '/assets/img/case-studies/icon.png',
      description: 'Comprehensive digital strategy implementation'
    },
    {
      id: 2,
      title: 'Digital Marketing',
      bgClass: 'bg-gray-50',
      description: 'Reprehendeirure irit in volut ate velit esse cillum dolDuis aute irure dolor in ore'
    },
    {
      id: 3,
      title: 'Instantly Analyze',
      bgClass: 'bg-purple-50',
      description: 'Reprehendeirure irit in volut ate velit esse cillum dolDuis aute irure dolor in ore'
    },
    {
      id: 4,
      title: 'Web & Mobile',
      bgClass: 'bg-blue-50',
      description: 'Reprehendeirure irit in volut ate velit esse cillum dolDuis aute irure dolor in ore',
      active: true
    },
    {
      id: 5,
      title: 'Email marketing',
      bgClass: 'bg-green-50',
      description: 'Reprehendeirure irit in volut ate velit esse cillum dolDuis aute irure dolor in ore'
    }
  ]

  return (
    <section className="relative overflow-hidden section-padding">
      {/* Background Shapes */}
      <img
        src="/assets/img/case-studies/overlay-shape.png"
        alt=""
        className="absolute inset-0 object-cover w-full h-full opacity-5 -z-10"
      />
      <img
        src="/assets/img/case-studies/left-shape.png"
        alt=""
        className="absolute left-0 top-1/4 animate-float-bob-x -z-10"
      />
      <img
        src="/assets/img/case-studies/right-shaape.png"
        alt=""
        className="absolute right-0 bottom-1/4 animate-float-bob-x -z-10"
      />

      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between mb-12 lg:flex-row lg:items-center">
          <div className="mb-8 lg:mb-0">
            <div className="inline-block px-4 py-2 rounded-3xl bg-primary/10">
              <span className="font-semibold text-capitalize bg-gredient">
                Case Studies
              </span>
            </div>
            <h2 className="mt-4 mb-6 text-4xl font-extrabold capitalize text-zinc-950 lg:text-5xl">
              We Are A Creative Digital <br />
              Marketing Agency
            </h2>
          </div>
          <a href="/about" className="inline-flex items-center theme-btn">
            EXPLORE MORE
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Large Case Study */}
          <div className="relative col-span-12 overflow-hidden group rounded-2xl">
            <div className="relative h-full">
              <img
                src="/img/01.jpg"
                alt="Case Study"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-[16px] left-[16px] z-10">
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-4 py-2 text-white border border-white rounded-full text-medium bg-white/30 backdrop-blur-sm">
                    Real-time Analytics
                  </span>
                  <span className="px-4 py-2 text-white border border-white rounded-full text-medium bg-white/30 backdrop-blur-sm">
                    Social
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-4 py-2 text-white border border-white rounded-full text-medium bg-white/30 backdrop-blur-sm">
                    Agile Advance
                  </span>
                  <span className="px-4 py-2 text-white border border-white rounded-full text-medium bg-white/30 backdrop-blur-sm">
                    Advance
                  </span>
                </div>
              </div>
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-3 text-3xl font-bold text-white">
                    <img src="/img/icon.png" alt="" className="h-8" />
                    Rising Stars Obscure
                  </h3>
                  <span className="text-base w-[35px] h-[35] items-center justify-center font-bold bg-white rounded-full inline-flex text-black">
                    01
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Small Case Studies */}
        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(1).map((caseStudy, index, arr) => {
            const isLastItem = index === arr.length - 1;
            const shouldCenter = arr.length % 3 === 1 && isLastItem;

            return (
              <div
                key={caseStudy.id}
                className={`
          ${caseStudy.bgClass}
          rounded-2xl overflow-hidden p-8 bg-image-card-grid relative group cursor-pointer transition-all duration-300 hover:shadow-xl
          ${activeCase === caseStudy.id ? "ring-2 ring-primary" : ""}
          ${shouldCenter ? "lg:col-start-2" : ""}
        `}
                onMouseEnter={() => setActiveCase(caseStudy.id)}
                onMouseLeave={() => setActiveCase(3)}
              >
                <div className="relative z-10">
                  <span className="text-xl rounded-full inline-flex items-center justify-center bg-white font-bold text-black w-[45px] h-[45px]">
                    0{caseStudy.id}
                  </span>
                  <h3 className="mt-16 mb-4 text-xl font-bold text-white">{caseStudy.title}</h3>


                  {/* Hover Content */}
                  
                    <p className="mb-4 text-white">
                      {caseStudy.description}
                    </p>

                    <a
                      href="/project/project-details"
                      className="inline-flex items-center font-semibold text-white"
                    >
                      Read More
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                </div>

                {/* Hover Number */}
                <span
                  className={`absolute -bottom-4 right-2 text-8xl font-bold transition-all duration-300 ${
                    activeCase === caseStudy.id
                      ? "text-primary/10"
                      : "text-gray-100"
                  }`}
                >
                  0{caseStudy.id}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies

