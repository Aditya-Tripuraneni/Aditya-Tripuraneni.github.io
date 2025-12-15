import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getFoodBlogs } from '../../../data/blogs';
import BlogCard from '../../../components/BlogCard/BlogCard';
import styles from './FoodBlogs.module.css';

const FoodBlogs: React.FC = () => {
  const navigate = useNavigate();
  const blogs = getFoodBlogs();

  return (
    <div className={styles.page}>
      <button className={styles.backButton} onClick={() => navigate('/my-brain')}>
        ← Back to My Brain
      </button>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Food Blogs</h1>
        </header>

        <div className={styles.blogList}>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard 
                key={blog.slug} 
                blog={blog} 
                onClick={() => navigate(`/my-brain/food-blogs/${blog.slug}`)}
              />
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>I will add to this soon I promise lol</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodBlogs;
