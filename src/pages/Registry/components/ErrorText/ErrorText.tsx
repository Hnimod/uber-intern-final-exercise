import styles from './ErrorText.module.scss';

interface Props {
  message: string;
  className?: string;
}

const ErrorText = ({ message, className }: Props) => {
  return <div className={`${styles.error} ${className}`}>{message}</div>;
};

export default ErrorText;
