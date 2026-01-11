import { useContext } from "react";
import OutputForm from "../components/OutputForm/OutputForm";
import { PageWrapper } from "../CreateEmployee/styles";
import { EmployeeContext } from "../Layout";



export default function Employees() {

  // карточка показывается только если все поля заполнены
  const {employeeData} = useContext(EmployeeContext)
  const isFilled = employeeData.name && employeeData.surname && employeeData.age && employeeData.job_position;

  return (
    <PageWrapper>
       {isFilled && <OutputForm/>}
    </PageWrapper>
  )
}
