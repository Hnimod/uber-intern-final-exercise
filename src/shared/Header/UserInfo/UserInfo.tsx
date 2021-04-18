import { AiFillStar } from 'react-icons/ai';
import styles from './UserInfo.module.scss';

interface Props {
  name: string;
  rating: number | null;
  image: string;
}

const UserInfo = ({ name, rating, image }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h4>{name}</h4>
        <span>
          {rating} <AiFillStar />
        </span>
      </div>
      <img src={image} alt="avatar" />
    </div>
  );
};

export default UserInfo;
