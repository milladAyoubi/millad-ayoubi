'use client'
import {Link} from 'react-scroll'
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {motion, easeInOut} from 'framer-motion'
import {fadeIn} from './varients';

import useMousePosition from '@/components/useMousePosition';


import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
  const {text} = useTypewriter({
    words:['UX/UI Designer','Full Stack Developer'],
    loop:{},
  })
  return (
    <section className='relative overflow-hidden' id="#home">
      <video
        className='absolute opacity-10 top-0 left-0 z-[-1] object-cover w-full h-full'
        autoPlay
        muted
        loop
      >
        <source src="/hero/video-5.mp4" type="video/mp4" />
      </video>
      <motion.div variants={fadeIn('down',0.6)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.8}} className='container mx-auto relative z-10 flex items-center justify-center h-[82vh] py-12 xl:py-24'>

        <div className='flex flex-col xl:flex-row justify-between gap-x-72'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
           
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] '>

                  MILLAD AYOUBI 
            </div>
            <h1 className='h1 mb-4  xl:w-[800px] '>UX/UI Designer & Full Stack Web Developer </h1>
       
      
            
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0 '>
            {`Specializing in design and developement of digital products that is user centric,
high performance and provides your business an exceptional digital experience `}
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-8'>
              <Link href='/contact'
              
            
              to={'#contact'}
              duration={500} spy={true} smooth={true}
              >
                <Button className='gap-x-2 lg:px-14  transition-all hover:scale-102 hover:-translate-y-1  '>
                 Contact me <Send size={18} />
                </Button>
              </Link>
             {/*<Button variant='secondary' className='gap-x-2 transition-all hover:scale-102 hover:-translate-y-1 '>
              <a href="/Millad_Ayoubi_Resume_02.pdf" download="Millad_Ayoubi_Resume_02.pdf">Download CV</a>
                <Download size={18} />
              </Button>*/} 
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0 '
              iconsStyles='!text-dark1 text-foreground text-[32px] hover:text-primary text-black transition-all transition-all hover:scale-102 hover:-translate-y-1'
            />
          </div>
          {/* image */}
          <div className='hidden xl:flex relative transition-all hover:scale-110 floating '>
            {/* badge 1 */}
            <Badge
              containerStyles='absolute top-[34%] -left-[7rem] floating2'
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText='Years Of Experience'
            />
            {/* badge 2 */}
            <Badge
              containerStyles='absolute top-[75%] -left-[1rem] xl:!w-[230px] floating2'
              icon={<RiTodoFill />}
              endCountNum={15}
              endCountText=''
              badgeText='Applications Designed/Built'
            />
            {/* badge 3 */}
            <Badge
              containerStyles='absolute top-[55%] -right-8 xl:!w-[220px] floating2'
              icon={<RiTeamFill />}
              endCountNum={30}
              endCountText='+'
              badgeText='Projects Worked'
            />
           {/*<div className='bg-black/80  text-white backdrop-blur-sm  w-[auto] floating rounded-full py-2 px-4 absolute z-10 bottom-28 left-6 shadow-lg '>
                  <p className='flex flex-row gap-x-1 items-center'>✦ UX/UI Designer ✦</p>
                </div>
              <div className='bg-black/80 text-white backdrop-blur-sm  w-[auto] floating rounded-full py-2 px-4 absolute z-10 bottom-44  right-28 shadow-lg '>
                  <p className='flex flex-row gap-x-1 items-center'>✦ Full Stack Developer ✦ </p>
            /div>*/}
              
            <DevImg
              containerStyles=' relative right-[50px] bottom-20 w-[490px] h-[520px] bg-no-repeat '
              imgSrc='/hero/MA_Image5.png'
            />
          </div>
        </div>
       
       
      </motion.div>
    </section>
  );
};

export default Hero;
