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
    fieldValue: "2+ Years"
  },
  {
    fieldName: "Facebook",
    fieldValue: "Educare//"
  },
  {
    fieldName: "LinkdIn",
    fieldValue: "Educare//"
  },
  {
    fieldName: "Youtube",
    fieldValue: "Educare//"
  },
]
};

const experience = {
  icon: '/',
  title: 'Our Experience',
  description: "We have provided 350+ number of students successfully placed in desired educational institutions like HBTU, MMMUT, AKG, LLOYED, NHMC, and so on regarding following UG and PG programs. We are Partner with educational institutions and organizations.",
  items: [
    {
      colleges: "HBTU, KANPUR",
      programmes: "B-Tech, MCA",
      duration: "4-Years, 2-Years", 
    },
    {
      colleges: "GLOCAL UNIVERSITY, SAHARANPUR",
      programmes: "BAMS",
      duration: "5-Years", 
    },
    {
      colleges: "CS AYURVEDA MEDICAL COLLEGE, ETAH",
      programmes: "BAMS",
      duration: "5-Years", 
    },
    {
      colleges: "Dr. VIJAY AYURVEDA MEDICAL COLLEGE, VARANASHI",
      programmes: "BAMS",
      duration: "5-Years", 
    },
    {
      colleges: "MD AYURVEDA MEDICAL COLLEGE, AGRA",
      programmes: "BAMS",
      duration: "5-Years", 
    },
    {
      colleges: "450+ more Colleges for your desired programmes and secure future",
      programmes: "",
      duration: "", 
    },
  ]
};

const education = {
  icon: "/",
  title: "Our Courses",
  description: "We are dedicated to providing personalized guidance and support to under-graduates and post-graduates programs such as medical (MBBS, BDS, BAMS, BHMS, & BUMS) and all other branches of engineering, commerce, banking, management and so on",
  items: [
    {
      college: "HBTU, KANPUR",
      courses: "B-Tech, MCA", 
      duration: "4-Years, 2-Years",
    },
    {
      college: "GLOCAL UNIVERSITY, SAHARANPUR",
      courses: "BAMS",
      duration: "5-Years", 
    },
    {
      college: "CS AYURVEDA MEDICAL COLLEGE, ETAH",
      courses: "BAMS",
      duration: "5-Years", 
    },
    {
      college: "Dr. VIJAY AYURVEDA MEDICAL COLLEGE, VARANASHI",
      courses: "BAMS",
      duration: "5-Years", 
    },
    {
      college: "MD AYURVEDA MEDICAL COLLEGE, AGRA",
      courses: "BAMS",
      duration: "5-Years", 
    },
    {
      college: "VGI, NOIDA",
      courses: "BBA, MBA, BCA etc",
      duration: "3-Years, 2-Years, 3-Years,", 
    },
    {
      college: "450+ more Colleges for your desired programmes and secure future",
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

import 
{ 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger,
 } from "@/components/ui/tooltip";

 import { ScrollArea } from "@/components/ui/scroll-area";
 import { motion } from "framer-motion";

 
const Brouche = () => {
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

        {/* content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
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
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
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
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
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

export default Brouche;