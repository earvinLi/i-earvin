import Image from 'next/image';

import projectCardStyles from './ProjectCard.module.css';

const {
  Page_projectCardContainerStyle,
  Page_projectCardTextSectionStyle,
  Page_projectCardTitleStyle,
  Page_projectCardDescriptionStyle,
  Page_projectCardTechListStyle,
  Page_projectCardTechListItemStyle,
  Page_projectCardTechLinkStyle,
} = projectCardStyles;

type Tech = {
  techName: string;
  techDescription: string;
  techLink: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  techList: Tech[];
  image: string;
}

function ProjectCard(props: ProjectCardProps) {
  const {
    title,
    description,
    techList,
    image,
  } = props;

  return (
    <div className={Page_projectCardContainerStyle}>
      <Image
        src={image}
        width={320}
        height={240}
        alt={title}
      />
      <div className={Page_projectCardTextSectionStyle}>
        <div className={Page_projectCardTitleStyle}>{title}</div>
        <div className={Page_projectCardDescriptionStyle}>{description}</div>
        <div className={Page_projectCardTechListStyle}>
          {techList.map((tech: Tech) => {
            const {
              techName,
              techDescription,
              techLink,
            } = tech;

            return (
              <li key={techName} className={Page_projectCardTechListItemStyle}>
                <a href={techLink} target='_blank' className={Page_projectCardTechLinkStyle}>{techName}</a> - {techDescription}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
