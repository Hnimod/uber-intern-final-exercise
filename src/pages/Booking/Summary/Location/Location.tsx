import { IconType } from 'react-icons/lib';
import styles from './Location.module.scss';

interface Props {
  Icon: IconType;
  name: string;
  address: string;
}

const Location = ({ name, address, Icon }: Props) => {
  return (
    <li className={styles.location}>
      <Icon />
      <div>
        <h5>{name}</h5>
        <address>{address}</address>
      </div>
    </li>
  );
};

export default Location;
