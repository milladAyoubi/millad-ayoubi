'use client'
import { Button } from './ui/button';
import Link from 'next/link';
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import Socials from './Socials';

import {motion, easeInOut} from 'framer-motion'
import {fadeIn} from './varients';
// components
import Form from '@/components/Form';
const Cta = () => {
  return (
    <section className='relative overflow-hidden' id="#contact">
      <video
        className='absolute opacity-10 top-0 left-0 z-[-1] object-cover w-full h-full'
        autoPlay
        muted
        loop
      >
        <source src="/hero/video-5.mp4" type="video/mp4" />
      </video>
      <motion.div variants={fadeIn('down',0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.8}} div className='container mx-auto relative z-10 flex items-center justify-center min-h-[20vh] xl:h-[46vh] py-20 xl:py-24'>
        {/* text & illustration */}
        <div className='grid pt-12 xl:h-[480px] mb-6 '>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex flex-row items-center justify-center  gap-x-4 text-primary text-lg mb-4 text-center xl:text-left xl:max-w-m'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Get In touch with me <p className='shake text-[26px]'>👋</p>
            </div>
            <h1 className='h1 text-center  mb-8'>Let's Work Together</h1>
            <p className='subtitle text-center '>
            ✦ Let's Work Together and create something awesome!
      Drop me a line and let the magic happen ✦
            </p>

            
          </div>

          <div className='m-auto'>
          {/* info text */}
          <div className='flex flex-col gap-y-4   text-base xl:text-lg'>
            {/* mail */}
            <div className='flex items-center gap-x-8 '>
              <MailIcon size={18} className='text-primary' />
              <div>Milladayoubi@gmail.com</div>
            </div>
            {/* address */}
            <div className='flex items-center gap-x-8'>
              <HomeIcon size={18} className='text-primary' />
              <div>Toronto, Ontario Canada</div>
            </div>
            {/* phone */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} className='text-primary' />
              <div>+1 647 806 7239</div>
            </div>
          </div>
        
        </div>
   
        </div>

        
      </motion.div>
      <footer className='bg-white/70 backdrop-blur-md py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* socials */}
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-dark1/60 dark:hover:text-primary transition-all'
          />
          {/* copyright */}
          <div className='text-muted-foreground text-center'>
            Copyright &copy; Millad Ayoubi. All rights not reserved.
          </div>
        </div>
      </div>
    </footer>

      
    </section>
  );
};

export default Cta;
