import styles from './Loader.module.css';

const Loader = (): React.ReactElement => {
  return (
    <div className={styles.loaderBackdrop}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;



