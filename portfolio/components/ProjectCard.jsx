import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';
const projectData = [
  {
    image: '/work/Ionic-2.png',
    category: 'fullstack',
    name: 'Ionic Eccomerce Website',
    description:
      'Ionic is a complete eCommerce shopping website. From the design phase. It offers an intuitive shopping experience that is user centric.',
    link: 'https://ionic-kappa.vercel.app/',
    github: '/',
    stack:['React.js','Next.js','Sanity.io','Stripe API','Full Stack', 'UX/UI Design Process']
  },
  {
    image: '/work/Renew-1.png',
    category: 'ux/ui',
    name: 'RENEW eCommerce UX Case Study',
    description:
      'Utilizing Design Thinking, this project empathizes with users, defines challenges, ideates innovative solutions, prototypes, and iteratively tests improvements.',
    link: 'https://www.figma.com/file/juxRQq2YIWJuVImYxgwRCS/RENEW?type=design&node-id=1%3A44&mode=design&t=UICB7REwydaYexYI-1',
    github: '/',
    stack:['UX/UI Design Process','Design Thinking','UX Research','Figma Prototyped','User Flow']
  },
  {
    image: '/work/Voyager-3.png',
    category: 'frontend',
    name: 'Voyager Car Rental',
    description:
      'a user-friendly car rental website developed with Next.js and React, providing a seamless platform for users to effortlessly browse and rent from a diverse fleet of vehicles.',
    link: 'https://voyager-ku46.vercel.app/',
    github: '/',
    stack:['React.js','Next.js','Tailwind CSS','Car API','JavaScript','Framer Motion']
  },
  {
    image: '/work/Task.png',
    category: 'ux/ui',
    name: '2DO Task Manager Project',
    description:
      '2DO is a intuitive task manager application that focuses on providing struggling students with the means to consistently get their daily tasks completed. ',
    link: 'https://www.figma.com/file/R3KRcDMFxue1SLmIBKHBaJ/2DO%3A-Task-Manager-Application?type=design&node-id=1-2520&mode=design',
    github: '/',
    stack:['UX Research','UX/UI Process','User Task Study','Mobile First Design','Interactive Prototype']
  },
  {
    image: '/work/Artemis.png',
    category: 'frontend',
    name: 'Artemis Payment Website',
    description:
      'a brochure website showcasing personally crafted, cutting-edge UI/UX designs optimized in Figma.Focusing optimal website performance and ease of navigation.',
    link: 'https://artemis-payment.netlify.app//',
    github: '/',
    stack:['React.js','Next.js','JavaScript','Tailwind CSS','Framer Motion','UX Optimized']
  },
  {
    image: '/work/Bobahub-8.png',
    category: 'frontend',
    name: 'Boba Bliss Ordering Website',
    description:
      'Boba Bliss streamlines bubble tea ordering. It offers seamless customization—select bases, flavors, toppings, and sweetness. Real-time cost calculations aid transparency in the cart.',
    link: 'https://boba-bliss.vercel.app/',
    github: '/',
    stack:['Next.js','React.js','State Context','Product Cart Customization ','Tailwind CSS']
  },
  
 
  {
    image: '/work/Wam.png',
    category: 'ux/ui',
    name: 'Fitness UX Case Study',
    description:
      'One of the biggest challenges for Gen Z is their sedentary lifestyle. This Case Study was designed so that it helps/assists Gen Z achieve their fitness goals by offering services tailored to their fitness needs.',
    link: 'https://www.figma.com/proto/DCt5Ri5Zj8E3UoVlf3TpYN/Weight-A-Minute-Fitness-Case-Study?page-id=0%3A1&type=design&node-id=9-274&viewport=-317%2C3156%2C0.26&t=0i951ZB0TMLuAK8y-1&scaling=scale-down-width&starting-point-node-id=9%3A274&mode=design',
    github: '/',
    stack:['UX/UI Design Process','Design Thinking','UX Research','Figma Prototyped']
  },
  {
    image: '/work/2DO-3.png',
    category: 'ux/ui',
    name: 'Acedemic Website UX Research',
    description:
      'The following project is a study into how students interact with their respective institutions academic websites. It follows up on the research phase, quantifying the data obtained for further analysis.',
    link: '/',
    github: '/',
    stack:['User Reaserch','Data Analysis','Quantitative Research']
  },
  
  {
    image: '/work/Unova-2.png',
    category: 'fullstack',
    name: 'Unova Chat Application',
    description:
      'Unova Chat is a real-time chat application built with Node.js, Express.js, HTML, CSS, JavaScript, and Socket.io. With Unova Chat, users can join a specific room and exchange messages with others in the same room. ',
    link: '/',
    github: '/',
    stack:['NodeJS','ExpressJS', 'Socket.io','ReactJS','HTML5','CSS3','Mobile Responsive']
  },
  {
    image: '/work/Venti.png',
    category: 'frontend',
    name: 'Unova Chat Application',
    description:
      'A UI challenge given to me on Figma by Cozey. I had to teach myself the varients of figma in order to be able to sucessfully complete the interactive prototype.',
    link: 'https://venti-website.netlify.app/',
    github: '/',
    stack:['JavaScript','HTML5','CSS3','Mobile Responsive','Bootstrap 5']
  },
  {
    image: '/work/Pyro.png',
    category: 'fullstack',
    name: 'Pyro Andriod Application',
    description:
      'After completing their exercise, users can enter the calories they have burned for the workout through the application. They must enter the calories they burned, their type of exercise performed, and the duration. ',
    link: 'https://github.com/milladAyoubi/Chat-Application',
    github: '/',
    stack:['Java','Android Development','FireBase','SQLite','QA Testing']
  },

  {
    image: '/work/Aequitas-1.png',
    category: 'ux/ui',
    name: 'Unova Chat Application',
    description:
      'Aequitas Partners is a prominent search firm specializing in Growth Stage companies within the Healthcare Technology sector. The companys website serves as a crucial touchpoint for potential clients.',
    link: 'https://www.figma.com/file/SZDd6xb2St2dbPsHMRTBoU/Aquitas-UI-Redesign?type=design&node-id=14%3A48&mode=design&t=NyF2RQbJpaOkZk9A-1',
    github: '/',
    stack:['Website Redesign','Usability Improvments','Prototypes']
  },
  {
    image: '/work/Cozey.png',
    category: 'ux/ui',
    name: 'Unova Chat Application',
    description:
      'A UI challenge given to me on Figma by Cozey. I had to teach myself the varients of figma in order to be able to sucessfully complete the interactive prototype.',
    link: 'https://www.figma.com/file/HCjI6467uEc5fiQO6l01hK/COZEY-DESIGN-CHALLENGE?type=design&node-id=0%3A1&mode=design&t=Geib0IrUd9RdoDhJ-1',
    github: '/',
    stack:['Interactive Prototype','Feature Design','Design Guidelines']
  },
];
const ProjectCard = ({ project }) => {

  
  return (
    <Card className='group overflow-hidden relative bottom-none'>
      <CardHeader className='p-0'>
        {/* image */}
        <div className='relative  w-[100%] h-[200px]  xxsm:h-[220px] xsm:h-[300px] md:h-[440px] lg:h-[190px] xl:h-[280px] flex items-center justify-center  bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <Image
            className='hover:scale-110 !w-[100%] !h-[100%] transition-all absolute bottom-0 shadow-2xl'
            src={project.image}
            width={432}
            height={290}
            alt=''
            priority
          />
          {/* btn links */}
          <div className='flex gap-x-4'>
            <Link
              href={project.link}
              className='bg-secondary !bg-dark1 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
            >
              <Link2Icon className='text-white' />
            </Link>
            
          </div>
        </div>
      </CardHeader>
      
      <div className='h-full px-8 py-6 flex flex-col gap-y-2'>
       
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className='text-muted-foreground text-lg'>{project.description}</p>

        <div className='text-sm flex flex-row flex-wrap gap-x-4 mt-4'>
           {/* {project.stack.map((project, index) => {
            
              return (
                <div key={index}>
                    

                    <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                {project}
              </Badge>
                  </div>
              );
            })}*/}
          </div>
        
      </div>

      
    </Card>
  );
};

export default ProjectCard;
