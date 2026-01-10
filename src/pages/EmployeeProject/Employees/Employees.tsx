import {useContext, useState} from 'react'
import { EmployeeContext } from '../Layout'

export default function Employees() {
  const {employeeData} = useContext(EmployeeContext);
  const [employeesData, setEmployeesData] = useState({});

  const Card = () => {
    setEmployeesData(employeeData);
  };
  return (
    // <div>{employeeData.name}</div>
  )
}
