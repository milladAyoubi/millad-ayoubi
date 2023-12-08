'use client'
import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from './ui/badge';

import {motion, easeInOut} from 'framer-motion'
import {fadeIn} from './varients';
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Millad Ayoubi',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '647-806-7239',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'Milladayoubi@gmail.com',
  },
  
  {
    icon: <GraduationCap size={20} />,
    text: 'Bachelors of Computer Science',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Toronto, ON, Canada',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Ryeson University',
        qualification: 'Bachelor of Science (Honors)',
        years: '2017 - 2022',
      },
      
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Serotina Media Inc',
        role: 'UX/UI Designer & Front End Web Developer',
        years: 'Feb 2022 - May 2023 ',
      },
      {
        company: 'Ted Rodgers School of Managment',
        role: 'Lead UX/UI Bootcamp Instructor',
        years: 'Sep 2021 - Present',
      },
      {
        company: 'Ryerson University - Department of Bio Med',
        role: 'Full Stack Application Developer',
        years: 'May 2021 - Jan 2022',
      },
    ],
  },
];



const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='relative overflow-hidden backdrop-blur-md ' id="#aboutme">

    <video
      className='absolute opacity-70 top-0 left-0 z-[-10] object-cover w-full h-full'
      autoPlay
      muted
      loop
    >
      <source src="/hero/video-5.mp4" type="video/mp4" />
    </video>
   
    <div className='absolute top-0 left-0 object-cover w-[100%] h-full flex items-center justify-center'>
        <div className='bg-white/100 w-[100%] h-[100%]  backdrop-blur-lg p-8 rounded-lg'>
          {/* Content inside the div layer */}
        
          {/* You can add more content here */}
        </div>
      </div>

    <div className='container mx-auto py-24 '>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative '>
            <DevImg
              className='rounded-md'
              containerStyles='floating  w-[505px] h-[505px] rounded-md bg-no-repeat relative'
              imgSrc='/about/about_img1.png'
            />
          </div>
          {/* tabs */}
          <div className='flex-1 z-10'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualifications
                </TabsTrigger>
                
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8 '>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                  
                    {/* languages */}
                    <motion.div 
                        variants={fadeIn('up',0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.6}} className='flex flex-col gap-y-1 mb-4'>
                      
                      

                      <div className='text-primary'>Tech Stack</div>
                      <div className='flex flex-wrap gap-x-2 '>
                        
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        Javascript
                      </Badge> 
                      
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        ReactJS
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        TypeScript
                      </Badge> 
                      
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        NextJS
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        NodeJS
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        ExpressJS
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        HTML5
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        CSS/SASS/Tailwind
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        BootStrap
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        MySQL
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        APIs
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        Java
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        PHP
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        Shopify Liquid 
                      </Badge> 
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        SEO
                      </Badge> 
                      
                      </div>
                    </motion.div>
                    <motion.div 
                        variants={fadeIn('up',0.4)}
                        initial='hidden'
                        whileInView={'show'} className='flex flex-col gap-y-1'>
                      <div className='text-primary'>Tools</div>
                      <div className='flex flex-wrap gap-x-2 '>
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        VSCode
                      </Badge>
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        Figma
                      </Badge>
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        Adobe Suite
                      </Badge>
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        Wordpress
                      </Badge>
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        Shopify
                      </Badge>
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        Google Analytics
                      </Badge>
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        Mailchimp
                      </Badge>
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        Klaviyo
                      </Badge>
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        JIRA
                      </Badge>
                      <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                        Hotjar
                      </Badge>
                      </div>
                    </motion.div>
                    
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase className='transition-all hover:-translate-y-2 cursor-pointer'/>
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} className='transition-all hover:-translate-y-2 cursor-pointer' />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                          
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;
