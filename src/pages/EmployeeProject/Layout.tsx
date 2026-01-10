import { ROUTES } from "constants/routes";
import {
  getActiveStyles,
  Header,
  HeaderLink,
  LayoutWrapper,
  Logo,
  Main,
  NavigationContainer,
} from "./styles";
import type { LayoutProps } from "./types";
import { createContext, useState } from "react";

// функция где хранятся данные введенные пользователем
export const EmployeeContext = createContext({
  employeeData: {},
  setEmployeeData: (EmployeeData: any) => {},
});


function Layout({ children }: LayoutProps) {

  const [employeeData, setEmployeeData] = useState({});
  console.log("layout", { employeeData });

  return (
    //передает данные и функции другим компонентам
    <EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
      <LayoutWrapper>
        <Header>
          <Logo>App Logo</Logo>
          <NavigationContainer>
            <HeaderLink style={getActiveStyles} to={ROUTES.CREATE_EMPLOYEE}>
              Create Employee
            </HeaderLink>
            <HeaderLink style={getActiveStyles} to={""}>
              Employees
            </HeaderLink>
          </NavigationContainer>
        </Header>
        <Main>{children}</Main>
      </LayoutWrapper>
    </EmployeeContext.Provider>
  );
}

export default Layout;
