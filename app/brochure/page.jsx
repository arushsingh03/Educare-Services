"use client";


const about = {
  title: "About Us",
  description: "We our Educare Services, We have the ability to provide direction and focus for your goals and aspirations, by providing your a career path that aligns with your interests, values and skills.", 
  info: [
    {
      fieldName: "Phone",
      fieldValue: "(+91 96489 81355)"
    },
    {
      fieldName: "Email",
      fieldValue: "educareservices91@gmail.com"
    },
    {
    fieldName: "Experience",
    fieldValue: "5+ Years"
  },
  {
    fieldName: "Facebook",
    fieldValue: "Educare Services"
  },
  {
    fieldName: "LinkdIn",
    fieldValue: "Educare Services"
  },
  {
    fieldName: "Youtube",
    fieldValue: "Educareservices"
  },
]
};

const experience = {
  icon: '/',
  title: 'Our Experience',
  description: "We have provided 350+ number of students successfully placed in desired educational institutions like HBTU, MMMUT, AKG, LLOYED, NHMC, and so on regarding following UG and PG programs. We are Partner with educational institutions and organizations.",
  items: [
    {
      colleges: "MEDICAL",
      programmes: "MBBS, BUMS, BAMS, BHMS, BDS, BSc Nursing, etc.",
      duration: "", 
    },
    {
      colleges: "ENGINEERING",
      programmes: "B-Tech All Branches, M-tech All Branches, BCA, MCA etc",
      duration: "", 
    },
    {
      colleges: "MANAGEMENT",
      programmes: "BBA, MBA, BHM, BBM, BMS, etc",
      duration: "", 
    },
    {
      colleges: "ARTS & DESIGNING",
      programmes: "BA, MA, B-Des, BFA, including other diploma courses.",
      duration: "", 
    },
    {
      colleges: "COMMERCE & FINANCE",
      programmes: "B.Com, M.Com, BE, B.Econ, BFIA etc",
      duration: "", 
    },
    {
      colleges: "100+ more courses of your desired requirement and choices which will lead towards your best future growth.",
      programmes: "",
      duration: "", 
    },
  ]
};

const education = {
  icon: "/",
  title: "Our Courses",
  description: "Our specility in providing personalized guidance and support to under-graduates and post-graduates programs such as medical (MBBS, BDS, BAMS, BHMS, & BUMS) and all other branches of engineering, commerce, banking, management and so on.",
  items: [
    {
      college: "MEDICAL",
      courses: "MBBS, BUMS, BAMS, BHMS, BDS, BSc Nursing, etc.", 
      duration: "",
    },
    {
      college: "ENGINEERING",
      courses: "B-Tech All Branches, M-tech All Branches, BCA, MCA etc ",
      duration: "", 
    },
    {
      college: "MANAGEMENT",
      courses: "BBA, MBA, BHM, BBM, BMS, etc",
      duration: "", 
    },
    {
      college: "ARTS & DESIGNING",
      courses: "BA, MA, B-Des, BFA, including other diploma courses.",
      duration: "", 
    },
    {
      college: "COMMERCE & FINANCE",
      courses: "B.Com, M.Com, BE, B.Econ, BFIA etc",
      duration: "", 
    },
    {
      college: "100+ more courses of your desired requirement and choices which will lead towards your best future growth.",
      courses: "",
      duration: "", 
    },
  ]
};

import 
{ 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
 import { ScrollArea } from "@/components/ui/scroll-area";
 import { motion } from "framer-motion";

 
const Brochure = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
  }}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" 
  >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education" >Education</TabsTrigger>
          <TabsTrigger value="about">About Us</TabsTrigger>
        </TabsList>

        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index)=> {
                    return(
                      <li key={index} className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <h3>{item.colleges}</h3>
                        <span className="text-accent">{item.programmes}</span>
                        <div className="flex items-center gap-3">
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
            </TabsContent>

            {/* education */} 
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index)=> {
                    return(
                      <li key={index} className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <h3>{item.college}</h3>
                        <span className="text-accent">{item.courses}</span>
                        <div className="flex items-center gap-3">
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return(
                      <li 
                      key={index} 
                      className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
        </div>
      </Tabs>
    </div>
    </motion.div>
  );
};

export default Brochure;