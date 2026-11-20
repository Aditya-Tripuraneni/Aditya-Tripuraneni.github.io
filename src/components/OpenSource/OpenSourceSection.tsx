import React from 'react';
import { openSourceData } from '../../data/openSource';
import OpenSourceCard from './OpenSourceCard';
import styles from './OpenSourceSection.module.css';

const OpenSourceSection: React.FC = () => {
  return (
    <section id="open-source" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Open Source</h2>
          <p className={styles.intro}>
            Merged contributions to projects I use and admire.
          </p>
        </div>

        <div className={styles.grid}>
          {openSourceData.map((contribution) => (
            <OpenSourceCard key={contribution.id} contribution={contribution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
