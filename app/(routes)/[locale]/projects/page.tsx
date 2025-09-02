// Internal Dependencies
import AppNavigation from '@/modules/app/AppNavigation';
import AppFooter from '@/modules/app/AppFooter';
import ProjectCard from '@/modules/project/ProjectCard';
import { getT } from '@/utils/i18nUtils/i18nServerHelpers';
import { getProjects } from '@/constants/projectData';

// Component Definition
export default async function Projects() {
  const { t } = await getT(['page_projects', 'data_projects', 'data_techs']);

  return (
    <div className='flex min-w-[100vw] flex-col'>
      <AppNavigation />
      <div className='mx-auto my-0 w-[70%]'>
        <div className='flex flex-col items-end border-b-4 border-[#00A3DA] pb-4'>
          <div className='text-6xl font-bold uppercase'>{t('earvin_full_name')}</div>
          <div className='mx-0 my-2 text-2xl'>{t('earvin_title')}</div>
        </div>
        <div className='mx-0 my-4 text-4xl text-[#868e96]'>{t('projects_page_title')}</div>
        <div className='mb-6 flex flex-col gap-6'>
          {getProjects(t).map((project) => {
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
