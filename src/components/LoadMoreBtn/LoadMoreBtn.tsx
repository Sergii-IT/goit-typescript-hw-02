import styles from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  onClick: () => void;
};

export const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps): React.ReactElement => {
  return (
    <button className={styles.button} onClick={onClick}>
      Load More
    </button>
  );
};

