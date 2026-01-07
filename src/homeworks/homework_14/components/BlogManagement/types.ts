import { type Dispatch, type SetStateAction } from "react";

export interface UserBlog {
  value: string;
};

export interface UserBlogContent {
  userPost: UserBlog | undefined;
  setUserPost: Dispatch<SetStateAction<UserBlog | undefined>>;
}