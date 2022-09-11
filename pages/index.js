import { motion, useMotionValue, useTransform } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import PageTransition from '../components/clipPath-pageTransition/PageTransition'
import PageTransitionn from '../components/clipPath-pageTransition/PageTransitionn'
import Toggle from '../components/orchestrateAnimation/Toggle'
import UseMotionValue from '../components/useMotionValue-useTransform/UseMotionValue'
import HeadRotate from '../components/useMotionValue-useTransform/UseTransform'

export default function Home() {



  return (
    <>
    <div className='flex justify-center items-center w-full h-auto py-16'>
    <UseMotionValue />
     <HeadRotate />
		</div>

    <div className='flex justify-center items-center w-full h-auto py-16'>
    <Toggle />
		</div>

    <div className='flex justify-center items-center w-full h-auto py-16'>
    <PageTransition />
		</div>

    <div className='flex justify-center items-center w-full h-auto py-16'>
    <PageTransitionn />
		</div>

    </>
		
	);
}
