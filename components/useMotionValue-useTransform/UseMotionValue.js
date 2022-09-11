import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const StaticuseMotionValue = () => {

  const punch = useMotionValue(1)

  const variants = {
    init: {
      scale: 1,
    },
    anim: {
      scale: 1.9,
      transition: {
        times: [0, 0.5, 1],
        type: 'tween',
        flip: Infinity,
      }
    }
  }

  return (
    <>
    <motion.div style={{scale: punch}} animate={variants.anim} initial={variants.init} className="text-7xl">👊</motion.div>
			<div className="text-7xl">🤨</div>
			<motion.div style={{scale: punch}}  className="text-7xl">👊</motion.div>

    </>
  )
}

export default StaticuseMotionValue