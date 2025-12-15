import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getThingsInteresting } from '../../../data/blogs';
import BlogCard from '../../../components/BlogCard/BlogCard';
import styles from './ThingsInteresting.module.css';

const ThingsInteresting: React.FC = () => {
  const navigate = useNavigate();
  const blogs = getThingsInteresting();

  return (
    <div className={styles.page}>
      <button className={styles.backButton} onClick={() => navigate('/my-brain')}>
        ← Back to My Brain
      </button>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Things I Find Interesting</h1>
          <p className={styles.subtitle}>Random thoughts, discoveries, and cool stuff I've come across</p>
        </header>

        <div className={styles.blogList}>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard 
                key={blog.slug} 
                blog={blog} 
                onClick={() => navigate(`/my-brain/things-interesting/${blog.slug}`)}
              />
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>No posts yet! Check back soon for updates 😊</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThingsInteresting;
