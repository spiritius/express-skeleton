import { Request, Response } from "express";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
  phone: string;
  website: string;
  company: object;
};

export const getPosts = (req: Request, res: Response) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => res.json(json));
};

export const getPostById = (req: Request, res: Response) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
    .then((response) => response.json())
    .then((json) => res.json(json));
};

export const getPostComments = (req: Request, res: Response) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments`)
    .then((response) => response.json())
    .then((json) => res.json(json));
};

export const getPostAuthor = (req: Request, res: Response) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
    .then((response) => response.json())
    .then((json) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
          const author = users.find((user: User) => user.id === json.userId);
          res.json(author);
        });
    });
};
