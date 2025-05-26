"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white h-screen overflow-y-scroll flex flex-col-reverse snap-y snap-mandatory scroll-smooth">
      <section className="bg-legend flex flex-col min-h-screen h-screen items-center justify-center h-screen px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          The Legend Begins
        </h1>
        <p className="text-xl">
          Long ago, in a digital kingdom far beyond firewalls and code, lived a boy named Roman.
          He wasn’t a wizard, yet he wielded a power that could shape worlds — the power of code.
          They called him... <span className="font-semibold">The Front-end Alchemist</span>.
        </p>
      </motion.div>
      {/* <img
        src="/images/legend-earth.png"
        alt="The Front-end Alchemist"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-90 pointer-events-none"
      /> */}
    </section>

       <section className="bg-about bg-[#111] text-white flex flex-col min-h-screen h-screen items-center justify-center h-screen px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">The Chosen One’s Path</h2>
        <p className="text-lg">
          Roman wasn't always a master.
          His journey began with a humble laptop, where he battled for hours against the demons of HTML, CSS, and the dark shadows of Bootstrap.
          But through perseverance and a love for beauty, speed, and logic — he cast his first spell: a website that breathed with life.
        </p>
      </motion.div>
    </section>

 <section className="bg-projects bg-[#141414] text-white flex flex-col min-h-screen h-screen items-center justify-center h-screen px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">Deeds and Legends</h2>
        <p className="text-lg">
          Roman glory was forged not by words, but through great quests — his <strong>projects</strong>.
          One turned a dull map into a magical quest for children.
          Another helped brave cyclists discover hidden paths.
          Each project had a soul, each was born from code and heart alike.
        </p>
      </motion.div>
    </section>

<section className="bg-contacts flex flex-col min-h-screen h-screen items-center justify-center h-screen px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">The Fire Signal</h2>
        <p className="text-lg">
          Now, after countless adventures, Roman rests atop the pixelated mountain, awaiting his next call.
          If you have a vision that needs a touch of frontend magic — <span className="italic">send a raven, light the flame</span>… and the Alchemist shall rise again.
        </p>
      </motion.div>
    </section>

    

      <nav className="fixed bottom-0 left-0 right-0 bg-black text-white py-4 px-6 flex justify-around z-50 border-t border-white/10">
        <a href="#hero" className="hover:text-gray-400 transition">
          Home
        </a>
        <a href="#about" className="hover:text-gray-400 transition">
          About
        </a>
        <a href="#projects" className="hover:text-gray-400 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-400 transition">
          Contact
        </a>
      </nav>
    </main>
  );
}
