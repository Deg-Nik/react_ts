import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 10, 66, 0.9);
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  color: green;
  font-size: 30px;
  font-weight: bold;
  font-weight: normal;
`;

export const ContainerJoke = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Text = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: black;
`;

export const ErrorText = styled(Text)`
  color: red;
`;