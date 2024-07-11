"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const students = [
  {
    name: `Ribhu Chakraborty`,
    img: `/students/s1.png`,
    course: `MBA`,
    college: `Narayana Business School, Ahmedabad`,
  },
  {
    name: `Akshat Vashishth`,
    img: `/students/s2.png`,
    course: `MBA`,
    college: `BITS Pilani, Rajasthan`,
  },
  {
    name: `Aryan Shukla`,
    img: `/students/s3.png`,
    course: `MBBS`,
    college: `GSVM, Kanpur`,
  },
  {
    name: `Vaani Gupta`,
    img: `/students/s4.png`,
    course: `MBBS`,
    college: `GSVM, Kanpur`,
  },
  {
    name: `Anushka Nigam`,
    img: `/students/s5.png`,
    course: `BAMS`,
    college: `Gov AMC, Jhansi`,
  },
  {
    name: `Shreya Gupta`,
    img: `/students/s6.png`,
    course: `B-Tech, CS`,
    college: `NIT, Jalandhar`,
  },
  {
    name: `Love Agarwal`,
    img: `/students/s7.png`,
    course: `BBA`,
    college: `DAMS, Kanpur`,
  },
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const Work = () => {
  return (
    <>
    <>
    <div className="mb-5">
      <h3 className="text-4xl text-center">Our Work</h3>
    </div>
    <div>
        <p className="text-white/60 pl-10 pr-10 text-center">We are dedicated to helping students achieve their academic goals and reach their full potential. Our team of experienced consultants provides personalized guidance and support to students of college. Whether you need help with college admissions, or academic planning, we are here to assist you every step of the way. Our mission is to empower students to succeed in their educational journey and beyond. Contact us today to learn more about how we can help you succeed. We are dedicated to providing personalized guidance and support to undergraduate’s and post graduate's programs such as medical (MBBS, BDS, BAMS, BHMS, & BUMS) and all other branches of engineering, commerce, banking, management and so on. Helping them achieve academic success and reach their full potential. With a team of experienced consultants, we offer expertise in college admissions, and career guidance. Our mission is to empower students through tailored advice, resources, and support, and preparing them for future success. We are committed to professionalism, ethical practices, and continuous improvement to ensure that every student receives the best possible educational consultancy experience.</p>
      </div>
      </>
      <div className="mt-5 mb-5">
        <h3 className="text-4xl text-center">Our Students</h3>
        </div>
        <div className="w-3/4 m-auto">
          <div>
          <Slider {...settings}>
            {students.map((student) =>(
              <div className="h-[450px] text-white/60 rounded-xl">
                <div className="h-70 rounded-t-xl flex justify-center items-center">
                  <img src={student.img} alt="" className="h-60 w-60 rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p>{student.name}</p>
                <p>{student.course}</p>
                <p className="text-center">{student.college}</p>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </>
  );
};

export default Work;