import airops from '../assets/airops.png';
import gss from '../assets/gss.png';
import edgewell from '../assets/edgewell.png';

let timelineElements = [
  {
    id: 1,
    title: 'Database & Automation Developer',
    location: 'Vancouver, ON',
    company: 'Claribase',
    points: [
      'Developed automations using Airtable’s API in JavaScript to retrieve data across various platforms for a communication database, increasing workflow efficiency',
      'Designed custom Python scripts to retrieve and pull data from various tables into one integrated relational table for an Enterprise level client',
      'Designed business databases in Airtable, leveraging Zapier automations to optimize business workflows. Then, developed third-party applications using Glide and Stackr to create service portals for clients',
    ],
    date: 'May 2023 - April 2024',
    icon: airops,
    iconBg: '#fff',
  },
  {
    id: 2,
    title: 'Data Analyst & Developer',
    location: 'Mississauga, ON',
    company: 'Edgewell Personal Care',
    points: [
      'Automated data visualizations using Tableau, Power Automate, and Power BI for real-time data updates, omitting the need for weekly reports thus increasing productivity for the forecasting team by 8%',
      'Connected Nielsen Market data to MySQL to optimize the relational database schema and reduce excessive data collection',
      'Incorporated Matplotlib Python libraries in order to make predictive charts for volatile items, aiding decision-making processes in the sales team company-wide',
    ],
    date: 'May 2022 - August 2022',
    icon: edgewell,
    iconBg: '#383E56',
  },
  {
    id: 3,
    title: 'Web Developer',
    location: 'Scarborough, ON',
    company: 'Games Sold Seperately',
    points: [
      'Built mock landing page wireframes using Figma and formatted a Shopify template with HTML CSS and Shopify Liquid',
      'Developed custom inquiry page using Node.js to calculate custom order prices and connected to Shopify’s REST API to automate product description emails to the creator',
      'Improved performance and uploaded new products on a weekly basis, resulting in 43% increase in new sessions and 23% sales conversion rate within the 2-4 month range of release',
    ],
    date: 'May 2021 - Nov 2021',
    icon: gss,
    iconBg: '#383E56',
  },
];

export default timelineElements;
