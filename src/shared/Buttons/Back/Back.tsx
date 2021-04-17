import { ReactNode } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import styles from './Back.module.scss';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Back = ({ children, onClick, className }: Props) => {
  return (
    <button
      className={styles.primaryButton + ' ' + className}
      onClick={onClick}
    >
      <span>
        <HiOutlineArrowLeft />
      </span>
      {children}
    </button>
  );
};

export default Back;
