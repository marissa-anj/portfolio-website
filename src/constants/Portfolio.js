import anissla from '../assets/portfolio/anissla.png';
import portfolio from '../assets/portfolio/portfolio.png';
import loading from '../assets/portfolio/loading.png';

const PortfoliosData = [
  {
    id: 1,
    src: anissla,
    name: 'Anissla',
    date: 'March 2023 - April 2023',
    description:
      'An e-commerce web platform for athletic apparel. Users are allowed to browse catalogues, purchase athletic apparel, and file complaints. Administrators may control the inventory, check order history, and set user permissions. This website is hosted with AWS services.',
    tags: ['Python', 'Django', 'AWS Services', 'HTML', 'CSS', 'Javascript'],
    source_code_link: 'https://github.com/marissa-anj',
  },
  {
    id: 2,
    src: portfolio,
    name: 'Portfolio Website',
    date: 'August 2023',
    description:
      'A portfolio web app to showcase my personal developer experience in a brief and convenient layout. This site was hosted through a CI/CD pipeline on Netlify.',
    tags: ['React', 'Tailwind', 'HTML', 'CSS', 'Javascript', 'CI/CD'],
    source_code_link: 'https://github.com/marissa-anj',
    demo: 'https://github.com/marissa-anj',

  },
  {
    id: 3,
    src: loading,
    name: 'Data Mining (WIP)',
    date: 'October 2023 - Present',
    description:
      'An exploration into Hadoop, Hive and Tensorflow. More to come!',
    tags: ['Hadoop', 'Hive', 'Tensorflow'],
    source_code_link: 'https://github.com/marissa-anj',
    demo: 'https://github.com/marissa-anj',

  },
];

export default PortfoliosData;
