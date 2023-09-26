import developer from "../assets/developer.png";
import clouddeveloper from "../assets/cloud-practitioner.png";


const CertificatesData = [
  {
    id: 1,
    src: clouddeveloper,
    title: 'AWS Cloud Practitioner',
    style: 'shadow-gray-600',
    href: '/cloudpractitioner.pdf',
    download: true,
  },
  {
    id: 2,
    src: developer,
    title: 'AWS Developer Associate',
    style: 'shadow-blue-500',
    href: '/developer.pdf',
    download: true,
  },
];

export default CertificatesData;
