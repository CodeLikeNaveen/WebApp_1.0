import { assets } from '@/assets/assets'
import { MoveRight } from '@/assets/MoveRight'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {
    const serviceData = [
        { icon: assets.web_icon, title: 'Web Dev', description: 'Web development is the process of building, programming...', link: '' },
        { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
        { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
        { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20'
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                What I offer</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'
            >
                My Services</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am a MERN Stack Developer from Haryana, India, passionate about building modern and scalable web applications.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div key={index}
                        whileHover={{ scale:1.05 }}
                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
                    >
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center text-sm mt-5'>
                            Read more
                            <MoveRight strokeWidth={1} className='w-7 h-7 text-gray-400' />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services