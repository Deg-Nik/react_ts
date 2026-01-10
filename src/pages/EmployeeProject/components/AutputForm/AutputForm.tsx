import { EmployeesWrapper, AutputWrapper, LabelWrapper, UserText } from "./styles"


export default function AutputForm() {
    
    return(
        <EmployeesWrapper>
        <AutputWrapper>
            <LabelWrapper>Name</LabelWrapper>
            <UserText>John</UserText>
        </AutputWrapper>
        <AutputWrapper>
            <LabelWrapper>Surname</LabelWrapper>
            <UserText>Johnson</UserText>
        </AutputWrapper>
        <AutputWrapper>
            <LabelWrapper>Age</LabelWrapper>
            <UserText>25</UserText>
        </AutputWrapper>
        <AutputWrapper>
            <LabelWrapper>Job Position</LabelWrapper>
            <UserText>QA</UserText>
        </AutputWrapper>
      

        </EmployeesWrapper>
    );
}

