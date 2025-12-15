import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MyBrain.module.css';

const MyBrain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <h1 className={styles.title}>My Brain</h1>
      <p className={styles.subtitle}>A peek into what I'm thinking about</p>
      
      <div className={styles.board}>
        <div 
          className={`${styles.stickyNote} ${styles.foodNote}`}
          onClick={() => navigate('/my-brain/food-blogs')}
        >
          <div className={styles.pin}></div>
          <div className={styles.noteContent}>
            <span className={styles.noteEmoji}>🍜</span>
            <h2 className={styles.noteTitle}>Food Blogs</h2>
            <p className={styles.noteSubtitle}>I am an advid enjoyer of food</p>
          </div>
          <div className={styles.noteFold}></div>
        </div>

        <div 
          className={`${styles.stickyNote} ${styles.interestingNote}`}
          onClick={() => navigate('/my-brain/things-interesting')}
        >
          <div className={styles.pin}></div>
          <div className={styles.noteContent}>
            <span className={styles.noteEmoji}>💡</span>
            <h2 className={styles.noteTitle}>Things I find interesting</h2>
            <p className={styles.noteSubtitle}>Tech, Music and Life </p>
          </div>
          <div className={styles.noteFold}></div>
        </div>
      </div>
    </div>
  );
};

export default MyBrain;
