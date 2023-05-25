import styles from './Alert.module.css';
export const Alert = ({ message, onClose }) => {
    return (
      <div className={styles.overlay}>
        <div className={styles.alert}>
          <span className={styles.closeButton} onClick={onClose}>
            &times;
          </span>
          <p>{message}</p>
        </div>
      </div>
    );
  };