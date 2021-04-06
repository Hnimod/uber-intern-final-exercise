import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
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
        <li>
          <Link to="/registry">
            <MdHome />
            <span>Registry</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
