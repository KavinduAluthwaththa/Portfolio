import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import { DevIcon } from "@/components/Icons";

import proj1 from "/public/images/projects/babycare.png";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="projects/capstone"
        ></link>
        <title>
          Capstone Project
        </title>
        <meta
          name="description"
          content="Capstone Project - Smart Agriculture App"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Capstone Project"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Capstone Project - Smart Agriculture App
              </h2>
              <h3 className="mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark">
                .Net | C# | Flutter | Dart | PostgreSQL
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="">
                A comprehensive Flutter-based mobile application that connects farmers 
                with agricultural shops and provides AI-powered farming assistance. 
                This platform serves as a bridge between farmers and shop owners while offering intelligent agricultural solutions.
              </p>
              <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                Empowering farmers, connecting communities, and cultivating smarter agriculture.
              </h4>
              <p className="my-4">
                For shop owners, the platform offers a powerful digital presence with tools to manage inventory, 
                process orders, and engage directly with farmers. Through integrated analytics, real-time chat, and profile management, 
                shop owners gain valuable insights into business performance and customer relationships. With secure authentication, 
                dynamic theming, and AI-driven support, this app stands as a comprehensive,
                 future-ready solution that bridges the gap between technology and agriculture.
              </p>

              <div className="mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
                  className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="ttps://github.com/KavinduAluthwaththa/Capstone-Project-Frontend"
                  target={"_blank"}
                >
                  Frontend Repo
                </Link>
                <Link
                  className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="ttps://github.com/KavinduAluthwaththa/Capstone-Project-Backend"
                  target={"_blank"}
                >
                  Backend Repo
                </Link>
              </div>
            </div>
            <div
              className="relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={proj1}
                alt="Clay Gatsby Theme"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
