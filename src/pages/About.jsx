import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              The CodeX is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
        </div>
      </section>

      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">  
            <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
              <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                  Our Founding Story
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                  Our e-learning platform was born out of a shared vision and
                  passion for transforming education. It all began with a group of
                  educators, technologists, and lifelong learners who recognized
                  the need for accessible, flexible, and high-quality learning
                  opportunities in a rapidly evolving digital world.
                </p>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                  As experienced educators ourselves, we witnessed firsthand the
                  limitations and challenges of traditional education systems. We
                  believed that education should not be confined to the walls of a
                  classroom or restricted by geographical boundaries. We
                  envisioned a platform that could bridge these gaps and empower
                  individuals from all walks of life to unlock their full
                  potential.
                </p>
              </div>

              <div>
                <img
                  src={FoundingStory}
                  alt=""
                  className="shadow-[0_0_20px_0] shadow-[#FC6767]"
                />
              </div>
            </div>
          </div>

      
      <div className="bg-gray-100 flex flex-col justify-center items-center min-h-screen gap-3 p-2">
        
        <div className="flex flex-col">
            <div class=" py-16 text-center">
              <p class="text-4xl text-pink-50 font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-400 to-teal-300  hover:ring-8 hover:text-brown-300 hover:text-5xl transition-all duration-100">
                Highlights, After Buying Our Courses!
              </p>
              
              <p class="text-lg font-medium text-gray-300 tracking-wide leading-relaxed shadow-sm  ring-4 ring-blue-500/50 hover:ring-8 hover:ring-blue-100 text-yellow-5 transition-all duration-100">
                Grab your Achievements, Improve your Skills  and Aspirations that define & make easier your journey.
              </p>
            </div>
        </div>

        {/* Responsive Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-2">
          {/* Card 1 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={BannerImage1} alt="" className="w-full h-[300px] object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-xl md:text-2xl font-bold text-center">
                Certificate of Completion
              </h2>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={BannerImage2} alt="" className="w-full h-[300px] object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-xl md:text-2xl font-bold text-center">
                Resume
              </h2>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={BannerImage3} alt="" className="w-full h-[300px] object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-xl md:text-2xl font-bold text-center">
                Mission and Vision
              </h2>
            </div>
          </div>
        </div>
    </div>
      


      <section className="border-b border-richblack-700 -translate-y-20">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default About
