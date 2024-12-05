/* eslint-disable @typescript-eslint/dot-notation */

const techs = {
  nextJS: {
    techName: 'NextJS',
    techDescription: 'The React framework!',
    techLink: 'https://nextjs.org/',
  },
  materialUI: {
    techName: 'Material UI',
    techDescription: 'Material Design UI components',
    techLink: 'https://mui.com/material-ui/',
  },
  express: {
    techName: 'Express',
    techDescription: 'The NodeJS framework!',
    techLink: 'https://expressjs.com/',
  },
  react: {
    techName: 'React',
    techDescription: 'The library for modern web apps!',
    techLink: 'https://react.dev/',
  },
  redux: {
    techName: 'Redux',
    techDescription: 'Frontend state management solution!',
    techLink: 'https://react.dev/',
  },
  mobX: {
    techName: 'MobX',
    techDescription: 'An unopinionated frontend state management solution',
    techLink: 'https://mobx.js.org/',
  },
  javascript: {
    techName: 'JavaScript',
    techDescription: 'Based on which we find the miracles of frontend and more for more then 25 years!',
    techLink: 'https://www.ecma-international.org/ecma-262/',
  },
  reactNative: {
    techName: 'React Native',
    techDescription: 'React for mobile apps!',
    techLink: 'https://reactnative.dev/',
  },
  firebase: {
    techName: 'Firebase',
    techDescription: 'Google\'s NoSQL database!',
    techLink: 'https://firebase.google.com/',
  },
  jasmine: {
    techName: 'Jasmine',
    techDescription: 'JavaScript testing!',
    techLink: 'https://jasmine.github.io/',
  },
  knockout: {
    techName: 'Knockout',
    techDescription: 'Dynamic JavaScript UIs with the MVVM pattern!',
    techLink: 'https://knockoutjs.com/',
  },
  googleMap: {
    techName: 'Google Map',
    techDescription: 'Google Map APIs for geographic requirements!',
    techLink: 'https://developers.google.com/maps/',
  },
  wikipedia: {
    techName: 'Wikipedia',
    techDescription: 'Wikipedia APIs for wiki requirements!',
    techLink: 'https://www.mediawiki.org/wiki/API:Main_page#Getting_started_with_MediaWiki_Action_API/',
  },
  flutter: {
    techName: 'Flutter',
    techDescription: 'Build, test, and deploy beautiful mobile, web, desktop, and embedded apps with one library.',
    techLink: 'https://flutter.dev/',
  },
  dart: {
    techName: 'Dart',
    techDescription: 'Object-oriented, class-based, garbage-collected language with C-style syntax used to develop web and mobile apps as well as server and desktop applications',
    techLink: 'https://dart.dev/',
  },
  java: {
    techName: 'Java',
    techDescription: 'The Java! And designed to have as few implementation dependencies as possible',
    techLink: 'https://www.java.com/',
  },
  angular: {
    techName: 'Angular',
    techDescription: 'Web framework that empowers developers to build fast, reliable applicationsa web framework that empowers developers to build fast, reliable applications',
    techLink: 'https://angular.dev/',
  },
};

export const projects = [
  {
    title: 'Where Have You Been',
    description: 'A SPA where you can collect and sell your memories (in parts) built with a number of open-source projects including:',
    techList: [techs['nextJS'], techs['materialUI'], techs['express']],
    image: '/project_cover_whyb.jpg',
  },
  {
    title: 'Coder Evolution',
    description: 'Coder Evolution helps you record all your learning progress and knowledge with both Markdown and Code.',
    techList: [techs['react'], techs['materialUI'], techs['redux']],
    image: '/project_cover_whyb.jpg',
  },
  {
    title: 'A Programming Language',
    description: 'Using plain JavaScript to write a programming language.',
    techList: [techs['javascript']],
    image: '/project_cover_whyb.jpg',
  },
  {
    title: 'Beer Sharer',
    description: 'UReact Native and Redux help share your favorite beers with friends. Cheers!!!',
    techList: [techs['reactNative'], techs['redux'], techs['firebase']],
    image: '/project_cover_whyb.jpg',
  },
  {
    title: 'Neighborhood Map',
    description: 'Use KnockOut to make the most of Google Map API and MediaWiki API.',
    techList: [techs['knockout'], techs['googleMap'], techs['wikipedia']],
    image: '/project_cover_whyb.jpg',
  },
  {
    title: 'Reddit Mockup',
    description: 'This is a very experimental project (of EPAM training period) to mimic Reddit with a new UI built with React, Redux and Material-UI which has a mobile version as well with React Native.',
    techList: [techs['react'], techs['redux'], techs['materialUI']],
    image: '/project_cover_whyb.jpg',
  },
  {
    title: 'Todo',
    description: 'A typical Todo app whose state managements can be switched between Redux and MobX',
    techList: [techs['react'], techs['redux'], techs['mobX']],
    image: '/project_cover_whyb.jpg',
  },
  {
    title: 'Try Some Flutter',
    description: 'A practice project to learn Flutter and Dart basics',
    techList: [techs['flutter'], techs['dart']],
    image: '/project_cover_whyb.jpg',
  },
  {
    title: 'Automated Multilingual Tester',
    description: 'This is a tool for auto language multilingual testing (LQA)',
    techList: [techs['java']],
    image: '/project_cover_whyb.jpg',
  },
  {
    title: 'Tour of Heroes',
    description: 'A practice project to learn Angular basics',
    techList: [techs['angular']],
    image: '/project_cover_whyb.jpg',
  },
  {
    title: 'Feed Reader Testing',
    description: 'A test-driven practice project with Jasmine',
    techList: [techs['jasmine']],
    image: '/project_cover_whyb.jpg',
  },
];
