// Types
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface CreatePostData {
  title: string;
  body: string;
  userId: number;
}

const API_URL = 'https://jsonplaceholder.typicode.com';

// API functions
export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${API_URL}/posts?_limit=10`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

export async function fetchPost(id: number): Promise<Post> {
  const response = await fetch(`${API_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
}

export async function createPost(data: CreatePostData): Promise<Post> {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  return response.json();
}

export async function updatePost(id: number, data: Partial<Post>): Promise<Post> {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update post');
  }
  return response.json();
}

export async function deletePost(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
}
