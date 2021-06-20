import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import  Button  from '../Button';
import { Link } from 'react-router-dom';
import './styles.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useAuth } from '../../contexts/auth';

function Navbar() {
  const { signed, Logout } = useAuth();
  const [click, setClick] = useState(false);
  // eslint-disable-next-line
  const [button, setButton] = useState(true);

  function handleClickLogout() {
    Logout();
  }

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdFingerprint className='navbar-icon' />
              Webhook Bitbucket to Discord
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              {signed ? <li className='nav-item'>
                <Link to='/webhooks' className='nav-links' onClick={closeMobileMenu}>
                  Webhooks
                </Link>
              </li> : ''}
              {!signed ?
              <li className='nav-item'>
                <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                  Login
                </Link>
              </li>
              : '' }
              {!signed ?
              <li className='nav-item'>
                <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                  Register
                </Link>
              </li>
              : <li className='nav-item'>
              <Link to='' onClick={handleClickLogout} className='nav-links'>
                Sair
              </Link>
            </li> }
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
