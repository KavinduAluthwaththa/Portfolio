import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { fetchSimpleIcons } from "react-icon-cloud";

// Lazy load IconCloud to reduce initial bundle size
const IconCloud = dynamic(() => import("@/components/ui/icon-cloud").then(mod => mod.IconCloud), {
  ssr: false,
  loading: () => <div className="w-full h-96 flex items-center justify-center"><div className="animate-pulse text-light">Loading...</div></div>
});

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudio",
  "android",
  "figma",
  "python",
  "mongodb",
  "mysql",
  "tailwindcss",
  "bootstrap",
  "vite",
  "postman",
  "dotnet",
  "php",
  "amazonwebservices",
  "c",
  "snowflake",
];

export async function getStaticProps() {
  const iconData = await fetchSimpleIcons({ slugs });
  return {
    props: {
      iconData,
    },
  };
}
export default function Home({ iconData }) {
  return (
    <>
      <Head>
        <title>Kavindu Aluthwaththa</title>
        <meta
          name="description"
          content="Index Page of Kavindu Aluthwaththa Portfolio"
        />
      </Head>

      <article
        className={`flex min-h-screen items-center text-light sm:items-start`}
      >
        <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
                  <IconCloud iconData={iconData} />
            </div>

            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hey, I’m Kavindu"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <div className="flex w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <h2 className="animate-text font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                  Running on Curiosity and Coffee.
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
                Full-Stack Developer crafting fast, scalable, and user-centered web experiences from elegant interfaces to powerful backends.
              </p>
              <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                <Link
                  href="/about/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Get To Know Me
                </Link>
                <Link
                  href="/cv.pdf"
                  target={"_blank"}
                  download
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-light hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
