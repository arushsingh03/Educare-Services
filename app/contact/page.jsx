"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue,
  } from "@/components/ui/select";

  import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "+91 96489 81355",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "educareservices91@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: "Kanpur, India",
    },
  ]

  import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ohszx6s', 'template_u0x6w5e', form.current, {
        publicKey: 'wyljFCIndHb0_bwOm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <motion.section 
    initial={{ opacity: 0 }} 
    animate={{ 
      opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" ref={form} onSubmit={sendEmail}>
              <h3 className="text-4xl text-accent">Let's find your desired academic course</h3>
              <p className="text-white/60">We are here to provide tailored educational guidance and support to students, helping them navigate academic challenges, set and achieve goals, and unlock their full potential. We aim to empower students with the necessary tools and resources to succeed academically, enhance their learning experience, and build a strong foundation for their future endeavors. Through personalized consultations, mentorship, and strategic planning, we strive to inspire and guide students towards academic excellence and personal growth.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="Firstname" placeholder="Firstname" />
                <Input type="lastname" name="Lastname" placeholder="Lastname" />
                <Input type="email"  name="Email address" placeholder="Email address" />
                <Input type="phone" name="Phone number" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your field"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select your field</SelectLabel>
                    <SelectItem value="med">Medical</SelectItem>
                    <SelectItem value="eng">Engineering</SelectItem>
                    <SelectItem value="cnf">Commerce & Finance</SelectItem>
                    <SelectItem value="and">Arts & Designing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea name="Type your query here" className="h-[200px]" placeholder="Type your query here."/>
              <Button size="md" className="max-w-40">Send Query</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
            </div>
        </div>
      </div>
      </motion.section>
  );
};

export default Contact;