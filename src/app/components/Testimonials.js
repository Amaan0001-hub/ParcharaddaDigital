'use client'

import { useState } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Esther Howard",
      role: "Nursing Assistant",
      image: "/img/testi-01.png",
      rating: 5,
      comment:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean",
    },
    {
      id: 2,
      name: "Courtney Henry",
      role: "Nursing Assistant",
      image: "/img/testi-02.png",
      rating: 5,
      comment:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="section-padding">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-4">
          <div className="col-span-3">
            <div className="inline-block px-4 rounded-3xl bg-primary/10 py-2">
              <span className="font-semibold text-capitalize bg-gredient">
                TESTIMONILAS
              </span>
            </div>
            <h2 className="mt-4 capitalize mb-6 text-4xl font-extrabold text-zinc-950 lg:text-5xl">
              What our awesome <br /> customers say
            </h2>
          </div>
          <div className="col-span-1">
            <p className="text-gray-600 ps-4 border-l border-primary">
              The a long established fact that a reader will be distracted the
              readable content of page when looking at layout the point of using
              lorem Ipsum
            </p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Side */}
          <div>
            {/* Section Title */}

            {/* Review Stats */}
            <div className="p-6 flex items-center gap-3 bg-gray-50 rounded-2xl">
              <img src="/img/10.png" alt="Client" className="mb-0" />
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 font-semibold">15k+ (reviews)</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === 0 ? 1 : 0))
                }
                className="flex items-center justify-center w-12 h-12 transition-all bg-white rounded-full shadow-lg hover:bg-primary hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === 0 ? 1 : 0))
                }
                className="flex items-center justify-center w-12 h-12 transition-all rounded-full shadow-lg bg-primary text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="lg:col-span-1">
            <div className="relative">
              {/* Background Icon */}
              <div className="absolute top-6 right-6">
                <img src="/img/test-icon.png" alt="Quote" className="h-6" />
              </div>
              {/* Testimonial Card */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`rounded-2xl before-after py-6 px-4 transition-all duration-500 ${
                    activeTestimonial === index ? "block" : "hidden"
                  }`}
                >
                  <div className="flex flex-col items-center gap-4 md:flex-row">
                    {/* Client Image */}
                    <div className="relative">
                      <div className="relative z-10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-contain w-20 h-20 rounded-2xl border-4 border-white rounded-full"
                        />
                        <img
                          src="/img/shape-testi.png"
                          alt=""
                          className="absolute hidden lg:block h-50 bottom-[-70px] object-contain -right-6 -z-10"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Rating */}
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>

                      {/* Client Info */}
                      <div className="mb-4">
                        <h5 className="mb-2 text-2xl font-bold">
                          {testimonial.name}
                        </h5>
                        <span className="text-gray-500">
                          {testimonial.role}
                        </span>
                      </div>

                      {/* Comment */}
                      <p className="text-lg italic text-gray-600">
                        "{testimonial.comment}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials