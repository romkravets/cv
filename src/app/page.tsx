"use client";

import AnimatedSection from "@/components/AnimatedScreen";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import {useRef} from "react"
import { motion, useScroll, useTransform } from "framer-motion";


const socialLinks = [
  {
    alt: 'X Planet',
    href: 'https://twitter.com/berachain',
    src: 'https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/atjtbkm3nu5chferwfau',
    style: 'left-[30%] top-[-50px] w-[20%] animate-float',
    duration: '2s',
  },
  {
    alt: 'Discord Planet',
    href: 'https://discord.gg/berachain',
    src: 'https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/newFoundation/nrifpnbzq6fdxbftfi71',
    style: 'top-[15%] -right-[40px] lg:right-[-100px] w-[20%] animate-float',
    duration: '3s',
  },
  {
    alt: 'GitHub Planet',
    href: 'https://github.com/berachain',
    src: 'https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/newFoundation/ql2nmmduzskuv1nu88gi',
    style: 'bottom-[0%] -left-[30px] lg:left-[-100px] w-[20%] animate-float',
    duration: '4s',
  },
  {
    alt: 'Opensea Planet',
    href: 'https://opensea.io/collection/bongbears',
    src: 'https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/newFoundation/vucwotsdllr5u8iyyhfq',
    style: 'bottom-[-100px] left-[40%] w-[20%] animate-float',
    duration: '2.5s',
  },
  {
    alt: 'Telegram 1',
    href: 'https://t.me/BerachainEco',
    src: 'https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/newFoundation/svwzslytkfs9zkj5ppes',
    style: 'top-[30%] -left-[20%] w-[20%] animate-float',
    duration: '2.25s',
  },
  {
    alt: 'Telegram 2',
    href: 'https://t.me/BerachainPortal',
    src: 'https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/newFoundation/jqvgrkaimnqhqpynjquo',
    style: 'top-[70%] right-[0%] w-[15%] animate-float',
    duration: '2.25s',
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
        className="relative bg-legend flex flex-col min-h-screen h-screen items-center justify-center h-screen px-6 text-center relative"
      >
         {/* <img
          width={200}
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/hzoxkc6p32sltwlrtyiq"
          alt="Bera Moon"
          className="absolute top-[-10px] top-0 animate-float zIndex-2"
          style={{
            '--float-rotate': '135deg',
            '--float-duration': '5s',
          } as React.CSSProperties}
        /> */}
        {/* <img
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/prac065b31pwhdh4v9uw"
          alt="Bera Moon"
          width={200}
          className="absolute top-[50px] left-0 animate-float"
          style={{
            '--float-rotate': '0deg',
            '--float-duration': '4s',
          } as React.CSSProperties}
        /> */}
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
            Long ago, in a digital kingdom far beyond firewalls and code, lived
            a boy named Roman. He wasn’t a wizard, yet he wielded a power that
            could shape worlds — the power of code. They called him...{" "}
            <span className="font-semibold">The Front-end Alchemist</span>.
          </p>
        </motion.div>
        <div className="btn-up animate-float">Up Only</div>
        <div><img className="absolute bottom-0 left-0" src="/images/star-sky.png" alt=""/></div>
        <div><img className="absolute bottom-0 left-200" src="/images/user1.png" alt="" width={100} height={100}/></div>
      </section>

      <section
        id="about"
        className="bg-sky bg-[#260047] min-h-[250vh] text-white flex flex-col items-center justify-center text-center relative"
      >
        <img
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/hzoxkc6p32sltwlrtyiq"
          alt="Bera Moon"
          width={200}
          className="absolute bottom-[-80px] right-0 animate-float"
          style={{
            '--float-rotate': '0deg',
            '--float-duration': '7s',
          } as React.CSSProperties}
        />
         <img
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/prac065b31pwhdh4v9uw"
          alt="Bera Moon"
          width={200}
          className="absolute bottom-[-80px] left-0 animate-float"
          style={{
            '--float-rotate': '0deg',
            '--float-duration': '4s',
          } as React.CSSProperties}
        />
          <img
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/xhqewvtts7rtatvpzeii"
          alt="Bera Moon"
          width={250}
          className="absolute left-[25%] bottom-[-80px] animate-float"
          style={{
            '--float-rotate': '0deg',
            '--float-duration': '7s',
          } as React.CSSProperties}
        />
        <img
          width={200}
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/hzoxkc6p32sltwlrtyiq"
          alt="Bera Moon"
          className="absolute left-[50%] bottom-[-50px] animate-float"
          style={{
            '--float-rotate': '135deg',
            '--float-duration': '5s',
          } as React.CSSProperties}
        />
        <AnimatedSection/>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto my-5 pb-5 flex flex-col justify-center items-center"
        >
          <img className="flex" src="/images/icon/user3.png" alt="" width={100} height={100}/>
          <h2 className="text-4xl font-bold mb-6">The Chosen One’s Path</h2>
          <p className="text-lg">
            Roman wasn't always a master. His journey began with a humble
            laptop, where he battled for hours against the demons of HTML, CSS,
            and the dark shadows of Bootstrap. But through perseverance and a
            love for beauty, speed, and logic — he cast his first spell: a
            website that breathed with life.
          </p>
        </motion.div>
        
      </section>

      
 {/* <Parallax/> */}
      {/* <section
        id="projects"
        className="bg-projects bg-[#141414] text-white flex flex-col min-h-screen h-screen items-center justify-center h-screen px-6 text-center relative"
      >
               <img
          width={200}
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/hzoxkc6p32sltwlrtyiq"
          alt="Bera Moon"
          className="absolute left-[-50px] bottom-[-100px] animate-float"
          style={{
            '--float-rotate': '135deg',
            '--float-duration': '5s',
          } as React.CSSProperties}
        />
             <img
          width={200}
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/prac065b31pwhdh4v9uw"
          alt="Bera Moon"
          className="absolute left-[100px] bottom-[-100px] animate-float"
          style={{
            '--float-rotate': '135deg',
            '--float-duration': '5s',
          } as React.CSSProperties}
        />
        <img
          width={200}
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/xhqewvtts7rtatvpzeii"
          alt="Bera Moon"
          className="absolute left-[50%] bottom-[-70px] animate-float"
          style={{
            '--float-rotate': '135deg',
            '--float-duration': '5s',
          } as React.CSSProperties}
        />
         <img
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/hzoxkc6p32sltwlrtyiq"
          alt="Bera Moon"
          width={250}
          className="absolute right-[-50px] bottom-[-150px] animate-float"
          style={{
            '--float-rotate': '0deg',
            '--float-duration': '7s',
          } as React.CSSProperties}
        />
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          
          {[
            { name: "React", icon: "/skills/react.svg" },
            { name: "TypeScript", icon: "/skills/typescript.svg" },
            { name: "Tailwind", icon: "/skills/tailwind.svg" },
            { name: "Next.js", icon: "/skills/nextjs.svg" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center p-4"
            >
              <div className="bg-black p-4 rounded-2xl border-2 border-white/20 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <span className="mt-4 text-sm text-white/80">{skill.name}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Deeds and Legends</h2>
          <p className="text-lg">
            Roman glory was forged not by words, but through great quests — his{" "}
            <strong>projects</strong>. One turned a dull map into a magical
            quest for children. Another helped brave cyclists discover hidden
            paths. Each project had a soul, each was born from code and heart
            alike.
          </p>
        </motion.div>
      </section> */}

      <section id="contact" className="bg-contacts bg-[#141414] text-white flex flex-col min-h-screen h-screen items-center justify-center h-screen px-6 text-center relative">
       <img
          width={200}
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/hzoxkc6p32sltwlrtyiq"
          alt="Bera Moon"
          className="absolute left-[-50px] bottom-[-100px] animate-float"
          style={{
            '--float-rotate': '135deg',
            '--float-duration': '5s',
          } as React.CSSProperties}
        />
             <img
          width={200}
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/prac065b31pwhdh4v9uw"
          alt="Bera Moon"
          className="absolute left-[100px] bottom-[-100px] animate-float"
          style={{
            '--float-rotate': '135deg',
            '--float-duration': '5s',
          } as React.CSSProperties}
        />
         <img
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/hzoxkc6p32sltwlrtyiq"
          alt="Bera Moon"
          width={250}
          className="absolute left-[30%] bottom-[-150px] animate-float"
          style={{
            '--float-rotate': '0deg',
            '--float-duration': '7s',
          } as React.CSSProperties}
        />
        <img
          width={200}
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/xhqewvtts7rtatvpzeii"
          alt="Bera Moon"
          className="absolute left-[50%] bottom-[-70px] animate-float"
          style={{
            '--float-rotate': '135deg',
            '--float-duration': '5s',
          } as React.CSSProperties}
        />
         <img
          src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/foundation/hzoxkc6p32sltwlrtyiq"
          alt="Bera Moon"
          width={250}
          className="absolute right-[-50px] bottom-[-150px] animate-float"
          style={{
            '--float-rotate': '0deg',
            '--float-duration': '7s',
          } as React.CSSProperties}
        />
      <div className="relative w-full md:w-1/2 xl:w-1/3">
        <div className="absolute bottom-0 right-[-50px] w-[60%] md:bottom-[-50px] md:right-[-150px]">
          <img className="" src="/images/icon/user4.png" alt="" width={100} height={100}/>
          {/* <img
            alt="Astro Bear"
            src="https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/newFoundation/abqllf4qo4unsut9hxlz"
            width={1240}
            height={922}
            className="object-contain"
          /> */}
        </div>

        {/* Social Planets */}
        {socialLinks.map((link, idx) => (
          <div
            key={idx}
            className={`absolute ${link.style}`}
            style={{ transform: 'none', '--float-duration': link.duration } as React.CSSProperties}
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
      <div className="fixed left-0 top-1/2 -translate-y-1/2 text-white py-4 px-3 flex flex-col gap-4 z-50 border-r border-white/10">
        <ul>
          <li>GinHub</li>
          <li>LinkedIn</li>
          <li>Discord</li>
        </ul>
      </div>
      <div className="fixed top-0 right-0 text-white py-4 px-6 flex flex-row gap-4 z-50 border-l border-white/10">
        <a href="#contact" className="hover:text-gray-400 transition">
          Contact Me
        </a>
      </div>
      <Navigation />
        {/* <motion.div
          style={{ x, y }}
          className="hidden md:block absolute bottom-0 right-0 pointer-events-none"
        >
          <img
            alt="Bera balloon"
            width={119}
            height={163}
            className="w-[100px] md:w-[119px]"
            src="/images/icon/user4.png"
          />
        </motion.div> */}
    </main>
  );
}
