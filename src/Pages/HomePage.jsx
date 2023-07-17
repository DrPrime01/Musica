import React from "react";
import Ellipse1 from "../assets/Images/Hero/Ellipse1.png";
import Ellipse2 from "../assets/Images/Hero/Ellipse2.png";
import Ellipse3 from "../assets/Images/Hero/Ellipse3.png";
import Ellipse4 from "../assets/Images/Hero/Ellipse4.png";
import Ellipse5 from "../assets/Images/Hero/Ellipse5.png";
import HeroImage from "../assets/Images/Hero/HeroImage.png";
import HeartIcon from "../assets/Images/Hero/HeartIcon.svg";
import GoldenTunes from "../assets/Images/TopChartsImages/GoldenTunes.png";
import Reggae from "../assets/Images/TopChartsImages/Reggae.png";
import TomorrowTunes from "../assets/Images/TopChartsImages/TomorrowTunes.png";
import Heart from "../assets/Images/TopChartsImages/Heart.svg";
import NR1 from "../assets/Images/TopChartsImages/NR1.png";
import NR2 from "../assets/Images/TopChartsImages/NR2.png";
import NR3 from "../assets/Images/TopChartsImages/NR3.png";
import NR4 from "../assets/Images/TopChartsImages/NR4.png";
import NR5 from "../assets/Images/TopChartsImages/NR5.png";
import NR6 from "../assets/Images/TopChartsImages/NR6.png";
import NR7 from "../assets/Images/TopChartsImages/NR7.png";

function HomePage() {
  return (
    <div className="flex flex-col grow">
      <div className="flex flex-col sm:flex-row sm:space-x-10">
        <section
          id="hero-section"
          className="bg-[#609EAF] flex-2 rounded-2xl sm:rounded-3xl p-8 pr-16 flex flex-col sm:flex-row sm:justify-between"
        >
          <div className="flex flex-col sm:justify-between sm:w-1/2">
            <div className="mb-64 sm:mb-0">
              <p className="text-sm text-white">Currated playlist</p>
            </div>
            <div className="mb-24 sm:mb-0">
              <p className="font-bold text-2xl text-white">R & B Hits</p>
              <p className="text-sm text-white">
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit, and so much more
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <div className="relative">
                <div className="h-12 w-12 rounded-full z-10 absolute left-0 top-0">
                  <img src={Ellipse1} alt="people" />
                </div>
                <div className="h-12 w-12 rounded-full z-20 absolute left-3 top-0">
                  <img src={Ellipse2} alt="people" />
                </div>
                <div className="h-12 w-12 rounded-full z-30 absolute left-6 top-0">
                  <img src={Ellipse3} alt="people" />
                </div>
                <div className="h-12 w-12 rounded-full z-40 absolute left-9 top-0">
                  <img src={Ellipse4} alt="people" />
                </div>
                <div className="h-12 w-12 rounded-full z-50 absolute left-12 top-0">
                  <img src={Ellipse5} alt="people" />
                </div>
              </div>
              <div className="flex flex-row">
                <img src={HeartIcon} alt="HeartIcon" className="mr-3" />
                <span className="text-lg text-white">33k Likes</span>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <img src={HeroImage} alt="Hero" />
          </div>
        </section>
        <aside
          id="top-charts"
          className="mt-6 sm:mt-0 grow flex-1 items-center"
        >
          <p className="font-bold text-2xl text-[#EFEEE0] mb-3">Top charts</p>
          <div className="">
            <div className="sm:space-y-5 flex sm:flex-col sm:space-x-0 space-x-5 overflow-x-auto">
              <div className="flex-none w-5/6 sm:w-auto">
                <div className="flex flex-row justify-between bg-dark-alt p-6 rounded-3xl">
                  <div className="sm:flex sm:space-x-5">
                    <img src={GoldenTunes} alt="cover image" />
                    <div>
                      <div>
                        <p className="text-white text-base">
                          Golden age of 80s
                        </p>
                        <p className="text-white text-sm opacity-50">
                          Sean swadder
                        </p>
                      </div>
                      <div>
                        <p className="text-white text-base">2:34:45</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Heart} alt="heart icon" />
                  </div>
                </div>
              </div>
              <div className="flex-none w-5/6 sm:w-auto">
                <div className="flex flex-row justify-between bg-dark-alt p-6 rounded-3xl">
                  <div className="sm:flex sm:space-x-5">
                    <img src={Reggae} alt="cover image" />
                    <div>
                      <div>
                        <p className="text-white text-base">Reggae “n” blues</p>
                        <p className="text-white text-sm opacity-50">
                          Dj YK mule
                        </p>
                      </div>
                      <div>
                        <p className="text-white text-base">1:02:42</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Heart} alt="heart icon" />
                  </div>
                </div>
              </div>
              <div className="flex-none w-5/6 sm:w-auto">
                <div className="flex flex-row justify-between bg-dark-alt p-6 rounded-3xl">
                  <div className="sm:flex sm:space-x-5">
                    <img src={TomorrowTunes} alt="cover image" />
                    <div>
                      <div>
                        <p className="text-white text-base">Tomorrow’s tunes</p>
                        <p className="text-white text-sm opacity-50">
                          Obi Datti
                        </p>
                      </div>
                      <div>
                        <p className="text-white text-base">2:01:25</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Heart} alt="heart icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div id="new-releases" className="mt-10 grow">
        <p className="font-bold text-2xl text-[#EFEEE0] mb-3">New Releases</p>
        <div className="w-[23rem] sm:w-auto">
          <div className="flex overflow-x-auto space-x-8">
            <div className="flex-none">
              <div>
                <img
                  src={NR1}
                  alt="new releases"
                  className="rounded-3xl mb-1"
                />
                <p className="text-sm text-white">Life in a bubble</p>
              </div>
            </div>
            <div className="flex-none">
              <div>
                <img
                  src={NR2}
                  alt="new releases"
                  className="rounded-3xl mb-1"
                />
                <p className="text-sm text-white">Mountain</p>
              </div>
            </div>
            <div className="flex-none">
              <div>
                <img
                  src={NR3}
                  alt="new releases"
                  className="rounded-3xl mb-1"
                />
                <p className="text-sm text-white">Limits</p>
              </div>
            </div>
            <div className="flex-none">
              <div>
                <img
                  src={NR4}
                  alt="new releases"
                  className="rounded-3xl mb-1"
                />
                <p className="text-sm text-white">Everything's black</p>
              </div>
            </div>
            <div className="flex-none">
              <div>
                <img
                  src={NR5}
                  alt="new releases"
                  className="rounded-3xl mb-1"
                />
                <p className="text-sm text-white">Cancelled</p>
              </div>
            </div>
            <div className="flex-none">
              <div>
                <img
                  src={NR6}
                  alt="new releases"
                  className="rounded-3xl mb-1"
                />
                <p className="text-sm text-white">Normad</p>
              </div>
            </div>
            <div className="flex-none">
              <div>
                <img
                  src={NR7}
                  alt="new releases"
                  className="rounded-3xl mb-1"
                />
                <p className="text-sm text-white">Blind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
