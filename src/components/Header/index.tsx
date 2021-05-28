import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="GeekFarias.blog" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Website</a>
        </nav>
      </div>
    </header>
  );
};
