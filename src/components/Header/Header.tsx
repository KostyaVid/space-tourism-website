import s from './Header.module.scss';
import Logo from './../../assets/shared/logo.svg';
import { pages } from '../../App';
import { Link, useLocation } from 'react-router-dom';
import Burger from './Burger/Burger';
import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [mobileMode, setMobileMode] = useState(false);
  let refMobileMenu = useRef<HTMLElement | null>(null);
  let refBurger = useRef<HTMLDivElement | null>(null);

  function clickBurger() {
    setActiveMobileMenu(!activeMobileMenu);
  }

  useEffect(() => {
    function resize() {
      if (window.screen.width <= 576) {
        setMobileMode(true);
      } else {
        setMobileMode(false);
      }
    }
    resize();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    function clickDisplay(ev: MouseEvent) {
      if (refMobileMenu) {
        if (activeMobileMenu && mobileMode) {
          if (
            !refMobileMenu.current?.contains(ev.target as Node) &&
            !refBurger.current?.contains(ev.target as Node)
          ) {
            setActiveMobileMenu(false);
          }
          console.log(ev.target);
        }
      }
    }

    document.body.addEventListener('pointerdown', clickDisplay);
    return () => {
      document.body.removeEventListener('pointerdown', clickDisplay);
    };
  }, [activeMobileMenu, mobileMode]);

  let { pathname } = useLocation();

  const renderItems = pages.map((elem, index) => {
    let nameClass = s.item;
    if ('/' + elem === pathname) nameClass = [nameClass, s.li_active].join(' ');
    return (
      <li key={'id' + index} className={nameClass}>
        <Link to={'/' + elem}>
          <div className={s.nameMenu}>
            <span>{'0' + index.toString()}</span>
            {elem.toUpperCase()}
          </div>
        </Link>
      </li>
    );
  });

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src={Logo} alt="Space company" />
      </div>
      <div className={s.line}></div>
      <nav
        className={[s.menu, activeMobileMenu ? s.activeMobileMenu : ''].join(' ')}
        ref={refMobileMenu}>
        <div className={s.container}>
          <ul>{renderItems}</ul>
        </div>
      </nav>
      <div ref={refBurger}>
        <Burger onClick={clickBurger} activeMobileMenu={activeMobileMenu} />
      </div>
    </header>
  );
};

export default Header;
