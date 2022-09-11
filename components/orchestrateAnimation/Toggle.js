import { useCycle, motion } from 'framer-motion'
import React from 'react'

const Toggle = () => {

  const [mode, cycleMode] = useCycle('light', 'dark');
  const toggleWidth = 200;
  const knobLightWidth = 120;
  const knobDarkWidth = 90;

/*   const variantToggle = {
    hidden: {

    },
    visible: {
      background: mode == 'light' ? '#9fe3f4' : '#000526'
    }
  } */

  const variantToggle = {
    light: {
      background: '#9fe3f4',
    },
    dark: {
      background: '#000526'
    }
  }
  const variantToggleLightKnob = {
    light: {
      rotate: 0, opacity: 1, x: 0,
    },
    dark: {
     rotate: 0, opacity: 0, x: toggleWidth - knobLightWidth / 2,
    }
  }
  const variantToggleDarkKnob = {
    light: {
      rotate: -180, opacity: 0, x: 0,
    },
    dark: {
     rotate: 0, opacity: 1, x: toggleWidth - knobLightWidth / 2,
    }
  }
  const cloudVariant = {
    light: {
      opacity: [1, 0.5, 0.8],
      x: [20, -30],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }
    },
    dark: {
     opacity: 0
    }
  }
  const star1Variant = {
    light: {
     opacity: 0
    },
    dark: {
      opacity: [1, 0.3, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }
    }
  }
  const star2Variant = {
    light: {
     opacity: 0
    },
    dark: {
      opacity: [0.4, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse', //yoyo is deprecated.
      }
    }
  }
 

  return (
    <motion.div variants={variantToggle}  animate={mode} className={`relative bg-[#444] rounded-full w-[200px] h-[90px] border-2 border-blue-400`}>

      <motion.div variants={cloudVariant} className="text-white absolute text-6xl top-3 right-[0]">
        ☁️
      </motion.div>

      <> {/* starts */}
      <motion.div variants={star1Variant} className="text-white absolute text-xl top-2 left-[29%]">
        ✦
      </motion.div>
      <motion.div variants={star2Variant} className="text-white absolute text-md top-1/2 left-[15%]">
        ✦
      </motion.div>
      </>

      <>{/* knob */}
      <motion.div onClick={() => cycleMode()} variants={variantToggleLightKnob} className="absolute -m-12 top-1/2 text-8xl cursor-pointer">
       🌞
      </motion.div>
      <motion.div onClick={() => cycleMode()} variants={variantToggleDarkKnob} className="absolute -m-12 top-1/2 text-8xl  cursor-pointer">
        🌝
       
      </motion.div>
      </>
      
    </motion.div>
  )
}

export default Toggle