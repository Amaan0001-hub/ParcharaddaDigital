const Audience = () => {
  return (
    <section className="relative text-white bg-center bg-cover section-padding bg-audience-bg">
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="sub-title bg-color-3">Success Stories</span>
            <h2 className="mt-4 mb-8 text-4xl font-bold text-white lg:text-5xl">
              Organic Audience Driven On Social Media
            </h2>

            {/* Client Review */}
            <img src="/img/trust-logo.png" alt="Client" />
            {/* Client Review */}
            <div className="flex items-center gap-3 mt-5">
              <img
                src="/img/client.png"
                alt="Client Avatar"
                className="w-auto h-10 rounded-full"
              />
              <div>
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="#fff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-white">450+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Main Image */}
            <div className="relative flex pt-10 pb-0 mb-8 lg:justify-end">
              
              <div className="lg:w-[40%] p-6 text-gray-900 bg-white shadow-lg rounded-xl">
                <h3 className="mb-2 text-2xl font-bold">Expert Analysis</h3>
                <p className="text-gray-600">Data-driven insights</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <h2 className="mb-4 text-5xl font-bold text-white">
                  <span className="count">200</span>+
                </h2>
                <h4 className="mb-2 text-xl font-semibold text-gray-300">
                  Total Project
                </h4>
                <p className="text-gray-200">
                  Lorem dolor amet consectetur adipiscing any more elit.
                </p>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <h2 className="mb-4 text-5xl font-bold text-white">
                  <span className="count">10</span>+
                </h2>
                <h4 className="mb-2 text-xl font-semibold text-gray-300">
                  Investment
                </h4>
                <p className="text-gray-200">
                  Lorem dolor amet consectetur adipiscing any more elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Audience