'use client'

import { useState } from 'react'
import AnimatedServices from './AnimatedCard'

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
      {/* amzad  */}
       <AnimatedServices/>
      </div>
    </section>
  );
}

export default CaseStudies

