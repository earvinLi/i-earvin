// Internal Dependencies
import AppNavigation from '@/modules/AppNavigation';
import AppFooter from '@/modules/AppFooter';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/constants/projectData';

// Component Definition
export default function Projects() {
  return (
    <div className='flex min-w-[100vw] flex-col'>
      <AppNavigation />
      <div className='mx-auto my-0 w-[70%]'>
        <div className='flex flex-col items-end border-b-4 border-[#00A3DA] pb-4'>
          <div className='text-bold text-6xl uppercase'>Earvin Li</div>
          <div className='mx-0 my-2 text-2xl'>Full Stack Engineer</div>
        </div>
        <div className='mx-0 my-4 text-4xl text-[#868e96]'>Projects</div>
        <div className='mb-6 flex flex-col gap-6'>
          {projects.map((project) => {
            const { title, description, techList, image } = project;

            return (
              <ProjectCard
                key={title}
                title={title}
                description={description}
                techList={techList}
                image={image}
              />
            );
          })}
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
