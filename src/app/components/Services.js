const Services = () => {
  const services = [
    {
      icon: '/img/icon-1.png',
      title: 'Digital Marketing',
      description: 'Lorem dolor amet consectetur read adipiscing any more elit.',
      link: '/service/service-details'
    },
    {
      icon: '/img/icon-2.png',
      title: 'SEO Analytics',
      description: 'Lorem dolor amet consectetur read adipiscing any more elit.',
      link: '/service/service-details'
    },
    {
      icon: '/img/icon-3.png',
      title: 'Social Marketing',
      description: 'Lorem dolor amet consectetur read adipiscing any more elit.',
      link: '/service/service-details'
    }
  ]

  return (
    <section className="relative overflow-hidden section-padding">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/img/service/left-shape.png"
          alt=""
          className="absolute left-0 top-1/4 animate-float-bob-y"
        />
        <img
          src="/assets/img/service/right-shape.png"
          alt=""
          className="absolute right-0 bottom-1/4"
        />
        <img
          src="/assets/img/service/bg-shape.png"
          alt=""
          className="absolute inset-0 object-cover w-full h-full opacity-10"
        />
      </div>

      <div className="container px-4 mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <div className="grid items-center gap-8 lg:grid-cols-4">
            <div className="col-span-3">
              <div className="inline-block px-4 rounded-3xl bg-primary/10 py-2">
                <span className="font-semibold text-capitalize bg-gredient">
                  Why Services Us
                </span>
              </div>
              <h2 className="mt-4 capitalize mb-6 text-4xl font-extrabold text-zinc-950 lg:text-5xl">
                Use SEO to Drive Growth <br /> at Your Business
              </h2>
            </div>
            <div className="col-span-1">
              <p className="text-gray-600 ps-4 border-l border-primary">
                Pellentesque ut vehicula sapien <br /> dictumst. Maecenas ante.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="px-4 py-8 transition-shadow border flex gap-3 duration-300 bg-white shadow rounded-2xl hover:shadow-xl group"
            >
              <div className="mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-auto h-[80px] object-contain"
                />
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-primary">
                  <a href={service.link}>{service.title}</a>
                </h3>

                <p className="mb-6 text-gray-600">{service.description}</p>

                <a
                  href={service.link}
                  className="inline-flex items-center font-semibold text-primary group-hover:underline"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services