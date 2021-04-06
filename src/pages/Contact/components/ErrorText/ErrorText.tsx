import styles from './ErrorText.module.scss';

interface Props {
  message: string;
}

const ErrorText = ({ message }: Props) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorText;
