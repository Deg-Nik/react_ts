import styled from "@emotion/styled";


export const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 590px;
  min-height: 450px;
  max-height: fit-content;
  padding: 60px;
  gap: 30px;
`;

export const Title = styled.p`
  color: #000000;
  font-size: 50px;
  font-weight: bold;
`;

export const ClientsLink = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: red;
  padding: 10px 20px;
  border: 1px solid #000000;
  border-radius: 10px;
  background-color: #E0F7FF;
  cursor: pointer;
`;

export const ButtonControl = styled.div`
  width: 300px;
`;