import styles from './ErrorText.module.scss';

interface Props {
  message: string;
  testId: string;
}

const ErrorText = ({ message, testId }: Props) => {
  return (
    <div className={styles.error} data-testid={testId}>
      {message}
    </div>
  );
};

export default ErrorText;
