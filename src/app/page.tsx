"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white h-screen overflow-y-scroll flex flex-col-reverse snap-y snap-mandatory scroll-smooth">
      <section
        id="hero"
        className="flex flex-col  min-h-screen h-screen  bg-white text-black items-center justify-center h-screen px-6 text-center relative"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-accent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hallo
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Створюю красиві, швидкі та функціональні сайти.
        </motion.p>

        <motion.div
          className="absolute bottom-10 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {/* <ArrowDown className="w-8 h-8 text-white" /> */}
        </motion.div>
      </section>
      <section
        id="about"
        className="flex flex-col min-h-screen h-screen items-center justify-center px-6 text-center relative"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }} // анімація лише один раз
        >
          About
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Створюю красиві, швидкі та функціональні сайти.
        </motion.p>

        <motion.div
          className="absolute bottom-10 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {/* <ArrowDown className="w-8 h-8 text-white" /> */}
        </motion.div>
      </section>
      <section
        id="projects"
        className="flex flex-col min-h-screen h-screen bg-white text-black text-black items-center justify-center h-screen px-6 text-center relative"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }} // анімація лише один раз
        >
          Projects
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Створюю красиві, швидкі та функціональні сайти.
        </motion.p>

        <motion.div
          className="absolute bottom-10 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {/* <ArrowDown className="w-8 h-8 text-white" /> */}
        </motion.div>
      </section>
      {/* Hero Section */}
      <section
        id="contact"
        className="flex flex-col min-h-screen h-screen  items-center justify-center h-screen px-6 text-center relative"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }} // анімація лише один раз
        >
          Contacts
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Створюю красиві, швидкі та функціональні сайти.
        </motion.p>

        <motion.div
          className="absolute bottom-10 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {/* <ArrowDown className="w-8 h-8 text-white" /> */}
        </motion.div>
      </section>
      <nav className="fixed bottom-0 left-0 right-0 bg-black text-white py-4 px-6 flex justify-around z-50 border-t border-white/10">
        <a href="#hero" className="hover:text-gray-400 transition">
          Main
        </a>
        <a href="#about" className="hover:text-gray-400 transition">
          About
        </a>
        <a href="#projects" className="hover:text-gray-400 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-400 transition">
          Contacts
        </a>
      </nav>
    </main>
  );
}
