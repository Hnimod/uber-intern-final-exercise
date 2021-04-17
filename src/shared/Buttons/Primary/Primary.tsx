import { ReactNode } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

import styles from './Primary.module.scss';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const PrimaryButton = ({ children, onClick, className, disabled }: Props) => {
  return (
    <button
      className={`${styles.primaryButton} ${className} ${
        disabled ? styles.disabled : ''
      }`}
      onClick={onClick}
    >
      {children}
      <span>
        <HiOutlineArrowRight />
      </span>
    </button>
  );
};

export default PrimaryButton;
