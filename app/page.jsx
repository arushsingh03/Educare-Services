import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi" 

const Home = () => {
  return (
    <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left">
          <span className="text-xl">Educational Consultants</span>
          <h1 className="h1 mb-6">
            Hello We're<br /><span className="text-accent">Educare Services</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">We are dedicated to provide personalized guidance and support to undergraduates and postgraduates programs such as medical (MBBS, BDS, BAMS, BHMS, & BUMS) and all other branches of engineering, commerce, banking, management and so on. Helping them achieve academic success and reach their full potential. With a team of experienced consultants, we offer expertise in college admissions, and career guidance. Our mission is to empower students through tailored advice, resources, and support, and preparing them for future success. We are committed to professionalism, ethical practices, and continuous improvement to ensure that every student receives the best possible educational consultancy experience.
          </p>
          {/* buttons and socials */}
          <div className="flex flex-col xl:flex-row items center gap-8">
            <Button 
            variant ="ouline" 
            size="lg" 
            className="uppercase flex items-center gap-2"
            >
              <span>Download Brouche</span>
              <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social />
              </div>
          </div>
        </div>
        {/*photo */}
        <div>photo</div>
      </div>
    </div>
    </section>
  );
};

export default Home;