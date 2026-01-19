import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 Page </title>
      </Head>
      <main className="h-[100vh] w-full bg-dark ">
        <Layout className="relative !bg-transparent !pt-16 flex flex-col items-center justify-center">
          <AnimatedText text="404" className="text-white " />
          <AnimatedText text="Page Not Found." className=" !text-7xl text-white" />
          <Link
            href="/"
            className="self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-light px-4 py-2
        font-semibold text-dark hover:border-light hover:bg-dark hover:text-light"
          >
            Go To Home
          </Link>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
