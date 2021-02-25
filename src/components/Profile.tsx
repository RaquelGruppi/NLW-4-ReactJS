import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/68728227?s=460&u=42d99b88e00ae34993450d495d43e027e3684bb0&v=4" alt="Raquel's avatar" />
      <div>
        <strong>Raquel Gruppi</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}