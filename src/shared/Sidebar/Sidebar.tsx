import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside>
      <ul className={styles.container}>
        <li>
          <MdHome />
          <Link to="/">Home</Link>
        </li>
        <li>
          <MdHome />
          <Link to="/guide">Contact</Link>
        </li>
        <li>
          <MdHome />
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <MdHome />
          <Link to="/commitment">Commitment</Link>
        </li>
        <li>
          <MdHome />
          <Link to="/registry">Registry</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
