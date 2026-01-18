'use client'

const Footer = () => {
  const quickLinks = [
    { title: 'Digtek About', href: '/about' },
    { title: 'Our Services', href: '/service' },
    { title: 'Our Blogs', href: '/blog' },
    { title: 'FAQ\'S', href: '/faq' },
    { title: 'Contact Us', href: '/contact' }
  ]

  const recentPosts = [
    {
      title: 'Top 5 Most Famous Technology Trend In 2024',
      date: '20 Feb, 2024',
      image: '/img/pp1.jpg',
      href: '/blog/blog-details'
    },
    {
      title: 'The Surfing Man Will Blow Your Mind',
      date: '15 Dec, 2024',
      image: '/img/pp2.jpg',
      href: '/blog/blog-details'
    }
  ]

  return (
    <footer className="text-white bg-[#18185e]">
      {/* Main Footer */}
      <div className="container px-4 py-20 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div>
            <a href="/" className="inline-block mb-6">
              <img src="/img/PA.png" alt="Digtek" className="w-[150]" />
            </a>
            <p className="mb-6 text-gray-400">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "youtube", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-colors bg-transparent border border-white rounded hover:bg-primary"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social === "facebook" && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    )}
                    {social === "twitter" && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    )}
                    {social === "youtube" && (
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    )}
                    {social === "linkedin" && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative inline-block mb-6 text-xl font-bold text-white after-before-foot">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
                  >
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="relative inline-block mb-6 text-xl font-bold text-white after-before-foot">
              Recent Posts
            </h3>
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <div key={post.title} className="flex gap-4 group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-20 h-20 transition-transform rounded-lg group-hover:scale-105"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
                      {post.date}
                    </div>
                    <a
                      href={post.href}
                      className="text-sm font-semibold leading-tight transition-colors group-hover:text-primary"
                    >
                      {post.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="relative inline-block mb-6 text-xl font-bold text-white after-before-foot">
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                  </svg>
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-400 hover:text-white"
                  >
                    info@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                  </svg>
                  <a
                    href="tel:2086660112"
                    className="text-gray-400 hover:text-white"
                  >
                    +208-666-0112
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <div className="relative mb-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-4 text-black bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="absolute p-2 text-white rounded right-3 top-2 bg-primary hover:text-primary hover:bg-white">
                    <svg
                      className="w-5 h-5"
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
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="privacy" className="w-4 h-4" />
                  <label htmlFor="privacy" className="text-sm text-gray-400">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy.
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 bg-primary">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-200">© All Copyright 2024 by Digtek</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-200 transition-colors hover:text-white"
              >
                Terms & Condition
              </a>
              <a
                href="#"
                className="text-gray-200 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed flex items-center justify-center w-12 h-12 text-white transition-all rounded-full shadow-lg bottom-8 right-8 bg-primary hover:bg-opacity-90 scroll-icon"
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
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}

export default Footer