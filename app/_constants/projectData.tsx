// External Dependencies
import { TFunction } from 'i18next';

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

const techs = (translationHelper: TFunction) =>
  ({
    NextJS: {
      techName: translationHelper('next_js.techName'),
      techDescription: translationHelper('next_js.techDescription'),
      techLink: 'https://nextjs.org/',
    },
    'Material UI': {
      techName: translationHelper('material_ui.techName'),
      techDescription: translationHelper('material_ui.techDescription'),
      techLink: 'https://mui.com/material-ui/',
    },
    ExpressJS: {
      techName: translationHelper('express_js.techName'),
      techDescription: translationHelper('express_js.techDescription'),
      techLink: 'https://expressjs.com/',
    },
    React: {
      techName: translationHelper('react.techName'),
      techDescription: translationHelper('react.techDescription'),
      techLink: 'https://react.dev/',
    },
    Redux: {
      techName: translationHelper('redux.techName'),
      techDescription: translationHelper('redux.techDescription'),
      techLink: 'https://redux.js.org/',
    },
    MobX: {
      techName: translationHelper('mobx.techName'),
      techDescription: translationHelper('mobx.techDescription'),
      techLink: 'https://mobx.js.org/',
    },
    JavaScript: {
      techName: translationHelper('javascript.techName'),
      techDescription: translationHelper('javascript.techDescription'),
      techLink: 'https://www.ecma-international.org/ecma-262/',
    },
    'React Native': {
      techName: translationHelper('react_native.techName'),
      techDescription: translationHelper('react_native.techDescription'),
      techLink: 'https://reactnative.dev/',
    },
    Firebase: {
      techName: translationHelper('firebase.techName'),
      techDescription: translationHelper('firebase.techDescription'),
      techLink: 'https://firebase.google.com/',
    },
    Jasmine: {
      techName: translationHelper('jasmine.techName'),
      techDescription: translationHelper('jasmine.techDescription'),
      techLink: 'https://jasmine.github.io/',
    },
    KnockoutJS: {
      techName: translationHelper('knockout_js.techName'),
      techDescription: translationHelper('knockout_js.techDescription'),
      techLink: 'https://knockoutjs.com/',
    },
    'Google Map': {
      techName: translationHelper('google_map.techName'),
      techDescription: translationHelper('google_map.techDescription'),
      techLink: 'https://developers.google.com/maps/',
    },
    Wikipedia: {
      techName: translationHelper('wikipedia.techName'),
      techDescription: translationHelper('wikipedia.techDescription'),
      techLink:
        'https://www.mediawiki.org/wiki/API:Main_page#Getting_started_with_MediaWiki_Action_API/',
    },
    Flutter: {
      techName: translationHelper('flutter.techName'),
      techDescription: translationHelper('flutter.techDescription'),
      techLink: 'https://flutter.dev/',
    },
    Dart: {
      techName: translationHelper('dart.techName'),
      techDescription: translationHelper('dart.techDescription'),
      techLink: 'https://dart.dev/',
    },
    Java: {
      techName: translationHelper('java.techName'),
      techDescription: translationHelper('java.techDescription'),
      techLink: 'https://www.java.com/',
    },
    Angular: {
      techName: translationHelper('angular.techName'),
      techDescription: translationHelper('angular.techDescription'),
      techLink: 'https://angular.dev/',
    },
    TypeScript: {
      techName: translationHelper('typescript.techName'),
      techDescription: translationHelper('typescript.techDescription'),
      techLink: 'https://www.typescriptlang.org/',
    },
    'Tailwind CSS': {
      techName: translationHelper('tailwind_css.techName'),
      techDescription: translationHelper('tailwind_css.techDescription'),
      techLink: 'https://tailwindcss.com/',
    },
    Prisma: {
      techName: translationHelper('prisma.techName'),
      techDescription: translationHelper('prisma.techDescription'),
      techLink: 'https://www.prisma.io/',
    },
  }) as const;

export const getProjects = (translationHelper: TFunction) =>
  [
    {
      title: translationHelper('i_earvin.title'),
      description: translationHelper('i_earvin.description'),
      techList: [
        techs(translationHelper)['TypeScript'],
        techs(translationHelper)['NextJS'],
        techs(translationHelper)['Tailwind CSS'],
        techs(translationHelper)['Prisma'],
      ],
      image: '/images/project_cover_i_earvin.jpg',
    },
    {
      title: translationHelper('where_have_you_been.title'),
      description: translationHelper('where_have_you_been.description'),
      techList: [
        techs(translationHelper)['NextJS'],
        techs(translationHelper)['Material UI'],
        techs(translationHelper)['ExpressJS'],
      ],
      image: '/images/project_cover_whyb.jpg',
    },
    {
      title: translationHelper('coder_evolution.title'),
      description: translationHelper('coder_evolution.description'),
      techList: [
        techs(translationHelper)['React'],
        techs(translationHelper)['Material UI'],
        techs(translationHelper)['Redux'],
      ],
      image: '/images/project_cover_coder.jpg',
    },
    {
      title: translationHelper('a_programming_language.title'),
      description: translationHelper('a_programming_language.description'),
      techList: [techs(translationHelper)['JavaScript']],
      image: '/images/project_cover_programming_language.jpg',
    },
    {
      title: translationHelper('beer_sharer.title'),
      description: translationHelper('beer_sharer.description'),
      techList: [
        techs(translationHelper)['React Native'],
        techs(translationHelper)['Redux'],
        techs(translationHelper)['Firebase'],
      ],
      image: '/images/project_cover_beer.jpg',
    },
    {
      title: translationHelper('neighborhood_map.title'),
      description: translationHelper('neighborhood_map.description'),
      techList: [
        techs(translationHelper)['KnockoutJS'],
        techs(translationHelper)['Google Map'],
        techs(translationHelper)['Wikipedia'],
      ],
      image: '/images/project_cover_neighborhood.jpg',
    },
    {
      title: translationHelper('reddit_mockup.title'),
      description: translationHelper('reddit_mockup.description'),
      techList: [
        techs(translationHelper)['React'],
        techs(translationHelper)['Redux'],
        techs(translationHelper)['Material UI'],
      ],
      image: '/images/project_cover_reddit.jpg',
    },
    {
      title: translationHelper('todo.title'),
      description: translationHelper('todo.description'),
      techList: [
        techs(translationHelper)['React'],
        techs(translationHelper)['Redux'],
        techs(translationHelper)['MobX'],
      ],
      image: '/images/project_cover_todo.jpg',
    },
    {
      title: translationHelper('try_some_flutter.title'),
      description: translationHelper('try_some_flutter.description'),
      techList: [
        techs(translationHelper)['Flutter'],
        techs(translationHelper)['Dart'],
      ],
      image: '/images/project_cover_flutter.jpg',
    },
    {
      title: translationHelper('automated_multilingual_tester.title'),
      description: translationHelper(
        'automated_multilingual_tester.description',
      ),
      techList: [techs(translationHelper)['Java']],
      image: '/images/project_cover_multilingual.jpg',
    },
    {
      title: translationHelper('tour_of_heroes.title'),
      description: translationHelper('tour_of_heroes.description'),
      techList: [techs(translationHelper)['Angular']],
      image: '/images/project_cover_heroes.jpg',
    },
    {
      title: translationHelper('feed_reader_testing.title'),
      description: translationHelper('feed_reader_testing.description'),
      techList: [techs(translationHelper)['Jasmine']],
      image: '/images/project_cover_feed_reader.jpg',
    },
  ] as const;
