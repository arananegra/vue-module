import { User, createDefaultUser } from '../../model/user';
import { checkStatus } from "./common";

const resolveUser = (data: any): User => {
  let user: User = createDefaultUser();
  user.id = data.id;
  user.login = data.login;
  user.avatar_url = data.avatar_url;
  user.name = data.name;
  user.url = data.url;
  user.created_at = data.created_at;
  return user;
};

export const getUser = (username: string): Promise<User> => {
  const githubUserUrl: string = `https://api.github.com/users/${username}`;

  return fetch(githubUserUrl)
    .then(response => checkStatus(response))
    .then(response => response.json())
    .then(data => resolveUser(data));
};