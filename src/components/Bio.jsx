import { BIO } from "../constants";
import {motion} from "framer-motion"

const Bio = () => {
  return (
    <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
      <motion.h2
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="text-center text-3xl lg:text-4xl">
        Bio
      </motion.h2>
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8, delay: 0.2}}>
        {BIO.map((bio, index) => (
          <p key={index} className="mb-4 text-lg lg:text-xl md:text-justify">
            {bio}
          </p>
        ))}
      </motion.div>
    </section>
  )
}

export default Bio;