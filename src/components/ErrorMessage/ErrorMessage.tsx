import styles from './ErrorMessage.module.css';

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps): React.ReactElement => {
  return <p className={styles.message}>{message}</p>;
};
