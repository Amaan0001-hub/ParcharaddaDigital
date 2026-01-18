const CTA = () => {
  return (
    <section className="relative">
      {/* Rocket Animation */}
      <div className="absolute transform -translate-y-1/2 -top-10 right-20 animate-float-bob-y">
        <img src="/img/rokect.png" alt="Rocket" className="h-40" />
      </div>

      <div className="max-w-6xl relative z-10 px-4 pt-20 -mb-10 relative  mx-auto">
        <div className="overflow-hidden bg-center bg-cover bg-cta-bg rounded-3xl">
          <div className="p-8 lg:py-20 lg:px-16">
            <div className="animate-img-custom-anim-left absolute top-5 lg:block hidden">
              <img src="/img/cta-img.png" alt="CTA" className="" />
            </div>
            <div className="grid items-center lg:grid-cols-1">
              {/* Left Image */}

              {/* Right Content */}
              <div className="flex flex-wrap lg:flex-nowrap lg:gap-20 gap-8 items-center">
                <h2 className="mb-0 lg:ms-[300px] text-2xl font-bold text-white lg:text-3xl">
                  Stay Connected With <br />
                  Cutting Edge IT
                </h2>
                <a
                  href="/contact"
                  className="inline-flex uppercase items-center px-8 py-4 font-semibold transition-all bg-white rounded-full text-[#17012c] hover:bg-gray-100 group"
                >
                  talk TO a Specialist
                  <svg
                    className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA