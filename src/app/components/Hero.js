const Hero = () => {
  return (
    <section className="relative pt-[50px]  bg-center bg-cover bg-custom">
      {/* Background Shapes */}
      <div className="z-10 mike-absoute">
        <img src="/img/mike-shape.png" alt="" className="animate-float-bob-y" />
      </div>
      <div className="energy-shape float-bob-y">
        <img
          src="/img/energy-shape.png"
          className="animate-float-bob-y"
          alt="img"
        />
      </div>
      <div className="absolute inset-0">
        <img
          src="/assets/img/hero/rocket.png"
          alt=""
          className="absolute bottom-20 right-20 animate-float-bob-y"
        />
      </div>

      <div className="container relative z-10 px-4 pt-20 mx-auto lg:pt-32 pb-0 align-left">
        <div className="mb-12 text-center">
          <img
            src="/img/hero-text.png"
            alt="Think Digital"
            className="mx-auto animate-img-custom-anim-left"
          />
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-3">
          {/* Left Content */}
          <div className="lg:col-span-1">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-2 mb-4 font-semibold text-white rounded-full text-l bg-white/20 animate-img-custom-anim-left">
                <span>GO </span>
                <span>FOR </span>
                <span>ADVERTISING</span>
              </span>
              <h1 className="mb-6 text-5xl font-black text-white capitalize lg:text-8xl animate-img-custom-anim-right">
                THINK DIGITAL
              </h1>
              <p className="mb-8 text-lg text-gray-200">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised
              </p>
            </div>
          </div>
          {/*Hero Img*/}
          <div className="lg:col-span-1">
            <img src="/img/hero-image.png" alt="Hero" className="w-full" />
          </div>
          {/* Right Content */}
          <div className="">
            {/* Video Button */}
            <div className="relative inline-block mb-8">
              <button className="relative group">
                <div className="flex items-center border p-3 bg-gray-300/20 justify-center w-[151px] h-[151px] rounded-full bg-primary">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <img
                  src="/img/text-circle.png"
                  alt=""
                  className="absolute top-[12] left-[10px] animate-spin-slow"
                />
              </button>
            </div>

            <p className="mb-8 text-gray-200">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected.
            </p>
            <img src="/img/trust-logo.png" alt="Client" />
            {/* Client Review */}
            <div className="flex items-center gap-3 mt-5">
              <img
                src="/img/client.png"
                alt="Client Avatar"
                className="w-auto h-10 rounded-full"
              />
              <div>
                <p className="text-lg font-semibold text-white">450+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="overflow-hidden">
        <div className="w-full py-5 overflow-hidden bg-white backdrop-blur-sm z-10 border-t border-b border-zinc-900">
          <div className="flex space-x-8 animate-marquee whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 space-x-2">
                <span className="text-2xl font-extrabold text-zinc-900">
                  THE BEST SOLUTION
                </span>
                <img src="/img/star.png" alt="Star" className="h-6" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-[#c6f806] relative py-5 overflow-hidden backdrop-blur-sm z-10 border-t border-b border-zinc-900">
          <div className="flex space-x-8 animate-marquee-reverse whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 space-x-2">
                <span className="text-2xl font-extrabold text-zinc-900">
                  THE BEST SOLUTION
                </span>
                <img src="/img/star.png" alt="Star" className="h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero