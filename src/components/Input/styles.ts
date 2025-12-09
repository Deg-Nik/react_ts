import styled from "@emotion/styled";

interface InputComponentProps {
  error?: string;
  disabled?: boolean;
}



export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ error }) =>(error? "red" : "#3f3f3f")};
  border-radius: 4px;
  padding: 12px;
  outline: none;
  background-color: ${({disabled}) => disabled? "#a8a1a1ff" : "white"};

  ::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;
