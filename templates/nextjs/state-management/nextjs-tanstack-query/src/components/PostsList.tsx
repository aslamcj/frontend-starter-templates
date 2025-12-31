'use client';

import { useState } from 'react';
import { usePosts, useCreatePost } from '@/hooks/usePosts';
import styles from './PostsList.module.css';

export function PostsList() {
  const [title, setTitle] = useState('');
  const { data: posts, isLoading, error, refetch, isFetching } = usePosts();
  const createPost = useCreatePost();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    createPost.mutate(
      { title, body: 'Sample body', userId: 1 },
      { onSuccess: () => setTitle('') }
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Add Post</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title..."
            className={styles.input}
          />
          <button
            type="submit"
            className={styles.btn}
            disabled={createPost.isPending}
          >
            {createPost.isPending ? 'Adding...' : 'Add'}
          </button>
        </form>
      </div>

      <div className={styles.card}>
        <div className={styles.header}>
          <h2>
            Posts{' '}
            {isFetching && (
              <span className={styles.updating}>(updating...)</span>
            )}
          </h2>
          <button className={styles.btnSecondary} onClick={() => refetch()}>
            Refresh
          </button>
        </div>

        {isLoading && <p>Loading posts...</p>}
        {error && <p className={styles.error}>Error: {error.message}</p>}

        <ul className={styles.list}>
          {posts?.map((post) => (
            <li key={post.id} className={styles.item}>
              {post.title}
            </li>
          ))}
        </ul>

        {posts?.length === 0 && (
          <p className={styles.empty}>No posts yet</p>
        )}
      </div>
    </div>
  );
}
