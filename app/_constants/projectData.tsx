export type TypeTech = {
  techName: string;
  techDescription: string;
  techLink: string;
};

export type TypeProject = {
  title: string;
  description: string;
  techList: TypeTech[];
  image: string;
};

const techs = {
  NextJS: {
    techName: 'NextJS',
    techDescription: 'The React framework!',
    techLink: 'https://nextjs.org/',
  },
  'Material UI': {
    techName: 'Material UI',
    techDescription: 'Material Design UI components',
    techLink: 'https://mui.com/material-ui/',
  },
  ExpressJS: {
    techName: 'ExpressJS',
    techDescription: 'The NodeJS framework!',
    techLink: 'https://expressjs.com/',
  },
  React: {
    techName: 'React',
    techDescription: 'The library for modern web apps!',
    techLink: 'https://react.dev/',
  },
  Redux: {
    techName: 'Redux',
    techDescription: 'Frontend state management solution!',
    techLink: 'https://redux.js.org/',
  },
  MobX: {
    techName: 'MobX',
    techDescription: 'An unopinionated frontend state management solution',
    techLink: 'https://mobx.js.org/',
  },
  JavaScript: {
    techName: 'JavaScript',
    techDescription:
      'Based on which we find the miracles of frontend and more for more then 25 years!',
    techLink: 'https://www.ecma-international.org/ecma-262/',
  },
  'React Native': {
    techName: 'React Native',
    techDescription: 'React for mobile apps!',
    techLink: 'https://reactnative.dev/',
  },
  Firebase: {
    techName: 'Firebase',
    techDescription: "Google's NoSQL database!",
    techLink: 'https://firebase.google.com/',
  },
  Jasmine: {
    techName: 'Jasmine',
    techDescription: 'JavaScript testing!',
    techLink: 'https://jasmine.github.io/',
  },
  KnockoutJS: {
    techName: 'KnockoutJS',
    techDescription: 'Dynamic JavaScript UIs with the MVVM pattern!',
    techLink: 'https://knockoutjs.com/',
  },
  'Google Map': {
    techName: 'Google Map',
    techDescription: 'Google Map APIs for geographic requirements!',
    techLink: 'https://developers.google.com/maps/',
  },
  Wikipedia: {
    techName: 'Wikipedia',
    techDescription: 'Wikipedia APIs for wiki requirements!',
    techLink:
      'https://www.mediawiki.org/wiki/API:Main_page#Getting_started_with_MediaWiki_Action_API/',
  },
  Flutter: {
    techName: 'Flutter',
    techDescription:
      'Build, test, and deploy beautiful mobile, web, desktop, and embedded apps with one library.',
    techLink: 'https://flutter.dev/',
  },
  Dart: {
    techName: 'Dart',
    techDescription:
      'Object-oriented, class-based, garbage-collected language with C-style syntax used to develop web and mobile apps as well as server and desktop applications',
    techLink: 'https://dart.dev/',
  },
  Java: {
    techName: 'Java',
    techDescription:
      'The Java! And designed to have as few implementation dependencies as possible',
    techLink: 'https://www.java.com/',
  },
  Angular: {
    techName: 'Angular',
    techDescription:
      'Web framework that empowers developers to build fast, reliable applications',
    techLink: 'https://angular.dev/',
  },
  TypeScript: {
    techName: 'TypeScript',
    techDescription:
      'A typed superset of JavaScript that compiles to plain JavaScript',
    techLink: 'https://www.typescriptlang.org/',
  },
  'Tailwind CSS': {
    techName: 'Tailwind CSS',
    techDescription:
      'Utility-first CSS framework for rapidly building custom designs',
    techLink: 'https://tailwindcss.com/',
  },
  Prisma: {
    techName: 'Prisma',
    techDescription: 'An ORM that makes it much easier to work with databases',
    techLink: 'https://www.prisma.io/',
  },
} as const;

export const projects = [
  {
    title: 'I Earvin',
    description:
      'My personal page where I started to collect my projects, write posts and experience new techs.',
    techList: [
      techs['TypeScript'],
      techs['NextJS'],
      techs['Tailwind CSS'],
      techs['Prisma'],
    ],
    image: '/images/project_cover_i_earvin.jpg',
  },
  {
    title: 'Where Have You Been',
    description:
      'A SPA where you can collect and sell your memories (in parts) built with a number of open-source projects including:',
    techList: [techs['NextJS'], techs['Material UI'], techs['ExpressJS']],
    image: '/images/project_cover_whyb.jpg',
  },
  {
    title: 'Coder Evolution',
    description:
      'Coder Evolution helps you record all your learning progress and knowledge with both Markdown and Code.',
    techList: [techs['React'], techs['Material UI'], techs['Redux']],
    image: '/images/project_cover_coder.jpg',
  },
  {
    title: 'A Programming Language',
    description: 'Using plain JavaScript to write a programming language.',
    techList: [techs['JavaScript']],
    image: '/images/project_cover_programming_language.jpg',
  },
  {
    title: 'Beer Sharer',
    description:
      'UReact Native and Redux help share your favorite beers with friends. Cheers!!!',
    techList: [techs['React Native'], techs['Redux'], techs['Firebase']],
    image: '/images/project_cover_beer.jpg',
  },
  {
    title: 'Neighborhood Map',
    description:
      'Use KnockOut to make the most of Google Map API and MediaWiki API.',
    techList: [techs['KnockoutJS'], techs['Google Map'], techs['Wikipedia']],
    image: '/images/project_cover_neighborhood.jpg',
  },
  {
    title: 'Reddit Mockup',
    description:
      'This is a very experimental project (of EPAM training period) to mimic Reddit with a new UI built with React, Redux and Material-UI which has a mobile version as well with React Native.',
    techList: [techs['React'], techs['Redux'], techs['Material UI']],
    image: '/images/project_cover_reddit.jpg',
  },
  {
    title: 'Todo',
    description:
      'A typical Todo app whose state managements can be switched between Redux and MobX',
    techList: [techs['React'], techs['Redux'], techs['MobX']],
    image: '/images/project_cover_todo.jpg',
  },
  {
    title: 'Try Some Flutter',
    description: 'A practice project to learn Flutter and Dart basics',
    techList: [techs['Flutter'], techs['Dart']],
    image: '/images/project_cover_flutter.jpg',
  },
  {
    title: 'Automated Multilingual Tester',
    description: 'This is a tool for auto language multilingual testing (LQA)',
    techList: [techs['Java']],
    image: '/images/project_cover_multilingual.jpg',
  },
  {
    title: 'Tour of Heroes',
    description: 'A practice project to learn Angular basics',
    techList: [techs['Angular']],
    image: '/images/project_cover_heroes.jpg',
  },
  {
    title: 'Feed Reader Testing',
    description: 'A test-driven practice project with Jasmine',
    techList: [techs['Jasmine']],
    image: '/images/project_cover_feed_reader.jpg',
  },
] as const;
