"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const items = [
            { name: "React", icon: "/skills/react.svg" },
            { name: "TypeScript", icon: "/skills/typescript.svg" },
            { name: "Tailwind", icon: "/skills/tailwind.svg" },
            { name: "Next.js", icon: "/skills/nextjs.svg" },
          ];

export default function AnimatedSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);
  
  return (
    <section id="about" className="bg-sky bg-[#260047] h-screen text-white min-h-[300vh] px-6 text-center relative">
         {/* <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-6 left-1/2 -translate-x-1/2 max-w-3xl"
        >
          <h2 className="text-4xl font-bold mb-6">The Chosen One’s Path</h2>
          <p className="text-lg">
            Roman wasn't always a master. His journey began with a humble laptop,
            where he battled for hours against the demons of HTML, CSS, and the dark
            shadows of Bootstrap...
          </p>
        </motion.div> */}
      <div className="sticky top-0 flex items-center justify-center">
        <div className="w-full max-w-md  no-scrollbar">
          <div className="flex flex-col">
            {items.map((item, index) => (
              <AnimatedItem key={index} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedItem({ item }: { item: { name: string; icon: string } }) {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 50 }}
      transition={{ duration: 0.6 }}
      className="h-[40vh] flex items-center justify-center text-3xl font-bold"
    >
            <div className="group relative flex flex-col items-center justify-center p-4">
        <div className="bg-black p-4 rounded-2xl border-2 border-white/20 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300">
          <img
            src={item.icon}
            alt={item.name}
            className="w-16 h-16 object-contain"
          />
        </div>
        <span className="mt-4 text-xl text-white/80">{item.name}</span>
      </div>
    </motion.div>
  );
}
