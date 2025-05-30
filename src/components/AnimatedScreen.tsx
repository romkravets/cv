"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { useWindowSize } from "react-use";

const skills = [
  { id: "1", title: "React", sizeTitle: 3, color: "#61DBFB", status: true },
  { id: "2", title: "TypeScript", sizeTitle: 3, color: "#3178c6", status: true },
  { id: "3", title: "Tailwind", sizeTitle: 2, color: "#38bdf8", status: true },
  { id: "4", title: "Next.js", sizeTitle: 2, color: "#fff", status: true },
  { id: "5", title: "Node.js", sizeTitle: 3, color: "#3C873A", status: true },
  { id: "6", title: "MongoDB", sizeTitle: 2, color: "#00ED64", status: true },
  { id: "7", title: "GraphQL", sizeTitle: 3, color: "#e535ab", status: true },
  { id: "8", title: "Redux", sizeTitle: 2, color: "#764abc", status: true },
  { id: "9", title: "Firebase", sizeTitle: 2, color: "#FFA000", status: true },
  { id: "10", title: "Framer Motion", sizeTitle: 3, color: "#e00", status: true },
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
        {/* <h2 className="text-4xl font-bold mb-4">The Chosen One’s Path</h2>
        <p className="text-lg text-white/70">
          Roman wasn't always a master. His journey began with a humble laptop,
          where he battled for hours against the demons of HTML, CSS, and the
          dark shadows of Bootstrap...
        </p> */}
      </motion.div>

      <div
        ref={scrollRef}
        className="sticky top-0 flex items-center justify-center min-h-screen"
      >
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
              style="text-shadow: 1px 1px 1px ${item.color}; color: ${item.color}; font-size: 2.1rem; font-style: normal; font-weight: 600;"
            >${item.title}</span>`;
          })}
        </TagCloud>
      </div>
    </div>
  );
}
