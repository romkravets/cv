// "use client"

// import {
//     motion,
//     MotionValue,
//     useScroll,
//     useSpring,
//     useTransform,
// } from "motion/react"
// import { useRef } from "react"

// function useParallax(value: MotionValue<number>, distance: number) {
//     return useTransform(value, [0, 1], [-distance, distance])
// }

// function Image({ id }: { id: number }) {
//     const ref = useRef(null)
//     const { scrollYProgress } = useScroll({ target: ref })
//     const y = useParallax(scrollYProgress, 300)

//     return (
//         <section className="img-container">
//             <div ref={ref}>
//                 <img
//                     src={`/photos/cityscape/${id}.jpg`}
//                     alt="A London skyscraper"
//                 />
//             </div>
//             <motion.h2
//                 initial={{ visibility: "hidden" }}
//                 animate={{ visibility: "visible" }}
//                 style={{ y }}
//             >{`#00${id}`}</motion.h2>
//         </section>
//     )
// }

// export default function Parallax() {
//     const { scrollYProgress } = useScroll()
//     const scaleX = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 30,
//         restDelta: 0.001,
//     })

//     return (
//         <div id="example">
//             {[1, 2, 3, 4, 5].map((image) => (
//                 <Image key={image} id={image} />
//             ))}
//             <motion.div className="progress" style={{ scaleX }} />
//         </div>
//     )
// }