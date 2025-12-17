import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-color: burlywood;
`;

export const ContainerInputButton = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
`;

export const Card = styled.div`
  margin-top: 30px;
  width: 600px;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 12px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #1f2937;
  padding: 10px 12px;
  border-radius: 8px;
  background-color: #f3f4f6;
  &:hover {
    background-color: #e5e7eb;
  }
`;

export const ErrorText = styled.p`
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  background-color: #fee2e2;
  color: #991b1b;
  font-size: 14px;
`;