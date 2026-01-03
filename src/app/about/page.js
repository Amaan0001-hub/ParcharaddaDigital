import Header from "../components/Header";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Aboutbanner from "../components/Aboutinternal";
import About from "../components/AboutSec2"; 
import Testimonials from "../components/Testimonials";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Aboutbanner />
        <About />
        <div className="relative section-padding bg-[#f6f3fe] section-3-bg-about">
          <div className="container px-4 mx-auto">
            <div className="px-[90px] flex justify-between items-center relative z-10">
              <div>
                <div className="inline-block font-semibold text-white px-5 rounded-full py-2 text-base bg-[#f6f3fe1a]">
                  Counter
                </div>
                <div className="text-white mt-8 text-5xl capitalize font-bold ">
                  Make your marketing <br /> more effective
                </div>
              </div>
              <div className="flex items-center justify-center text-center gap-[50px]">
                <div className="relative">
                  <div className="text-white text-3xl font-extrabold">
                    19.4K
                  </div>
                  <p className="text-[20px] mt-[10px] text-white ps-4">
                    <i>
                      Projects <br /> Completed
                    </i>
                  </p>
                </div>
                <div className="relative">
                  <div className="text-white text-3xl font-extrabold">
                    95.2K
                  </div>
                  <p className="text-[20px] mt-[10px] text-white ps-4">
                    <i>
                      Happy <br /> Clients
                    </i>
                  </p>
                </div>
                <div className="relative">
                  <div className="text-white text-3xl font-extrabold">
                    142.6K
                  </div>
                  <p className="text-[20px] mt-[10px] text-white ps-4">
                    <i>
                      Team <br /> Members
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 relative px-16">
              <img src="/img/cta-video.jpg" className="rounded-xl" />
            </div>
            <div className="mt-10">
              <p className="text-center capitalize text-4xl font-bold">
                Our values
              </p>
              <div className="grid gap-8 lg:grid-cols-4 mt-10">
                <div className="p-6 bg-white rounded-2xl">
                  <div className="text-xl font-bold ">Integrity</div>
                  <div className="mt-4 text-gray-600">
                    We uphold the highest standards of integrity in all of our
                    actions.
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl">
                  <div className="text-xl font-bold ">Simplicity</div>
                  <div className="mt-4 text-gray-600">
                    We uphold the highest standards of integrity in all of our
                    actions.
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl">
                  <div className="text-xl font-bold ">Performance</div>
                  <div className="mt-4 text-gray-600">
                    We uphold the highest standards of integrity in all of our
                    actions.
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl">
                  <div className="text-xl font-bold ">Integrity</div>
                  <div className="mt-4 text-gray-600">
                    We uphold the highest standards of integrity in all of our
                    actions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}