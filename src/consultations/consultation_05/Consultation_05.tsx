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
          <h2>Recept:</h2>
          {instruction}
          <Ingredient>
            <h3>Ingredient:</h3>
            <li>{ingredient1}</li>
            <li>{ingredient2}</li>
            <li>{ingredient3}</li>
            <li>{ingredient4}</li>
            <li>{ingredient5}</li>
            <li>{ingredient6}</li>
            <li>{ingredient7}</li>
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
