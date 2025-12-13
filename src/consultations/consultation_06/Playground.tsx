import { useEffect, useState } from "react";
import { H1, PageWrapper, Paragraph } from "./styles";
import Button from "components/Button/Button";

export default function Playground() {
  const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
  const [numberOfBirds, setNumberOfBirds] = useState<number>(10);

  function handleAddDogs(): void{
    setNumberOfDogs(numberOfDogs + 1);
  }
  function handleAddBirds(): void{
    setNumberOfBirds(numberOfBirds + 1);
  }

  // Component lifcycle - жизненный цикл компонента
  // Этапы жизненого цикла:
  // Mount - первая отрисовка компонента на странице
  // Update - изменение
  // Unmount - когда перестает отрисовываться

  // useEffect
  // позволяет вызвать функцию
  // на каком-нибудь из этапов жизни компонента
  // - принимает колбек функцию и второй опиональный параметр -
  // массив зависимостей

  // Пример 1 - пустой массив зависимостей
  useEffect(()=>{
    console.log("UseEffect 1 - первая отрисовка mount"); 
  },[])

  // Пример 2 - без массива (вообще)
  useEffect(()=>{
    console.log("UseEffect 2 - только при первой отрисовки и при любых изменениях");  
  })

  // Пример 3 - с указанием зависимостей
  useEffect(()=>{
    console.log("UseEffect 3 - при первой отрисовки и при изменениях переменной Dogs");
    
  },[numberOfDogs])

  return (
  <PageWrapper>
    <H1>Playground</H1>
    <Paragraph>Number of Dogs {numberOfDogs}</Paragraph>
    <Paragraph>Number of Birds {numberOfBirds}</Paragraph>
    <Button name="Add dog" type="button" onClick={handleAddDogs}/>
    <Button name="Add bird" type="button" onClick={handleAddBirds}/>
  </PageWrapper>
  )
}
