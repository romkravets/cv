"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { useWindowSize } from "react-use";
import Image from "next/image";

const skills = [
  { id: "1", title: "React", sizeTitle: 3, color: "#61DBFB", status: true },
  { id: "2", title: "TypeScript", sizeTitle: 3, color: "#3178c6", status: true },
  { id: "3", title: "TailwindCSS", sizeTitle: 2, color: "#38bdf8", status: true },
  { id: "4", title: "Next.js", sizeTitle: 2, color: "#fff", status: true },
  { id: "5", title: "Node.js", sizeTitle: 3, color: "#3C873A", status: true },
  { id: "6", title: "MongoDB", sizeTitle: 2, color: "#00ED64", status: true },
  { id: "8", title: "Redux", sizeTitle: 2, color: "#764abc", status: true },
  { id: "9", title: "Firebase", sizeTitle: 2, color: "#FFA000", status: true },
];

export default function AnimatedSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dimensions = useWindowSize();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <div
      id="about"
      className="bg-sky text-white px-2 text-center relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 max-w-3xl"
      >
      </motion.div>

      <div
        ref={scrollRef}
        className="sticky top-0 flex items-center justify-center min-h-screen z-6"
      >
        <Image className="absolute top-[200px] right-0" src="/images/icon/moon.svg" width={80} height={80} alt=""/>
        <Image className="absolute" src="/images/icon/earth.svg" width={250} height={250} alt=""/>
        <TagCloud
          options={(w) => ({
            radius: Math.min(dimensions.width, w.innerWidth, w.innerHeight + 200) / 2.5,
            maxSpeed: "slow",
            keep: true,
            useContainerInlineStyles: true,
            useHTML: true,
            direction: 135,
          })}
          onClickOptions={{ passive: true }}
        >
          {skills.map((item) => {
            if (!item.status) return null;
            return `<span 
              data-weight="${item.sizeTitle}" 
              data-id="${item.id}" 
              style="text-shadow: 1px 1px 1px ${item.color}; color: ${item.color}; font-size: 1.5rem; font-style: normal; font-weight: 500;"
            >${item.title}</span>`;
          })}
        </TagCloud>
      </div>
    </div>
  );
}
