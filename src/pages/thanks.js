import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Thanks = () => {
  return (
    <>
      <Head>
        <title>Thank You!</title>
      </Head>
      <TransitionEffect />
      <main className="h-[100vh] w-full bg-dark ">
        <Layout className="relative !bg-transparent !pt-16 flex flex-col items-center justify-center">
          <AnimatedText text="Thank You!" className=" " />
          <AnimatedText text="Your message has been sent." className=" !text-5xl " />
          <Link
            href="/"
            className="self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-light px-4 py-2 font-semibold text-dark hover:border-light hover:bg-dark hover:text-light"
          >
            Go To Home
          </Link>
        </Layout>
      </main>
    </>
  );
};

export default Thanks;
