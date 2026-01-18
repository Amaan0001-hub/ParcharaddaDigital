const Team = () => {
  const features = [
    '30-day money back guarantee',
    'Web site Marketing Solutions',
    'Unlimited Application',
    '24/7 system Monitoring'
  ]

  return (
    <section className="section-padding">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative flex justify-center">
            <img
              src="/img/team-new.png"
              alt="Team"
              className="animate-img-custom-anim-left"
            />
            <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
              <img src="/img/shape-img.png" alt="" className="" />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-block px-4 rounded-3xl bg-primary/10 py-2">
              <span className="font-semibold text-capitalize bg-gredient">
                OUR EXPERT TEAM
              </span>
            </div>
            <h2 className="mt-4 capitalize mb-6 text-4xl font-extrabold text-zinc-950 lg:text-5xl">
              Let's make something awesome together
            </h2>

            <p className="mb-8 text-gray-600">
              Every pleasure is to be welcomed and every pain avoided. certain
              circumstances and owing to the claims welcomed and every pain
              avoided certain circumstances
            </p>

            {/* Features List */}
            <div className="grid gap-6 mb-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 mt-1 text-primary"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <a href="/team" className="inline-flex items-center theme-btn">
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

export default Team