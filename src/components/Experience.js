import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            <br></br>@{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

      <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
          position="Freelance Graphic Designer"
          company="Fiverr"
          time="Aug 2021 - Present"
          companyLink="https://www.fiverr.com/"
          work="As a freelance graphic designer on Fiverr, I collaborate with global clients to craft visually striking and brand-focused designs. My work spans across logo creation, brand identity, web and mobile UI design, and marketing materials. Each project begins with understanding the client’s vision, followed by transforming ideas into clean, creative, and functional visuals. Over the years, I’ve completed 200+ successful projects with consistent 5-star ratings, building long-term partnerships based on creativity, communication, and trust. My design philosophy: simplicity, impact, and purpose in every pixel."
        />

        <Details
          position="Full-Stack Developer"
          company="Viosu"
          time="Oct 2024 - Present"
          companyLink="https://viosu.com/"
          work="At Viosu, I contributed as a Full-Stack Developer, working on both front-end and back-end technologies to deliver seamless web applications. My responsibilities included developing user-friendly interfaces, optimizing application performance, and collaborating with cross-functional teams to define and implement new features. This role allowed me to enhance my technical skills and gain valuable experience in full-stack development."
        />

        <Details
          position="Graphic Designer"
          company="Ravuma"
          time="Aug 2025 - Nov 2025"
          companyLink="https://ravuma.com/"
          work="At Ravuma, I contributed as a Graphic Designer within a fast-paced creative environment, developing visual assets for digital campaigns, product branding, and social media marketing. I collaborated closely with marketing and product teams to ensure cohesive brand communication across platforms. My role also involved experimenting with motion graphics and UI mockups to enhance user engagement. This short-term contract allowed me to refine my visual storytelling skills and explore the intersection between creativity and digital experience design."
        />
      </ul>

      </div>
    </div>
  );
};

export default Experience;
