import React from 'react'
import { EXPERIENCES } from '../constants';
import {motion} from "framer-motion"

const WorkExperience = () => {
  return (
    <section className='pt-20 lg:mx-14' id='work'>
      <motion.h2
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 1}}
        className='text-center text-4xl tracking-tighter'>Experiência
      </motion.h2>
      <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1, delay: 0.5}}
      className='space-y-8 p-10'>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, x: - 20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 1, delay: index * 0.2}}
            key={index} className='rounded-xl border border-stone-50/30 bg-white/10 p-4'>
            <h3 className='text-2xl font-semibold'>{experience.title}</h3>
            <p className='text-xl'>{experience.company}</p>
            <p className='text-sm text-stone-300'>{experience.duration}</p>
            <p className='mt-2 text-base'>{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default WorkExperience;