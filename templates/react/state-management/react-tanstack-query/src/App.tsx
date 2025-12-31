import { useState } from 'react';
import { usePosts, useCreatePost, useDeletePost } from './hooks/usePosts';

export function App() {
  const [title, setTitle] = useState('');
  const { data: posts, isLoading, error, refetch, isFetching } = usePosts();
  const createPost = useCreatePost();
  const deletePost = useDeletePost();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    createPost.mutate(
      { title, body: 'Sample body', userId: 1 },
      {
        onSuccess: () => setTitle(''),
      }
    );
  };

  return (
    <div className="container">
      <h1 className="title">React + TanStack Query</h1>
      <p style={{ color: '#64748b' }}>Server state management</p>

      <div className="card">
        <h2>Add Post</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title..."
            style={{
              flex: 1,
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0',
              fontSize: '1rem',
            }}
          />
          <button
            type="submit"
            className="btn"
            disabled={createPost.isPending}
          >
            {createPost.isPending ? 'Adding...' : 'Add'}
          </button>
        </form>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Posts {isFetching && <span style={{ fontSize: '0.75rem', color: '#64748b' }}>(updating...)</span>}</h2>
          <button className="btn btn-secondary" onClick={() => refetch()}>
            Refresh
          </button>
        </div>

        {isLoading && <p>Loading posts...</p>}
        {error && <p style={{ color: '#ef4444' }}>Error: {error.message}</p>}

        <ul className="posts-list">
          {posts?.map((post) => (
            <li key={post.id} className="post-item">
              <span className="post-title">{post.title}</span>
              <button
                className="delete-btn"
                onClick={() => deletePost.mutate(post.id)}
                disabled={deletePost.isPending}
              >
                ×
              </button>
            </li>
          ))}
        </ul>

        {posts?.length === 0 && <p style={{ color: '#64748b' }}>No posts yet</p>}
      </div>
    </div>
  );
}
