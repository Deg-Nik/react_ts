import { MessageText, MessageWrapper } from "./styles";
import { useContext } from "react";
import { BlogContent } from "homeworks/homework_14/components/BlogManagement/BlogManagement";

function Message() {

  const { userPost } = useContext(BlogContent);
  
  return (
    <MessageWrapper>
      {userPost && <MessageText>{userPost.value}</MessageText>}
    </MessageWrapper>
  );
}

export default Message;
