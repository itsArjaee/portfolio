import Image from "next/image";
import ParticleContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ParticlesContainer from "../components/ParticlesContainer";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black-10">
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto"
        >
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Bringing Ideas to Life
            <br /> Into <span className="text-accent"> Through Code</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I design and develop innovative, scalable, and user-centric
            solutions that bridge ideas with reality. With a strong focus on
            performance, efficiency, and seamless user experiences, I transform
            concepts into high-quality digital products that drive impact and
            success. My approach combines strategic thinking, precision, and a
            commitment to excellence in every project.
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat 
        w-full h-full absolute mix-blend-color-dodge translate-z-0 "
        ></div>
        <ParticlesContainer />
        <div className="w-full h-full max-w-[537px] max-h-[337px] absolute  lg:right-[250px]">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Home;
