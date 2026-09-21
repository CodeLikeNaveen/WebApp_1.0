import { MoveRight } from '@/assets/MoveRight'
import { SendHorizontal } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'

const Work = () => {

    const workData = [
        {
            title: 'MERN project',
            description: 'social App',
            bgImage: '/work-1.svg',
            link: 'https://use-socialapp.vercel.app/'
        },
        {
            title: 'Frontend app',
            description: 'Portfolio WebApp',
            bgImage: '/work-2.svg',
            link: 'https://naveenreddu.vercel.app/'
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                My portfolio</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'
            >
                My latest work</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my web development portfolio! Explore a collection of projects
                showcasing my expertise in front-end development.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-auto gap-5 my-10 dark:text-black'>
                {workData.map((project, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        style={{
                            backgroundImage: `url(${project.bgImage})`, 
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className='aspect-square bg-no-repeat bg-center rounded-lg relative cursor-pointer group'
                    >
                        <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>
                                    {project.description}
                                </p>
                            </div>
                            <a href={project.link || "#"} className='border rounded-full border-black w-9 aspect-square flex items-center justify-center group-hover:bg-blue-500 transition'>
                                <SendHorizontal className='w-6 h-6 group-hover:text-white text-black' />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
                Show more
                <MoveRight className='w-6 h-6 text-gray-500 dark:text-white' />
            </motion.a>

        </motion.div>
    )
}

export default Work