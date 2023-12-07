// link (next js)


// next hooks
import { usePathname } from 'next/navigation';

// framer motion
import { motion } from 'framer-motion';
import {Link} from 'react-scroll'
const links = [
  { path: '#home', name: 'home' },
  { path: '#projects', name: 'my projects' },
  { path: '#aboutme', name: 'about me' },
  { path: '#contact', name: 'contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
          key={index}
            to={link.path}
            duration={500} spy={true} smooth={true}
            className={`capitalize cursor-pointer ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className='cursor-pointer'
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
