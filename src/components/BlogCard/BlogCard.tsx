import React from 'react';
import type { BlogPost } from '../../data/blogs';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  blog: BlogPost;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, onClick }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className={styles.card} onClick={onClick}>
      <h2 className={styles.title}>{blog.title}</h2>
      <time className={styles.date}>{formatDate(blog.date)}</time>
      <p className={styles.preview}>{blog.preview}</p>
      <span className={styles.readMore}>Read more →</span>
    </article>
  );
};

export default BlogCard;
