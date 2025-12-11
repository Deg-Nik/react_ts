import styled from "@emotion/styled";

export const Homework_06_wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 80px;
  flex: 1;
  gap: 80px;
  background-color: rgb(77, 56, 239);
`;

export const Car_card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 250px;
  height: fit-content;
  border: 2px solid black;
  padding: 40px;
  margin: 30px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 12px black;


:hover {
  transform: scale(1.1);
  cursor: pointer;
}
`;

export const Brand = styled.h1 `
  display: flex;
  justify-content: center;
`;

export const H2 = styled.h2 ``;

export const H3 = styled.h3 ``;