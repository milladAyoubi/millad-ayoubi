import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';

const ProjectCard = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative bottom-none'>
      <CardHeader className='p-0'>
        {/* image */}
        <div className='relative  w-[100%]  xxsm:h-[180px] xsm:h-[300px] md:h-[440px] lg:h-[200px] xl:h-[280px] flex items-center justify-center  bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
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
            {project.stack.map((project, index) => {
              return (
                <div key={index}>
                    

                    <Badge className='text-sm font-medium mb-2 top-4 left-5'>
                {project}
              </Badge>
                  </div>
              );
            })}
          </div>
        
      </div>

      
    </Card>
  );
};

export default ProjectCard;
