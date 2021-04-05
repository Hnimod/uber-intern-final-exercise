import { HiOutlineArrowRight } from 'react-icons/hi';

import styles from './Form.module.scss';

type Props = {
  className?: string;
};

const FormButton = ({ className }: Props) => {
  return (
    <button className={styles.formButton + ' ' + className} type="submit">
      <HiOutlineArrowRight />
    </button>
  );
};

export default FormButton;
