import type { JSX } from "@emotion/react/jsx-runtime";
import { useState } from "react";
import {
  Card,
  Title,
  Container,
  Recept,
  Ingredient,
  BtnContainer,
  Btn,
  H2,
  Li
} from "./styles";

export default function Consultation_05(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [instruction, setInstruction] = useState<string>("");
  const [ingredient1, setIngredient1] = useState<string>("");
  const [ingredient2, setIngredient2] = useState<string>("");
  const [ingredient3, setIngredient3] = useState<string>("");
  const [ingredient4, setIngredient4] = useState<string>("");
  const [ingredient5, setIngredient5] = useState<string>("");
  const [ingredient6, setIngredient6] = useState<string>("");
  const [ingredient7, setIngredient7] = useState<string>("");

  async function loadCoctail(): Promise<void> {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const obj = await res.json();
    const { drinks } = obj;
    const {
      strDrink,
      strDrinkThumb,
      strInstructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
    } = drinks[0];
    setName(strDrink);
    setImage(strDrinkThumb);
    setInstruction(strInstructions);
    setIngredient1(strIngredient1);
    setIngredient2(strIngredient2);
    setIngredient3(strIngredient3);
    setIngredient4(strIngredient4);
    setIngredient5(strIngredient5);
    setIngredient6(strIngredient6);
    setIngredient7(strIngredient7);
  }

  return (
    <Card>
      <Title>Coctail {name}</Title>
      <Container>
        <img src={image} alt="" /> <br />
        <Recept>
          <H2>Recept:</H2>
          {instruction}
          <Ingredient>
            <H2>Ingredient:</H2>
            <Li>{ingredient1}</Li>
            <Li>{ingredient2}</Li>
            <Li>{ingredient3}</Li>
            <Li>{ingredient4}</Li>
            <Li>{ingredient5}</Li>
            <Li>{ingredient6}</Li>
            <Li>{ingredient7}</Li>
          </Ingredient>
        </Recept>
      </Container>
      <BtnContainer>
        <Btn type="button" onClick={() => loadCoctail()}>
          Next image
        </Btn>
      </BtnContainer>
    </Card>
  );
}
