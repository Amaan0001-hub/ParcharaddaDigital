'use client'

import { useState } from 'react'

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('monthly')

  const monthlyPlans = [
    {
      name: 'Premium Plans',
      price: '18K Rs',
      period: '/ Month',
      features: [
        '100 GB SSD Storage',
        'Weekly Backups',
        'Unlimited Free SSL',
        '24/7 system Monitoring',
        'Free Domain ($9.99 value)',
        'Dedicated IP Address',
        '20+ Payment Methods'
      ],
      icon: '/img/cloud.png',
      highlighted: false
    },
    {
      name: 'Extended Plan',
      price: '30K Rs',
      period: '/ Month',
      features: [
        '100 GB SSD Storage',
        'Weekly Backups',
        'Unlimited Free SSL',
        '24/7 system Monitoring',
        'Free Domain ($9.99 value)',
        'Dedicated IP Address',
        '20+ Payment Methods'
      ],
      icon: '/img/cloud.png',
      highlighted: true
    }
  ]

  const yearlyPlans = [
    {
      name: 'Premium Plans',
      price: '$299',
      period: '/ Month',
      features: [
        '100 GB SSD Storage',
        'Weekly Backups',
        'Unlimited Free SSL',
        '24/7 system Monitoring',
        'Free Domain ($9.99 value)',
        'Dedicated IP Address',
        '20+ Payment Methods'
      ],
      icon: '/assets/img/cloud.png',
      highlighted: false
    },
    {
      name: 'Extended Plan',
      price: '$349',
      period: '/ Month',
      features: [
        '100 GB SSD Storage',
        'Weekly Backups',
        'Unlimited Free SSL',
        '24/7 system Monitoring',
        'Free Domain ($9.99 value)',
        'Dedicated IP Address',
        '20+ Payment Methods'
      ],
      icon: '/img/cloud.png',
      highlighted: true
    }
  ]

  const plans = activeTab === 'monthly' ? monthlyPlans : yearlyPlans

  return (
    <section className="relative overflow-hidden section-padding bg-[#f6f3fe]">
      {/* Background Shapes */}
      <img
        src="/assets/img/pricing-left.png"
        alt=""
        className="absolute left-0 top-1/4 animate-float-bob-y -z-10"
      />
      <img
        src="/assets/img/pricing-right.png"
        alt=""
        className="absolute right-0 bottom-1/4 animate-float-bob-y -z-10"
      />

      <div className="container px-4 mx-auto">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 rounded-3xl bg-primary/10">
              <span className="font-semibold text-capitalize bg-gredient">
                OUR PRICNG PLAN
              </span>
            </div>
            <h2 className="mt-4 mb-8 text-4xl font-bold lg:text-5xl">
              Our awesome <br />
              Pricing Plan
            </h2>

            {/* Tab Switcher */}
            <div className="relative inline-block">
              <div className="absolute top-6 rotate-[30deg] -right-8">
                <img src="/img/arrow.png" alt="Arrow" className="" />
              </div>

              <div className="flex items-center p-1 bg-white rounded-full">
                <button
                  onClick={() => setActiveTab("monthly")}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeTab === "monthly"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setActiveTab("yearly")}
                  className={`px-6 py-3 rounded-full font-semibold transition-all relative ${
                    activeTab === "yearly"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  Yearly
                </button>
              </div>
              <div className="ms-[80%] whitespace-nowrap mt-10 text-primary font-semibold">
                Save 25%
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="lg:col-span-2">
            <div className="grid gap-8 md:grid-cols-2">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white pt-10 px-8 pb-10 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                    plan.highlighted ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {/* Header */}
                  <div
                    className={`p-8 rounded-md ${
                      plan.highlighted
                        ? "bg-primary text-white"
                        : "bg-[#17012c]"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="mb-2 text-xl font-bold text-white">
                          {plan.name}
                        </h4>
                        <h2 className="text-5xl font-bold text-white">
                          {plan.price}
                          <sub className="text-lg font-normal">
                            {plan.period}
                          </sub>
                        </h2>
                      </div>
                      <img src={plan.icon} alt="Cloud" className="h-12" />
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-5">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-between"
                        >
                          <span className="flex items-center gap-3">
                            <svg
                              className="w-5 h-5 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </span>
                          <button className="text-gray-400 hover:text-primary">
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
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      className={`w-full mt-8 py-4 rounded-xl font-semibold transition-all ${
                        plan.highlighted
                          ? "border-primary text-primary hover:bg-primary hover:text-white border-2"
                          : "bg-[#17012c] text-white border-[#17012c] border-2 hover:bg-transparent hover:text-gray-900"
                      }`}
                    >
                      Get Started Now
                      <svg
                        className="inline w-5 h-5 ml-2"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing