// app/service-details/page.tsx

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

export default function ServiceDetailsPage() {
  return (
    <div>
      <Header />
      <Aboutbanner />
      <div className="container px-4 mx-auto">
        <img className="rounded" src="/img/details-1.jpg" />
      </div>
      <div className="container px-4 mx-auto">
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-4 col-12">
            <div className="sticky top-[100px]">
              <div className="bg-[#f6f3fe] mb-[30px] px-[30px] py-[40px] rounded-[10px]">
                <div className="after-before-heading relative text-lg font-semibold text-zinc-950 mb-6">
                  All Services
                </div>
                <div className="sercvices-widgets">
                  <ul>
                    <li className="flex bg-white hover:bg[#6a47ed] items-center justify-between mb-4 px-[25px] py-[22px] bg-white font-medium text-base leading-none rounded-none transition-all duration-[400ms] ease-in-out">
                      <span className="text-[#17012c]">Web Development</span>
                      <FaArrowRight className="inline-block mr-3" />
                    </li>
                    <li className="flex bg-white hover:bg[#6a47ed] items-center justify-between mb-4 px-[25px] py-[22px] bg-white font-medium text-base leading-none rounded-none transition-all duration-[400ms] ease-in-out">
                      <span className="text-[#17012c]">Web Development</span>
                      <FaArrowRight className="inline-block mr-3" />
                    </li>
                    <li className="flex bg-white hover:bg[#6a47ed] items-center justify-between mb-4 px-[25px] py-[22px] bg-white font-medium text-base leading-none rounded-none transition-all duration-[400ms] ease-in-out">
                      <span className="text-[#17012c]">Web Development</span>
                      <FaArrowRight className="inline-block mr-3" />
                    </li>
                    <li className="flex bg-white hover:bg[#6a47ed] items-center justify-between mb-4 px-[25px] py-[22px] bg-white font-medium text-base leading-none rounded-none transition-all duration-[400ms] ease-in-out">
                      <span className="text-[#17012c]">Web Development</span>
                      <FaArrowRight className="inline-block mr-3" />
                    </li>
                    <li className="flex bg-white hover:bg[#6a47ed] items-center justify-between mb-4 px-[25px] py-[22px] bg-white font-medium text-base leading-none rounded-none transition-all duration-[400ms] ease-in-out">
                      <span className="text-[#17012c]">Web Development</span>
                      <FaArrowRight className="inline-block mr-3" />
                    </li>
                  </ul>
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
