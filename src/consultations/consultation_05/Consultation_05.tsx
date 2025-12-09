import type { JSX } from '@emotion/react/jsx-runtime'
import { useState } from 'react'
import {Container, BtnContainer, Btn} from "./styles"


export default function Consultation_05(): JSX.Element {

  const [ name, setName ] = useState<string>("");
  const [ image, setImage ] = useState<string>("");

  async function loadCoctail(): Promise<void>{
    const res = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const obj = await res.json();
    const {drinks} = obj;
    const {strDrink, strDrinkThumb} = drinks[0];
    setName(strDrink);
    setImage(strDrinkThumb);
  }


  return (
    <div>
      <h1>Coctail {name}</h1>
      <Container>
        <img src={image} alt="" /> <br />
      </Container>
      <BtnContainer>
        <Btn type='button' onClick={()=> loadCoctail()}>Next image</Btn>
      </BtnContainer>
    </div>
  )
}
