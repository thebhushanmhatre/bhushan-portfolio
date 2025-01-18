import { certificates } from './certificates';
import { projects } from './projects';

export const DATA = {
  projects,
  certificates,
  contacts: [
    {
      contId: 1,
      href: 'https://www.linkedin.com/in/bhushanmhatre',
      name: 'linkedin',
      icon: 'fa fa-linkedin fa-lg',
      color: '#2977c9',
    },
    {
      contId: 2,
      href: 'https://github.com/thebhushanmhatre',
      name: 'github',
      icon: 'fa fa-github fa-lg',
      color: 'black',
    },
    {
      contId: 3,
      href: 'https://www.freecodecamp.org/thebhushanmhatre',
      name: 'freeCodeCamp',
      icon: 'fa fa-free-code-camp fa-lg',
      color: 'green',
    },
    {
      contId: 7,
      href: 'https://leetcode.com/u/bhushanmhatre/',
      name: 'leetcode',
      icon: 'fas fa-code fa-lg',
      color: 'orange',
    },
    {
      contId: 5,
      href: 'https://www.hackerrank.com/bhushanmhatre',
      name: 'hackerrank',
      icon: 'fab fa-hackerrank fa-lg',
      color: '#1ba94c',
    },
    {
      contId: 4,
      href: 'https://codepen.io/thebhushanmhatre/',
      name: 'codepen',
      icon: 'fa fa-codepen fa-lg',
      color: 'black',
    },
    {
      contId: 6,
      href: 'https://www.kaggle.com/thebhushanmhatre',
      name: 'kaggle',
      icon: 'fab fa-kaggle fa-lg',
      color: '#20BEFF',
    },
  ],
  education: [
    {
      href: 'https://vjti.ac.in/',
      name: 'Veermata Jijabai Techological Institute',
      shortname: 'V.J.T.I.',
      src: 'assets/images/vjti_logo.jpg',
      year: '2019',
      degree: 'B.Tech.',
    },
    {
      href: 'https://www.patkarvardecollege.edu.in/',
      name: 'Patkar College of Science',
      shortname: 'Patkar College',
      src: 'assets/images/patkar_logo.jpg',
      year: '2015',
      degree: 'Junior College (Science)',
    },
    {
      href: 'https://en.wikipedia.org/wiki/Saint_Francis_D%27Assisi_High_School',
      name: "St. Francis D'Assisi High School",
      shortname: 'S.F.H.S.',
      src: 'assets/images/sfhs_logo.jpg',
      year: '2013',
      degree: 'School',
    },
  ],
};
