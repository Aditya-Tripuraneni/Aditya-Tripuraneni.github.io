import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogBySlug } from '../../../data/blogs';
import styles from './BlogPost.module.css';

interface BlogPostProps {
  category: 'food-blogs' | 'things-interesting';
}

const BlogPost: React.FC<BlogPostProps> = ({ category }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = getBlogBySlug(slug || '');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const backPath = category === 'food-blogs' 
    ? '/my-brain/food-blogs' 
    : '/my-brain/things-interesting';
  
  const backLabel = category === 'food-blogs' 
    ? '← Back to Food Blogs' 
    : '← Back to Things Interesting';

  if (!blog) {
    return (
      <div className={styles.page}>
        <button className={styles.backButton} onClick={() => navigate(backPath)}>
          {backLabel}
        </button>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h1>Post not found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering (basic)
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        elements.push(
          <p key={elements.length} className={styles.paragraph}>
            {currentParagraph.join(' ')}
          </p>
        );
        currentParagraph = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('## ')) {
        flushParagraph();
        elements.push(
          <h2 key={index} className={styles.heading2}>
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushParagraph();
        elements.push(
          <h3 key={index} className={styles.heading3}>
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ')) {
        flushParagraph();
        elements.push(
          <li key={index} className={styles.listItem}>
            {trimmedLine.replace('- ', '')}
          </li>
        );
      } else if (trimmedLine === '') {
        flushParagraph();
      } else {
        currentParagraph.push(trimmedLine);
      }
    });

    flushParagraph();
    return elements;
  };

  return (
    <div className={styles.page}>
      <button className={styles.backButton} onClick={() => navigate(backPath)}>
        {backLabel}
      </button>

      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{blog.title}</h1>
          <time className={styles.date}>{formatDate(blog.date)}</time>
        </header>

        <div className={styles.content}>
          {renderContent(blog.content)}
        </div>

        <footer className={styles.footer}>
          <div className={styles.tags}>
            {blog.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
