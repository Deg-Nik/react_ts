import { useState, createContext } from "react";
import Button from "components/Button/Button";

import Section from "lessons/lesson_14/components/Section/Section";

import { MainTitle, MainWrapper } from "./styles";
import { type UserData, type UserDataContext } from "./types";

export const MainContext = createContext<UserDataContext>({
  userData: undefined,
  setUserData: () => {},
});

function Main() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const getUserData = () => {
    // Предположим, что вы получили данные пользователя в константе userResponse, используя GET запрос по сети
    const userResponse: UserData = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };

    setUserData(userResponse);
  };

  console.log(userData);

  return (
    <MainContext.Provider
      value={{
        userData: userData,
        setUserData: setUserData,
      }}
    >
      <MainWrapper>
        <MainTitle>Main Component</MainTitle>
        <Button name="Get User Data" onClick={getUserData} />
        <Section />
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
