const About = () => {

  return (
    <section className="relative bg-center bg-cover pb-10 pt-10 bg-about-bg">
      {/* Background Shape */}
      <img src="/assets/img/about/left-shape.png" alt="" className="absolute left-0 top-1/4 animate-float-bob-y"
      />

      <div className="container px-4 mx-auto">
        {/* Brands Marquee */}
        

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative col-span-1">
            <div className="relative z-10 flex justify-center animate-img-custom-anim-left">
              <img src="/img/01.png" alt="About Us" className="rounded-2xl" />
            </div>
            <img
              src="/img/bg-shape.png"
              alt=""
              className="absolute w-full bottom-0 -right-6 -z-10"
            />
            <img
              src="/img/grap.png"
              alt=""
              className="absolute -top-6 -left-6 animate-float-bob-x"
            />
            <img
              src="/img/emoji.png"
              alt=""
              className="absolute -bottom-10 right-10"
            />
          </div>

          {/* Right Content */}
          <div className="col-span-1">
            <div className="inline-block px-4 rounded-3xl bg-primary/10 py-2">
              <span className="font-semibold text-capitalize bg-gredient">
                About Us
              </span>
            </div>
            <h2 className="mt-4 capitalize mb-6 text-4xl font-extrabold text-zinc-950 lg:text-5xl">
              Skills to improve Your Company Brand
            </h2>

            <p className="mb-8 text-gray-600">
              It is a long established fact that a reader will be distracted the
              readable content of a page when looking at layout the point
              established fact that
            </p>

            {/* Progress Bars */}
            <div className="grid gap-8 mb-4 md:grid-cols-2">
              <div className="text-center flex items-center col-span-1">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#6A47ED"
                      strokeWidth="3"
                      strokeDasharray="65, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                    65%
                  </span>
                </div>
                <h6 className="font-semibold">Paid search marketing</h6>
              </div>

              <div className="text-center items-center flex col-span-1">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#6A47ED"
                      strokeWidth="3"
                      strokeDasharray="95, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                    95%
                  </span>
                </div>
                <h6 className="font-semibold">Search engine optimization</h6>
              </div>
            </div>

            <a
              href="/about"
              className="inline-flex font-medium items-center theme-btn"
            >
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
        </div>
      </div>
    </section>
  );
}

export default About