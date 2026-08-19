import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <motion.div
      className="overlay"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={item}>NIRVA. Clothing.</motion.h1>
      <motion.p variants={item}>
        This scene is rendered live with Three.js via React Three Fiber.
        Everything overlaid on top, this text, the button, is animated with
        Framer Motion. Drag to orbit the shape.
      </motion.p>
      <motion.button
        variants={item}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore
      </motion.button>
    </motion.div>
  )
}
