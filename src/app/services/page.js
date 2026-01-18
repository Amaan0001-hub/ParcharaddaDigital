// app/services/page.tsx

import {
  FaChartLine,
  FaEnvelope,
  FaSearch,
  FaHashtag,
  FaUsers,
  FaBullseye,
  FaArrowRight,
} from "react-icons/fa";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Aboutbanner from "../components/Aboutinternal";

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <Aboutbanner />
      <div className="py-20 bg-white">
        <div className="container px-4 mx-auto mb-12">
          {/* Services Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-3 px-4 py-8 transition-shadow duration-300 bg-white border shadow rounded-2xl hover:shadow-xl group">
              <div className="mb-6">
                <img
                  src="/img/icon-1.png"
                  alt="Digital Marketing"
                  className="w-auto h-[80px] object-contain"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-primary">
                  <a href="#">Digital Marketing</a>
                </h3>
                <p className="mb-6 text-gray-600">
                  Lorem dolor amet consectetur read adipiscing any more elit.
                </p>
                <a
                  href="#"
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
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-3 px-4 py-8 transition-shadow duration-300 bg-white border shadow rounded-2xl hover:shadow-xl group">
              <div className="mb-6">
                <img
                  src="/img/icon-2.png"
                  alt="Digital Marketing"
                  className="w-auto h-[80px] object-contain"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-primary">
                  <a href="#">SEO Analytics</a>
                </h3>
                <p className="mb-6 text-gray-600">
                  Lorem dolor amet consectetur read adipiscing any more elit.
                </p>
                <a
                  href="#"
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
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-3 px-4 py-8 transition-shadow duration-300 bg-white border shadow rounded-2xl hover:shadow-xl group">
              <div className="mb-6">
                <img
                  src="/img/icon-3.png"
                  alt="Digital Marketing"
                  className="w-auto h-[80px] object-contain"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-primary">
                  <a href="#">Social Marketing</a>
                </h3>
                <p className="mb-6 text-gray-600">
                  Lorem dolor amet consectetur read adipiscing any more elit.
                </p>
                <a
                  href="#"
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
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-3 px-4 py-8 transition-shadow duration-300 bg-white border shadow rounded-2xl hover:shadow-xl group">
              <div className="mb-6">
                <img
                  src="/img/icon-4.png"
                  alt="Digital Marketing"
                  className="w-auto h-[80px] object-contain"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-primary">
                  <a href="#">Digital Marketing</a>
                </h3>
                <p className="mb-6 text-gray-600">
                  Lorem dolor amet consectetur read adipiscing any more elit.
                </p>
                <a
                  href="#"
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
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-3 px-4 py-8 transition-shadow duration-300 bg-white border shadow rounded-2xl hover:shadow-xl group">
              <div className="mb-6">
                <img
                  src="/img/icon-5.png"
                  alt="Digital Marketing"
                  className="w-auto h-[80px] object-contain"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-primary">
                  <a href="#">SEO Analytics</a>
                </h3>
                <p className="mb-6 text-gray-600">
                  Lorem dolor amet consectetur read adipiscing any more elit.
                </p>
                <a
                  href="#"
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
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-3 px-4 py-8 transition-shadow duration-300 bg-white border shadow rounded-2xl hover:shadow-xl group">
              <div className="mb-6">
                <img
                  src="/img/icon-6.png"
                  alt="Digital Marketing"
                  className="w-auto h-[80px] object-contain"
                />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-primary">
                  <a href="#">Social Marketing</a>
                </h3>
                <p className="mb-6 text-gray-600">
                  Lorem dolor amet consectetur read adipiscing any more elit.
                </p>
                <a
                  href="#"
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
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 background-new-service">
        <div className="container px-4 mx-auto">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="relative col-span-1">
              <div className="flex items-center p-10 gap-[30px] rounded-2xl bg-[#9578ff33]">
                <div className="rounded-[10px] bg-white max-w-[295px] p-[30px]">
                  <div className="text-[40px] font-semibold mb-[110px]">
                    500+
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Total Project</h3>
                  <p>Lorem dolor amet consectetur adipiscing any more elit.</p>
                </div>
                <img
                  src="/img/gap-shape.png"
                  alt="Service About"
                  className="rounded"
                />
              </div>
            </div>
            <div className="col-span-1 lg:ps-16">
              <div className="inline-block px-4 py-2 rounded-3xl bg-primary/10">
                <span className="font-semibold capitalize bg-gredient">
                  Best SEO results
                </span>
              </div>
              <h2 className="mt-4 mb-6 text-4xl font-extrabold capitalize text-zinc-950 lg:text-5xl">
                Let’s make something awesome together
              </h2>

              <p className="mb-8 text-gray-600">
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at layout the point
                established fact that
              </p>
              {/* Progress Bars */}
              <div className="grid gap-6 mb-8 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 mt-1 text-primary"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" />
                  </svg>
                  <span className="font-semibold text-gray-900">
                    30-day money back guarantee
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 mt-1 text-primary"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" />
                  </svg>
                  <span className="font-semibold text-gray-900">
                    30-day money back guarantee
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 mt-1 text-primary"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" />
                  </svg>
                  <span className="font-semibold text-gray-900">
                    30-day money back guarantee
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 mt-1 text-primary"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" />
                  </svg>
                  <span className="font-semibold text-gray-900">
                    30-day money back guarantee
                  </span>
                </div>
              </div>
              <a
                href="/about"
                className="inline-flex items-center font-medium theme-btn"
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
      </div>
      <Pricing />
      <div className="py-20 testimonial-bg">
        <div className="container px-4 mx-auto">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="col-span-1">
              <div className="relative z-10 flex justify-center text-center testimonial-image">
                <img src="/img/03.png" className="text-center" />
                <div className="rocket-shape absolute top-[12%] left-[15%] animate-float-bob-y">
                  <img src="/img/rocket.png" className="text-center" />
                </div>
                <div className="rocket-shape absolute top-[12%] right-[15%] animate-float-bob-y">
                  <img src="/img/msg.png" className="text-center" />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="inline-block px-4 py-2 rounded-3xl bg-primary/10">
                <span className="font-semibold capitalize bg-gredient">
                  Best SEO results
                </span>
              </div>
              <h2 className="mt-4 mb-6 text-4xl font-extrabold capitalize text-zinc-950 lg:text-5xl">
                Let’s make something awesome together
              </h2>
              <div className="relative bg-white rounded-2xl border border-[#DDE0E9] px-[30px] py-[40px] mt-[50px] max-w-[585px]">
                <div className="flex items-center gap-[10px] mb-5">
                  <div className="client-img">
                    <img src="/img/04.png" />
                  </div>
                  <div className="content-client">
                    <h4 className="text-xl font-semibold">Sarah Taylor</h4>
                    <span className="text-sm text-gray-500">CEO at Webecy</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  "There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable."
                </p>
                <div className="absolute right-[30px] top-[40px]">
                  <img src="/img/testi-icon.png" alt="Quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
