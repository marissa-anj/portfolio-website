import anissla from '../assets/portfolio/anissla.png';
import optimeet from '../assets/portfolio/optimeet.png';
import lionfish from '../assets/portfolio/lionfish.png';
const PortfoliosData = [
  {
    id: 1,
    src: anissla,
    name: 'Anissla',
    date: 'March 2022',
    description:
      'An e-commerce web platform for athletic apparel. Users are allowed to browse catalogues, purchase athletic apparel, and file complaints. Administrators may control the inventory, check order history, and set user permissions. This website is hosted with AWS services.',
    tags: ['Python', 'Django', 'AWS Services', 'HTML', 'CSS', 'Javascript'],
    source_code_link: 'https://github.com/marissa-anj/Anissla',
  },
  {
    id: 2,
    src: optimeet,
    name: 'Optimeet',
    date: 'Dec 2023',
    description:
      'Collaborative project of a website with serverless algorithms to find locations to hang out with your friends, complete with google authentification and google map functions',
    tags: ['Python', 'Javascript','Django','React', 'Tailwind', 'HTML', 'CSS'],
    source_code_link: 'https://github.com/marissa-anj/optimeet',
    demo: 'https://github.com/marissa-anj',

  },
  {
    id: 3,
    src: lionfish,
    name: 'Lionfish AI Model',
    date: 'April 2024',
    description:
      'Lionfish are one of the most dangerous invasive species in the world. This is why image classification AI is useful in the fight against Lionfish. For a cp468 final, we created a lionfish classification AI model with tensorflow and python, using a dataset from RoboFlow. Our graphs were produced with Tensorboard.',
    tags: ['Python', 'Tensorflow', 'Tensorboard'],
    source_code_link: 'https://github.com/marissa-anj/Lionfish-Classification-Model',


  },
  // {
  //   id: 4,
  //   src: portfolio,
  //   name: 'Portfolio Website',
  //   date: 'August 2023',
  //   description:
  //     'A portfolio web app to showcase my personal developer experience in a brief and convenient layout. This site was hosted through a CI/CD pipeline on Netlify.',
  //   tags: ['React', 'Tailwind', 'HTML', 'CSS', 'Javascript', 'CI/CD'],
  //   source_code_link: 'https://github.com/marissa-anj',
  //   demo: 'https://github.com/marissa-anj',
  // },

];

export default PortfoliosData;
