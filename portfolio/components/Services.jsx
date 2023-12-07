'use client'
import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {motion, easeInOut} from 'framer-motion'
import {fadeIn} from './varients';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={92} stroke={'black'} strokeWidth={1} />,
    title: 'UX/UI Design',
    description:
      'Lets perform research, define our goals and ideate solutions to our objective(s) before we prototype them in Figma or AdobeXD to ensure a holistic approach to user experience.',
  },
  {
    icon: <Blocks size={92} strokeWidth={1} />,
    title: 'Web Development',
    description:
      'Lets build your idea with a modern UI on the Front End & create additional features on the Back end to provide the desired functionality, responsiveness and performance.',
  },
  {
    icon: <Gem size={92} strokeWidth={1} />,
    title: 'Project Managment',
    description:
      'I prioritize organization and effective communication. Im committed to meticulous planning and execution, ensuring every task aligns with project goals for successful and surpassing project deliveries.',
  },
];

const Services = () => {
  return (
    <section  className='section lg:py-[110px] flex items-center justify-center h-100 bg-para bg-fixed bg-cover' id="features">
  <div className='container mx-auto'>
  <motion.div 
                        variants={fadeIn('down',0)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.6}} className='flex flex-col items-center gap-x-10 lg:flex-row backdrop-blur-sm bg-white rounded-3xl p-8' >
   <div className='max-w-[550px]  '>
   <p className='bg-dark1/10 inline-block text-dark1 font-bold py-2 px-6 rounded-full my-4  gap-x-1 sideToSide transition-all hover:bg-dark1 hover:text-white'>My Expertise</p>

          <h2 className='h2 mb-4'>I like to create something powerful, simple, and clean.</h2>
          <p className='subtitle'>Let me help you build your product, vision, idea with my knowledge in the following areas. 
          </p>
         
    </div>


  <div className='mt-12 lg:mt-0' data-aos="fade-left" data-aos-delay="1000"data-aos-duration="1200">

    <div className='flex items-center gap-6 py-5 px-10  transition-all rounded-xl   hover:shadow-lg   hover:bg-dark1/90 hover:!text-white'>
      <div className='text-4xl shake'>
      ✍
      </div>

      <div className=''>
        <h3 className='text-xl mb-1 font-semibold'>{servicesData[0].title}</h3>
        <p >{servicesData[0].description}</p>
      </div>
    </div>


    <div className='flex text-dark1 items-center gap-6 py-5 px-10 buissness-icon-container transition-all  hover:shadow-lg rounded-xl  hover:bg-dark1/90 hover:!text-white'>
      <div className='text-4xl floating2'>
      💻
      </div>

      <div>
        <h3 className='text-xl mb-1 font-semibold'>{servicesData[1].title}</h3>
        <p className=''>{servicesData[1].description}</p>
      </div>
    </div>


    <div className='flex items-center gap-6 py-5 px-10 buissness-icon-container transition-all rounded-xl  hover:shadow-lg hover:bg-dark1/90 hover:!text-white'>
      <div className='text-4xl grow'>
      🎯
      </div>

      <div >
        <h3 className='text-xl mb-1 font-semibold'>{servicesData[2].title}</h3>
        <p >{servicesData[2].description}</p>
      </div>
    </div>


   


   
  </div>



  </motion.div>

  </div>

</section>
  );
};

export default Services;
