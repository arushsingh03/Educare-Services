"use client";

import { motion } from "framer-motion";
import Image from "next/image";



const Photo = () => {
  return (
    <div className="w-full h-fulll relative">
        <motion.div>
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
                <Image 
                src="/logo.png" 
                priority 
                quality={100} 
                fill 
                alt="" 
                className="object-contain" 
                />
            </div>
        </motion.div>
    </div>
  );
};

export default Photo;