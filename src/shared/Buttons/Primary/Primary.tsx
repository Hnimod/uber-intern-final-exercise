import { ReactNode } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

import styles from './Primary.module.scss';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const PrimaryButton = ({ children, onClick, className }: Props) => {
  return (
    <button
      className={styles.primaryButton + ' ' + className}
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
