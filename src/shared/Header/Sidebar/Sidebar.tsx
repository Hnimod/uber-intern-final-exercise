import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.scss';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { selectToken, signout } from '../../../features/auth/authSlice';

const Sidebar = () => {
  const auth = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  const privateLink = (
    <>
      <li>
        <Link to="/booking">
          <MdHome />
          <span>Booking</span>
        </Link>
      </li>

      <li>
        <Link to="/" onClick={() => dispatch(signout())}>
          <MdHome />
          <span>Sign Out</span>
        </Link>
      </li>
    </>
  );

  return (
    <aside>
      <ul className={styles.container}>
        <li>
          <Link to="/">
            <MdHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/guide">
            <MdHome />
            <span>Guide</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <MdHome />
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link to="/commitment">
            <MdHome />
            <span>Commitment</span>
          </Link>
        </li>
        {!!!auth && (
          <li>
            <Link to="/registry">
              <MdHome />
              <span>Registry</span>
            </Link>
          </li>
        )}
        {!!auth && privateLink}
      </ul>
    </aside>
  );
};

export default Sidebar;
