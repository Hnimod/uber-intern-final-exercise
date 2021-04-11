import { MdLocationOn } from 'react-icons/md';

import styles from './Location.module.scss';

interface Props {
  name: string;
  address: string;
}

const Location = ({ name, address }: Props) => {
  return (
    <li className={styles.location}>
      <MdLocationOn />
      <div>
        <h5>{name}</h5>
        <address>{address}</address>
      </div>
    </li>
  );
};

export default Location;
