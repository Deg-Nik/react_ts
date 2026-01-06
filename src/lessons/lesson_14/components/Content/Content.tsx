import { useContext } from "react";
import { MainContext } from "lessons/lesson_14/components/Main/Main";
import Button from "components/Button/Button";
import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

function Content() {

  const {userData, setUserData} = useContext(MainContext);

  const deleteUser = () => {
    setUserData (undefined);
  };

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      {userData && (
        <>
          <ContentInfo>Fullname: {userData.fullName}</ContentInfo>
          <ContentInfo>Age: {userData.age}</ContentInfo>
          <ContentInfo>Job: {userData.jobPosition}</ContentInfo>
          <Button isRed name="Delete user" onClick={deleteUser}/>
        </>
      )}
    </ContentWrapper>
  );
}

export default Content;
