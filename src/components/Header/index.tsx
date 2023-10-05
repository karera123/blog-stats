import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import './style.css'

const Header = () => {
  const location = useLocation();

  const paths = React.useMemo(() => {
    return {
      home: '/',
      homework: '/homework'
    }
  }, []);

  const setSelected = React.useCallback((path: string) => {
    const retval = location.pathname === path ? 'underline' : '';

    return retval;
  }, [location.pathname]);

  return (
    <header>
      <div id='tabs'>
        <nav>
          <ul>
            <li><Link to={paths.home}>
              <span className={setSelected(paths.home)}>
                Home
              </span>
            </Link></li>
            <li><Link to={paths.homework}>
              <span className={setSelected(paths.homework)}>
                Homework
              </span>
            </Link></li>
          </ul>
        </nav>
      </div>
      <div id='icons'>
        <a href='https://github.com/karera123/blog-stats'><FaGithub size={24} /></a>
      </div>
    </header>
  )
}

export default Header