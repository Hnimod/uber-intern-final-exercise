import { useState } from 'react';
import { ImMenu } from 'react-icons/im';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Logo from '../../images/uber-logo.png';
import LogoText from '../../images/uber-logo-text.png';
import Sidebar from './Sidebar';

import styles from './Header.module.scss';

const Header = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <div className={styles.container}>
        <Link className={styles.logos} to="/">
          <img className={styles.logo} src={Logo} alt="uber-logo" />
          <img
            className={styles.logoText}
            src={LogoText}
            alt="uber-logo-text"
          />
        </Link>
        <section className={styles.sideMenu}>
          <div className={styles.menuButton} onClick={toggleSideMenu}>
            {sideMenuOpen ? <MdClose /> : <ImMenu />}
          </div>

          {sideMenuOpen && <Sidebar />}
        </section>
      </div>
    </header>
  );
};

export default Header;
