import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
  type Post,
  type CreatePostData,
} from '../api/posts';

// Query keys factory
export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
  list: (filters: Record<string, unknown>) => [...postKeys.lists(), filters] as const,
  details: () => [...postKeys.all, 'detail'] as const,
  detail: (id: number) => [...postKeys.details(), id] as const,
};

// Fetch all posts
export function usePosts() {
  return useQuery({
    queryKey: postKeys.lists(),
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Fetch single post
export function usePost(id: number) {
  return useQuery({
    queryKey: postKeys.detail(id),
    queryFn: () => fetchPost(id),
    enabled: id > 0,
  });
}

// Create post mutation
export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      // Invalidate and refetch posts list
      queryClient.invalidateQueries({ queryKey: postKeys.lists() });

      // Optionally add to cache directly
      queryClient.setQueryData<Post[]>(postKeys.lists(), (old) =>
        old ? [newPost, ...old] : [newPost]
      );
    },
  });
}

// Update post mutation
export function useUpdatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Post> }) =>
      updatePost(id, data),
    onSuccess: (updatedPost) => {
      // Update cache for this specific post
      queryClient.setQueryData(postKeys.detail(updatedPost.id), updatedPost);

      // Invalidate posts list
      queryClient.invalidateQueries({ queryKey: postKeys.lists() });
    },
  });
}

// Delete post mutation
export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: (_, deletedId) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: postKeys.detail(deletedId) });

      // Update list cache
      queryClient.setQueryData<Post[]>(postKeys.lists(), (old) =>
        old?.filter((post) => post.id !== deletedId)
      );
    },
  });
}
