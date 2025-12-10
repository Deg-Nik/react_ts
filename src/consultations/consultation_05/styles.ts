import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;

export const Title = styled.div`
  font-size: 45px;
  color: green;
`;

export const Container = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  gap: 30px;
  font-weight: bold;
  font-size: 30px;
  color: red;
`;

export const H2 = styled.h2`
padding-left: 100px;
`; 

export const Li = styled.li`
padding-left: 20px;
`;

export const Recept = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: brown;
`;

export const BtnContainer = styled.div``;

export const Btn = styled.button`
  background-color: blue;
  color: white;
  width: 350px;
  height: 50px;
  font-size: 20px;
`;
