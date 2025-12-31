import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPosts, createPost, type Post } from '@/api/posts';

export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
};

export function usePosts() {
  return useQuery({
    queryKey: postKeys.lists(),
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000,
  });
}

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
