// Internal Dependencies
import OptimizedImage from '@/components/OptimizedImage';

// Internal Dependencies
import { TypeTech } from '@/constants/projectData';

export type ProjectCardProps = {
  title: string;
  description: string;
  techList: readonly TypeTech[];
  image: string;
}

// Component Definition
export default function ProjectCard(props: ProjectCardProps) {
  const {
    title,
    description,
    techList,
    image,
  } = props;

  return (
    <div className="mb-6">
      <div className="flex items-center">
        {/* Todo: get rid of the extra 'div' */}
        <div>
          <div className="w-60 h-40">
            <OptimizedImage
              alt={`Cover image for ${title}`}
              src={image}
              width={240}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col grow ml-12">
          <div className="text-3xl leading-snug mb-2">{title}</div>
          <div className="text-base text-gray-500 leading-relaxed mb-2">{description}</div>
          <div>
            {techList.map((tech) => {
              const {
                techName,
                techDescription,
                techLink,
              } = tech;

              return (
                <li key={techName} className="mb-1 text-lg">
                  <a
                    href={techLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {techName}
                  </a>
                  &nbsp;-&nbsp;
                  {techDescription}
                </li>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="border-accent-2 mt-6" />
    </div>
  );
}
