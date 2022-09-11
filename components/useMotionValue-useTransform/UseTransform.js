import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const HeadRotate = () => {

  const punch = useMotionValue(1)
  const punchRight = useTransform(punch, s => 1/s)
  const headRotate = useTransform(punch, [0.5, 2], [-10, 10])

  const variants = {
    init: {
      scale: 1,
    },
    anim: {
      scale: [1, 0.5, 2],
      transition: {
        times: [0, 0.8, 1],
        yoyo: Infinity,
      }
    }
  }
  return (
    <div className='flex'>
      
      <motion.div style={{scale: punch}} animate={variants.anim} initial={variants.init} className="text-7xl z-40">👊</motion.div>
			<motion.div style={{rotate: headRotate}} className="text-7xl">🤨</motion.div>
			<motion.div style={{scale: punchRight}}  className="text-7xl">👊</motion.div>

    </div>
  )
}

export default HeadRotate