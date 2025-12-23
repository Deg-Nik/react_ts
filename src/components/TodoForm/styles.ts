import styled from "@emotion/styled";

export const TodoFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 590px;
  min-height: 450px;
  max-height: fit-content;
  border: 1px solid #000000;
  padding: 60px;
  border-radius: 4px;
  background-color: white;
  gap: 30px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OutputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 25px;
  color: violet;
`;

export const TaskButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  Button {
    width: 90px;
    height: 35px;
  }
`;

export const UL = styled.ul``;

export const LI = styled.li`
margin-bottom: 20px;
`;

export const Strong = styled.strong``;

export const Paragraph = styled.p``;
