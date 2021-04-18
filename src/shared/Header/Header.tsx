import { useState } from 'react';
import { ImMenu } from 'react-icons/im';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import { useAppSelector } from '../../app/hooks';
import {
  selectToken,
  selectUsername,
  selectRating,
} from '../../features/auth/authSlice';

import Logo from '../../images/uber-logo.png';
import LogoText from '../../images/uber-logo-text.png';
import userAvatar from '../../images/friend-male.png';
import Sidebar from './Sidebar';
import UserInfo from './UserInfo';

const Header = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const auth = useAppSelector(selectToken);
  const userName = useAppSelector(selectUsername);
  const rating = useAppSelector(selectRating);

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
        <div className={styles.sideMenu}>
          {!!auth && (
            <UserInfo name={userName} rating={rating} image={userAvatar} />
          )}
          <div className={styles.menuButton} onClick={toggleSideMenu}>
            {sideMenuOpen ? <MdClose /> : <ImMenu />}
          </div>

          {sideMenuOpen && <Sidebar />}
        </div>
      </div>
    </header>
  );
};

export default Header;
