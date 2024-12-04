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
];
