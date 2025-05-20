import styles from './ErrorMessage.module.css';

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps): JSX.Element => {
  return <p className={styles.message}>{message}</p>;
};
