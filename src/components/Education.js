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
            className="capitalize text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            <br></br>{company}
          </a>
        </h3>
        <span className="capitalize text-light/50 font-medium xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Advanced Level Certificate of Education (A/L)"
            company="Vidyartha College Kandy"
            time="2018 - 2021"
            work="I gained a strong foundation in software engineering, networking, and mobile technologies. I developed both technical and analytical skills necessary for designing and implementing large-scale systems, along with hands-on experience through practical training and projects."
          />
 
          <Details
            position="BSc. Honours Degree in Computing & Information Systems"
            company="Sabaragamuwa University of Sri Lanka"
            time="2023 - Current"
            work="I gained a strong foundation in software engineering, networking, and mobile technologies. I developed both technical and analytical skills necessary for designing and implementing large-scale systems, along with hands-on experience through practical training and projects."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
                href="/projects/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        
      </div>
    </div>
  );
};

export default Education;
