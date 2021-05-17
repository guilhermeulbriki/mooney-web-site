import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
            <li className={pathname === '/' ? 'active' : ''}>Início</li>
            <li
              className={
                pathname === '/mooneyedu' ?? 'mooneyapp' ? 'active' : ''
              }
              id="dropdown"
            >
              Soluções
              <ul>
                <li className={pathname === '/mooneyedu' ? 'active' : ''}>
                  <span>
                    <img src={eduIcon} alt="MooneyEdu" />
                    #MooneyEdu
                  </span>
                </li>
                <hr />
                <li className={pathname === 'mooneyapp' ? 'active' : ''}>
                  <span>
                    <img src={mobileIcon} alt="MooneyApp" />
                    #MooneyApp
                  </span>
                </li>
              </ul>
            </li>
            <li
              className={pathname === '/partners' ? 'active tablet' : 'tablet'}
            >
              Parceiros
            </li>
            <li className={pathname === '/blog' ? 'active tablet' : 'tablet'}>
              Blog
            </li>
            <li
              className={pathname === '/contact' ? 'active tablet' : 'tablet'}
            >
              Contato
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

          <a className="became-partner" href="#">
            <Button category="primary">Seja um parceiro</Button>
          </a>
        </div>
      </HeaderComponent>

      <SideMenu isHidden={!showMenu}>
        <ul>
          <li className={pathname === '/' ? 'active' : ''}>Início</li>
          <li
            className={pathname === '/mooneyedu' ?? 'mooneyapp' ? 'active' : ''}
            id="dropdown"
          >
            Soluções
            <ul>
              <li className={pathname === '/mooneyedu' ? 'active' : ''}>
                #MooneyEdu
              </li>
              <li className={pathname === 'mooneyapp' ? 'active' : ''}>
                #MooneyApp
              </li>
            </ul>
          </li>
          <li className={pathname === '/partners' ? 'active tablet' : 'tablet'}>
            Parceiros
          </li>
          <li className={pathname === '/blog' ? 'active tablet' : 'tablet'}>
            Blog
          </li>
          <li className={pathname === '/contact' ? 'active tablet' : 'tablet'}>
            Contato
          </li>
        </ul>

        <a onClick={handleShowMenu} className="became-partner" href="#">
          <Button category="white">Seja um parceiro</Button>
        </a>
      </SideMenu>
    </>
  );
};

export default Header;
