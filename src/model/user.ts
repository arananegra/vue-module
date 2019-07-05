export interface User {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  name: string;
  created_at: string;
}

export const createDefaultUser = (): User => ({
  id: -1,
  login: "",
  avatar_url: "",
  url: "",
  name: "",
  created_at: ""
});
