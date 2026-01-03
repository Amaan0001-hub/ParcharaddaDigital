const Contact = () => {
  return (
    <section className="relative overflow-hidden section-padding bg-primary">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-white/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section Title */}
        <div className="grid items-center gap-8 lg:grid-cols-4">
          <div className="col-span-3">
            <div className="inline-block px-4 rounded-3xl bg-white/10 py-2">
              <span className="font-semibold text-capitalize text-white">
                Contact Us
              </span>
            </div>
            <h2 className="mt-4 capitalize mb-6 text-4xl font-extrabold text-white lg:text-5xl">
              How can we help you today?
            </h2>
          </div>
          <div className="col-span-1">
            <p className="text-white ps-4 border-l border-white">
              The a long established fact that a reader will be distracted the
              readable content of page when looking at layout the point.
            </p>
          </div>
        </div>
        

        <div className="grid gap-12 mt-10 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 bg-white shadow-2xl rounded-2xl">
            <h3 className="mb-8 text-3xl font-bold">Get in Touch</h3>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Subject</option>
                    <option>Complain</option>
                    <option>Greetings</option>
                    <option>About Price</option>
                    <option>About order</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Messages"
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="agree" className="w-5 h-5" />
                <label htmlFor="agree" className="text-gray-600">
                  Collaboratively formulate principle capital. Progressively
                  evolve user
                </label>
              </div>

              <button type="submit" className="justify-center w-full theme-btn">
                Submit Now
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
              </button>
            </form>
          </div>

          {/* Map & Contact Info */}
          <div className="relative">
            {/* Map */}
            <div className="mb-8 overflow-hidden shadow-2xl rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="relative p-8 bg-white shadow-2xl rounded-2xl">
              {/* Decorative Triangles */}
              

              <h2 className="mb-8 text-2xl font-bold text-center">
                Contact Info
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-primary/10">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      Gregory Cartwright, 4059 <br />
                      Carling Avenue, Ugglebarnby
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-primary/10">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      <a href="tel:+61086660112" className="hover:text-primary">
                        +6108-666-0112
                      </a>
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-primary/10">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      <a
                        href="mailto:info@example.com"
                        className="hover:text-primary"
                      >
                        info@example.com
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact