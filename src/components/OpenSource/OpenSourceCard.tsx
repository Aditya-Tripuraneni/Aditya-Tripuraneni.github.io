import React from 'react';
import type { OpenSourceContribution } from '../../types/index';
import styles from './OpenSourceCard.module.css';

interface OpenSourceCardProps {
  contribution: OpenSourceContribution;
}

const OpenSourceCard: React.FC<OpenSourceCardProps> = ({ contribution }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <a
          href={contribution.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.project}
        >
          {contribution.project}
        </a>
        <span className={styles.stars} aria-label={`${contribution.stars} GitHub stars`}>
          ★ {contribution.stars}
        </span>
      </div>

      <p className={styles.summary}>{contribution.summary}</p>

      <ul className={styles.prList}>
        {contribution.pullRequests.map((pr) => (
          <li key={pr.number}>
            <a href={pr.url} target="_blank" rel="noopener noreferrer" className={styles.prLink}>
              <span className={styles.prNumber}>#{pr.number}</span> {pr.title}
            </a>
            <span className={styles.merged}>Merged</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenSourceCard;
