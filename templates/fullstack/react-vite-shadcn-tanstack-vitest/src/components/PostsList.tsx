import { useState } from 'react';
import { usePosts, useCreatePost } from '@/hooks/usePosts';
import { Button } from '@/components/ui/button';

export function PostsList() {
  const [title, setTitle] = useState('');
  const { data: posts, isLoading, error, isFetching } = usePosts();
  const createPost = useCreatePost();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    createPost.mutate({ title, body: 'Sample', userId: 1 }, {
      onSuccess: () => setTitle(''),
    });
  };

  return (
    <div className="w-full max-w-lg space-y-4">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add Post</h2>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title..."
            className="flex-1 px-3 py-2 border rounded-md"
          />
          <Button type="submit" disabled={createPost.isPending}>
            {createPost.isPending ? 'Adding...' : 'Add'}
          </Button>
        </form>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          Posts {isFetching && <span className="text-sm text-gray-500">(updating...)</span>}
        </h2>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        <ul className="space-y-2">
          {posts?.map((post) => (
            <li key={post.id} className="p-3 bg-gray-50 rounded-md">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
