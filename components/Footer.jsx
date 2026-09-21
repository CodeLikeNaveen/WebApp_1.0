import { assets } from '@/assets/assets'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo } alt='' className='w-36 mx-auto mb-2' />
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Mail className='w-5 h-5' />
                    code.contact.naveen@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>&copy;{new Date().getFullYear()} Naveen Reddu. All rights reserved. </p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/CodeLikeNaveen">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/codelikenaveen/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer