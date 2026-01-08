import { useState, createContext, type ChangeEvent } from "react";
import Button from "components/Button/Button";
import Card from "homeworks/homework_14/components/Card/Card";
import { BlogTitle, BlogWrapper, TextArea } from "./styles";
import { type UserBlog, type UserBlogContent } from "./types";

export const BlogContent = createContext<UserBlogContent>({
  userPost: undefined,
  setUserPost: () => {},
});

function BlogManagement() {
  const [userText, setUserText] = useState<string>("");
  const [userPost, setUserPost] = useState<undefined | UserBlog>(undefined);

  const getUserPost = () => {
    if (!userText.trim()) return;

    setUserPost({ value: userText });
    setUserText("");
  };

  const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setUserText(event.target.value);
    };

  
  return (
    <BlogContent
      value={{
        userPost: userPost,
        setUserPost: setUserPost,
      }}
    >
      <BlogWrapper>
        <BlogTitle>BlogManagement</BlogTitle>
        <TextArea placeholder="Input your text" value={userText} onChange={onTextChange}/>
        <Button name="Post" onClick={getUserPost} />
        {userPost && <Card />}
      </BlogWrapper>
    </BlogContent>
  );
}

export default BlogManagement;
