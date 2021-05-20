import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HeaderComponent, SideMenu, HamburguerMenu } from './styles';
import Button from '../button';
import logo from '../../assets/images/icons/logo.svg';
import eduIcon from '../../assets/images/icons/edu.svg';
import mobileIcon from '../../assets/images/icons/mobile.svg';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { pathname } = useLocation();

  const handleShowMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  return (
    <>
      <HeaderComponent>
        <div>
          <img src={logo} alt="Mooney logo" />

          <ul>
            <li className={pathname === '/' ? 'active' : ''}>
              <Link to="/">Início</Link>
            </li>
            <li
              className={
                pathname === '/mooneyedu' || pathname === '/mooneyapp'
                  ? 'active'
                  : ''
              }
              id="dropdown"
            >
              <Link to="#">Soluções</Link>
              <ul>
                <li className={pathname === '/mooneyedu' ? 'active' : ''}>
                  <Link to="/mooneyedu">
                    <span>
                      <img src={eduIcon} alt="MooneyEdu" />
                      #MooneyEdu
                    </span>
                  </Link>
                </li>
                <hr />
                <li className={pathname === '/mooneyapp' ? 'active' : ''}>
                  <Link to="/mooneyapp">
                    <span>
                      <img src={mobileIcon} alt="MooneyApp" />
                      #MooneyApp
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={pathname === '/partners' ? 'active tablet' : 'tablet'}
            >
              <Link to="/partners">Parceiros</Link>
            </li>
            <li className={pathname === '/blog' ? 'active tablet' : 'tablet'}>
              <Link to="/">Blog</Link>
            </li>
            <li
              className={pathname === '/contact' ? 'active tablet' : 'tablet'}
            >
              <Link to="/contact">Contato</Link>
            </li>
          </ul>

          <HamburguerMenu
            doRotation={showMenu}
            onClick={handleShowMenu}
            className="menu"
          >
            <hr className="one" />
            <hr className="two" />
          </HamburguerMenu>

          <Link className="became-partner" to="/sejamooney">
            <Button category="primary">Seja um parceiro</Button>
          </Link>
        </div>
      </HeaderComponent>

      <SideMenu isHidden={!showMenu}>
        <ul>
          <li className={pathname === '/' ? 'active' : ''}>
            <Link to="/mooneyedu">Início</Link>
          </li>
          <li
            className={
              pathname === '/mooneyedu' || pathname === '/mooneyapp'
                ? 'active'
                : ''
            }
            id="dropdown"
          >
            <Link to="#">Soluções</Link>
            <ul>
              <li className={pathname === '/mooneyedu' ? 'active' : ''}>
                <Link to="/mooneyedu">#MooneyEdu</Link>
              </li>
              <li className={pathname === '/mooneyapp' ? 'active' : ''}>
                <Link to="/mooneyapp">#MooneyApp</Link>
              </li>
            </ul>
          </li>
          <li className={pathname === '/partners' ? 'active tablet' : 'tablet'}>
            <Link to="/partners">Parceiros</Link>
          </li>
          <li className={pathname === '/blog' ? 'active tablet' : 'tablet'}>
            <Link to="/#">Blog</Link>
          </li>
          <li className={pathname === '/contact' ? 'active tablet' : 'tablet'}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>

        <Link
          onClick={handleShowMenu}
          className="became-partner"
          to="/sejamooney"
        >
          <Button category="white">Seja um parceiro</Button>
        </Link>
      </SideMenu>
    </>
  );
};

export default Header;
