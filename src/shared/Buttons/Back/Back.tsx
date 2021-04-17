import { ReactNode } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import styles from './Back.module.scss';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Back = ({ children, onClick, className, disabled }: Props) => {
  return (
    <button
      className={`${styles.primaryButton} ${className} ${
        disabled ? styles.disabled : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>
        <HiOutlineArrowLeft />
      </span>
      {children}
    </button>
  );
};

export default Back;
