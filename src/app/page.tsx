"use client";

import AnimatedSection from "@/components/AnimatedScreen";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderProject } from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    alt: "X",
    href: "https://twitter.com/romkravets",
    src: "/images/icon/social/x.webp",
    style: "left-[30%] top-[-50px] w-[20%] animate-float",
    duration: "2s",
  },
  {
    alt: "Discord",
    href: "https://discord.gg/",
    src: "/images/icon/social/discord.webp",
    style: "top-[15%] -right-[40px] lg:right-[-100px] w-[20%] animate-float",
    duration: "3s",
  },
  {
    alt: "GitHub",
    href: "https://github.com/romkravets",
    src: "/images/icon/social/github.webp",
    style: "bottom-[0%] -left-[30px] lg:left-[-100px] w-[20%] animate-float",
    duration: "4s",
  },
  {
    alt: "Telegram",
    href: "https://t.me/romkravets",
    src: "/images/icon/social/telegram.webp",
    style: "top-[70%] right-[0%] w-[15%] animate-float",
    duration: "2.25s",
  },
];

export default function Home() {
  const ref = useRef(null);

  // Track scroll within the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move image up as user scrolls down
  const x = useTransform(scrollYProgress, [0, 1], [-200, 300]); // start left, move right
  const y = useTransform(scrollYProgress, [0, 1], [300, -200]); // start bottom, move up
  return (
    <main className="bg-black text-white h-screen overflow-y-scroll flex flex-col-reverse snap-y snap-mandatory scroll-smooth">
      <section
        id="legend"
        className="relative bg-legend flex flex-col min-h-[80vh] sm:min-h-screen h-screen items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-accent">
            The Legend Begins
          </h1>
          <p className="text-xl">
            Somewhere in the vast cosmos, among swirling galaxies and drifting
            stardust, a curious mind named Roman began his journey. Orbiting
            Planet Earth, with stars as his compass and a keyboard as his ship,
            he started exploring the universe of code.</p>
            <p className="text-xl"> He began, like many space
            explorers, learning to speak the basic languages of the frontend —
            HTML, CSS, and native JavaScript. From the glowing rings of jQuery
            to the nebulae of responsive design, Roman charted his course. </p>
 <p className="text-xl">
            Eventually, he landed on powerful worlds like React, React Native,
            and Next.js, where he now crafts smooth, fast, and scalable user
            interfaces for web and mobile.{" "}
            <span className="font-semibold">
              But frontend was just one galaxy.
            </span>
          </p>
        </motion.div>
        <div className="btn-up animate-float">Up Only</div>
        <img
          className="absolute bottom-0 left-0 w-[100%] h-[auto]"
          src="/images/star-sky.png"
          alt="User"
        />
        <div>
          <Image
            className="absolute bottom-0"
            src="/images/user1.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </section>

      <section
        id="about"
        className="bg-sky bg-[#260047] min-h-[150vh] md:min-h-[250vh] text-white flex flex-col items-center justify-center text-center relative"
      >
        <SliderProject />
        <Image
          src="/images/icon/ast-1.webp"
          alt=""
          width={100}
          height={100}
          className="absolute bottom-[-80px] right-0 animate-float rotate-210 img-rock"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "7s",
            } as React.CSSProperties
          }
        />
        <Image
          src="/images/icon/ast-2.webp"
          alt=""
          width={100}
          height={100}
          className="absolute bottom-[-80px] right-[250px] animate-float rotate-45 img-rock"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "7s",
            } as React.CSSProperties
          }
        />
        <Image
          src="/images/icon/ast-1.webp"
          alt=""
          width={210}
          height={210}
          className="absolute bottom-[-50px] right-[100px] animate-float rotate-90 img-rock"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "7s",
            } as React.CSSProperties
          }
        />
        <Image
          src="/images/icon/ast-2.webp"
          alt="Bera Moon"
          width={200}
          height={200}
          className="absolute bottom-[-80px] left-0 animate-float rotate-210 img-rock"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "4s",
            } as React.CSSProperties
          }
        />
        <Image
          src="/images/icon/ast-3.webp"
          alt=""
          width={250}
          height={250}
          className="absolute left-[25%] bottom-[-80px] animate-float img-rock"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "7s",
            } as React.CSSProperties
          }
        />
        <Image
          width={200}
          height={200}
          src="/images/icon/ast-1.webp"
          alt=""
          className="absolute left-[50%] bottom-[-50px] animate-float img-rock"
          style={
            {
              "--float-rotate": "135deg",
              "--float-duration": "5s",
            } as React.CSSProperties
          }
        />
        <AnimatedSection />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto my-5 pb-5 flex flex-col justify-center items-center"
        >
          <h2 className="text-4xl font-bold mb-6">The Chosen One’s Path</h2>
          <p className="text-lg">
            Drawn to the gravitational pull of deeper logic, Roman entered the
            realm of Node.js and Express, learning to shape backends, scrape
            data from the wild web, and build APIs that connect worlds. With
            tools like Firebase and MongoDB, he launched real-time apps and
            robust databases into orbit. Along the way, Roman discovered the
            magic of AI. To him, it's not just a trend — it's the future of
            development. He works with tools like GitHub Copilot and OpenAI's
            API to boost creativity, speed up development, and build smarter
            experiences.
          </p>
        </motion.div>
      </section>

      <section
        id="contact"
        className="bg-contacts bg-[#141414] text-white flex flex-col min-h-[30vh] md:min-h-[40vh] items-center justify-center px-6 text-center relative"
      >
        <Image
          height={200}
          width={200}
          src="/images/icon/ast-1.webp"
          alt=""
          className="absolute left-[-50px] bottom-[-100px] animate-float rotate-90 img-rock"
          style={
            {
              "--float-rotate": "135deg",
              "--float-duration": "5s",
            } as React.CSSProperties
          }
        />
        <Image
          width={200}
          height={200}
          src="/images/icon/ast-3.webp"
          alt=""
          className="absolute left-[100px] bottom-[-100px] animate-float rotate-45 img-rock"
          style={
            {
              "--float-rotate": "135deg",
              "--float-duration": "5s",
            } as React.CSSProperties
          }
        />
        <Image
          src="/images/icon/ast-1.webp"
          alt=""
          width={250}
          height={250}
          className="absolute left-[30%] bottom-[-150px] animate-float rotate-210 img-rock"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "7s",
            } as React.CSSProperties
          }
        />
        <Image
          width={200}
          height={200}
          src="/images/icon/ast-2.webp"
          alt="Bera Moon"
          className="absolute left-[50%] bottom-[-70px] animate-float img-rock"
          style={
            {
              "--float-rotate": "135deg",
              "--float-duration": "5s",
            } as React.CSSProperties
          }
        />
        <Image
          src="/images/icon/ast-1.webp"
          alt=""
          width={250}
          height={250}
          className="absolute right-[-50px] bottom-[-150px] animate-float rotate-180 img-rock"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "4s",
            } as React.CSSProperties
          }
        />
        <Image
          src="/images/icon/ast-2.webp"
          alt=""
          width={100}
          height={100}
          className="absolute bottom-[-80px] right-[250px] animate-float rotate-45 img-rock"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "3s",
            } as React.CSSProperties
          }
        />
        <Image
          src="/images/icon/ast-1.webp"
          alt=""
          width={210}
          height={210}
          className="absolute bottom-[-50px] right-[100px] animate-float rotate-90 img-rock"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "2s",
            } as React.CSSProperties
          }
        />
        <Image
          src="/images/icon/ast-2.webp"
          alt="Bera Moon"
          width={200}
          height={200}
          className="absolute bottom-[-80px] left-0 animate-float rotate-210 img-rock"
          style={
            {
              "--float-rotate": "0deg",
              "--float-duration": "4s",
            } as React.CSSProperties
          }
        />
        {/* <div className="absolute bottom-0 right-[-50px] w-[60%] md:bottom-[-50px] md:right-[-150px]">
            <Image
              src="/images/icon/user4.png"
              alt=""
              width={100}
              height={100}
            />
          </div> */}
        <div className="relative w-full md:w-1/2 xl:w-1/3">
          {/* Social Planets */}
          {socialLinks.map((link, idx) => (
            <div
              key={idx}
              className={`absolute ${link.style}`}
              style={
                {
                  transform: "none",
                  "--float-duration": link.duration,
                } as React.CSSProperties
              }
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <img
                  alt={link.alt}
                  src={link.src}
                  width={100}
                  height={100}
                  className="animate-float"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
      <div className="fixed left-0 top-1/2 -translate-y-1/2 text-white py-4 px-3 flex flex-col gap-4 z-4 border-r border-white/10">
        <ul>
          <li className="pb-5">
            <Link href="">
              <Image
                src="/images/icon/social/github.svg"
                width={30}
                height={30}
                alt=""
              />
            </Link>
          </li>
          <li className="pb-5">
            <Link href="">
              <Image
                src="/images/icon/social/link.svg"
                width={30}
                height={30}
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="fixed top-0 right-0 text-white py-4 px-6 flex flex-row gap-4 z-50 border-l border-white/10">
        <a href="#contact" className="hover:text-gray-400 transition">
          Contact Me
        </a>
      </div>
      <Navigation />
    </main>
  );
}
