// Internal Dependencies
import OptimizedImage from '@/components/OptimizedImage';

// Internal Dependencies
import { Tech } from '@/constants/projectData';

export type ProjectCardProps = {
  title: string;
  description: string;
  techList: readonly Tech[];
  image: string;
};

// Component Definition
export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, techList, image } = props;

  return (
    <div className='border-b-2 border-gray-200 pb-6 last:border-b-0 last:pb-0'>
      <div className='flex items-center'>
        {/* Todo: get rid of the extra 'div' */}
        <div>
          <div className='relative h-[160px] w-[240px] object-cover'>
            <OptimizedImage alt={`Cover image for ${title}`} src={image} fill />
          </div>
        </div>
        <div className='ml-12 flex grow flex-col gap-2'>
          <div className='text-3xl leading-snug'>{title}</div>
          <div className='text-base leading-relaxed text-gray-500'>{description}</div>
          <ul className='list-disc pl-5'>
            {techList.map((tech) => {
              const { techName, techDescription, techLink } = tech;

              return (
                <li key={techName} className='mb-1 text-lg'>
                  <a
                    href={techLink}
                    target='_blank'
                    rel='noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    {techName}
                  </a>
                  &nbsp;-&nbsp;
                  {techDescription}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
