import { useContext } from "react";

import {
  EmployeesWrapper,
  OutputWrapper,
  LabelWrapper,
  UserText,
} from "./styles";
import { EmployeeContext } from "pages/EmployeeProject/Layout";

function OutputForm() {
    const {employeeData} = useContext(EmployeeContext)
  return (
    <EmployeesWrapper>
      <OutputWrapper>
        <LabelWrapper>Name</LabelWrapper>
        <UserText>{employeeData.name}</UserText>
      </OutputWrapper>
      <OutputWrapper>
        <LabelWrapper>Surname</LabelWrapper>
        <UserText>{employeeData.surname}</UserText>
      </OutputWrapper>
      <OutputWrapper>
        <LabelWrapper>Age</LabelWrapper>
        <UserText>{employeeData.age}</UserText>
      </OutputWrapper>
      <OutputWrapper>
        <LabelWrapper>Job Position</LabelWrapper>
        <UserText>{employeeData.job_position}</UserText>
      </OutputWrapper>
    </EmployeesWrapper>
  );
}

export default OutputForm;
