// mock-posts.ts

import { IGamePost } from "./post.model";

// Mocked list of posts
export const MOCK_POSTS: IGamePost[] = [
  {
    id: 1,
    name: 'Post 1',
    content: 'This is the content of post 1.',
    imageUrl: 'https://example.com/image1.jpg',
    createdDate: new Date('2023-01-01'),
  },
  {
    id: 2,
    name: 'Post 2',
    content: 'This is the content of post 2.',
    imageUrl: 'https://example.com/image2.jpg',
    createdDate: new Date('2023-01-02'),
  },
  {
    id: 3,
    name: 'Post 3',
    content: 'This is the content of post 3.',
    imageUrl: 'https://example.com/image3.jpg',
    createdDate: new Date('2023-01-03'),
  },
];
