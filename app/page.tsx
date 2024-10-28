import AppNavigation from '@/modules/AppNavigation';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import { projects } from '@/constants/projectData';

import pageStyles from './page.module.css';

const {
  Page_pageStyle,
  Page_bodySectionStyle,
  Page_titleContainerStyle,
  Page_titleStyle,
  Page_subtitleStyle,
  Page_projectTitleStyle,
  Page_projectSectionStyle,
  Page_footerSectionStyle,
  Page_copyrightTextStyle,
} = pageStyles;

function Home() {
  return (
    <div className={Page_pageStyle}>
      <AppNavigation />
      <div className={Page_bodySectionStyle}>
        <div className={Page_titleContainerStyle}>
          <div className={Page_titleStyle}>Earvin Li</div>
          <div className={Page_subtitleStyle}>Full Stack Engineer</div>
        </div>
        <div className={Page_projectTitleStyle}>Projects</div>
        <div className={Page_projectSectionStyle}>
          {projects.map((project: ProjectCardProps) => {
            const {
              title,
              description,
              techList,
              image,
            } = project;

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
      <footer className={Page_footerSectionStyle}>
        <div className={Page_copyrightTextStyle}>&copy; Earvin Li</div>
      </footer>
    </div>
  );
}

export default Home;
