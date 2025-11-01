import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import { CiCoffeeCup } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-0 border-solid border-dark
    font-base text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-center lg:flex-col lg:py-6">
  <span>&copy; {new Date().getFullYear()}</span>

  <div className="flex items-center justify-center gap-2 ml-2 lg:ml-0 lg:mt-2">
    Powered by Clean <FaCode className="mx-1" /> and <CiCoffeeCup className="mx-1" />
  </div>
</Layout>

    </footer>
  );
};

export default Footer;
