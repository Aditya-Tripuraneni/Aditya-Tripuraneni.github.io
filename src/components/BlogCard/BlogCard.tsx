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
      <div className={styles.content}>
        <h2 className={styles.title}>{blog.title}</h2>
        {blog.location && (
          <span className={styles.location}>{blog.location}</span>
        )}
        {blog.rating && (
          <span className={styles.rating}>Rating: {blog.rating}</span>
        )}
        <time className={styles.date}>{formatDate(blog.date)}</time>
        <p className={styles.preview}>{blog.preview}</p>
        <span className={styles.readMore}>Read more →</span>
      </div>
    </article>
  );
};

export default BlogCard;
