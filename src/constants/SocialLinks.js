import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinksData = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: 'https://www.linkedin.com/in/marissa4mae/',
    style: 'rounded-tr-md',
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/marissa-anj',
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: 'mailto:marissa4mae@gmail.com',
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: 'https://drive.google.com/file/d/1RCCdaufowIIN6YYZyfBSIX8IPxGyWugf/view',
  },
];

export default SocialLinksData;
