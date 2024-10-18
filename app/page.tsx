import ProjectCard from './_component/ProjectCard';

import pageStyles from './page.module.css';

const projects = [
  {
    title: 'Where Have You Been',
    description: 'A SPA where you can collect and sell your memories (in parts) built with a number of open-source projects including:',
    techList: [
      {
        techName: 'NextJS',
        techDescription: 'The React framework!',
        techLink: 'https://nextjs.org/',
      },
      {
        techName: 'Material UI',
        techDescription: 'Material Design UI components',
        techLink: 'https://mui.com/material-ui/',
      },
      {
        techName: 'Express',
        techDescription: 'The NodeJS framework!',
        techLink: 'https://expressjs.com/',
      },
    ],
  },
];

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
      <div className={Page_bodySectionStyle}>
        <div className={Page_titleContainerStyle}>
          <div className={Page_titleStyle}>Earvin Li</div>
          <div className={Page_subtitleStyle}>Full Stack Engineer</div>
        </div>
        <div className={Page_projectTitleStyle}>Projects</div>
        <div className={Page_projectSectionStyle}>
          {projects.map((project) => {
            const {
              title,
              description,
              techList,
            } = project;

            return (
              <ProjectCard
                key={title}
                title={title}
                description={description}
                techList={techList}
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
