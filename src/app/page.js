import React from 'react';

import { getBlogPostList } from '@/helpers/file-helpers';
import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      {blogPosts.map(({ slug, ...delegated }) => (
        <BlogSummaryCard
          key={slug}
          slug={slug}
          {...delegated}
        />
      ))}
    </div>
  );
}

export default Home;
