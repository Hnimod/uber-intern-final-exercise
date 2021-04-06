import { useState, useEffect } from 'react';

import { HiOutlineArrowRight } from 'react-icons/hi';
import Spinner from '../../Spinner';

import styles from './Form.module.scss';

type Props = {
  className?: string;
  isSpinning?: boolean;
  disabled?: boolean;
};

const FormButton = ({ className, disabled, isSpinning = false }: Props) => {
  const [spinnner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(isSpinning);
  }, [isSpinning]);

  return (
    <button
      className={styles.formButton + ' ' + className}
      type="submit"
      disabled={disabled || spinnner}
    >
      {spinnner ? <Spinner /> : <HiOutlineArrowRight />}
    </button>
  );
};

export default FormButton;
