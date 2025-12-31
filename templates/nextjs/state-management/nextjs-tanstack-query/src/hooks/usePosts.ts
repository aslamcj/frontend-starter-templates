import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPosts, fetchPost, createPost, type Post } from '@/api/posts';

// Query keys
export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
  detail: (id: number) => [...postKeys.all, 'detail', id] as const,
};

// Fetch all posts
export function usePosts() {
  return useQuery({
    queryKey: postKeys.lists(),
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000,
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
      queryClient.setQueryData<Post[]>(postKeys.lists(), (old) =>
        old ? [newPost, ...old] : [newPost]
      );
    },
  });
}
