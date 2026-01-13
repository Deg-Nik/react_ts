import { type ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface EmployeeData {
  name: string;
  surname: string;
  age: string;
  job_position: string;
}

// export interface EmployeeContextType {
//   employeeData: EmployeeData;
//   setEmployeeData: (data: EmployeeData) => void;
// }

export interface EmployeeContextType {
  employeeData: EmployeeData;
  setEmployeeData: React.Dispatch<React.SetStateAction<EmployeeData>>;
}

