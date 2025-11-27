import "./styles.css";

function Lesson_06() {
  // 1. String
  let userFullName: string = "John Johnson";

  let hello: string = `Hello, ${userFullName}`;
  console.log(hello);
  

  // автоматическое определение типа
  let name = "Tom";
  // name = 23 - ошибка

  //////////////////////////////////////

  // 2. Number
  let result: number = 100;
  // result = "30" - ошибка
  result = 45.5;
  result = -10;
  result = NaN;
  result = Infinity;
  console.log(result);

  //////////////////////////////////////

  // 3. Boolean
  let isAdmin: boolean = true;
  isAdmin = false; 

  //////////////////////////////////////

  // 4. Map
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  // animals.push(100) - ошибка
  console.log(animals);
  

  const numbers: number[] = [1, 2, 3, 4]
  console.log(numbers);

  ////////////////////////////////////////

  // 5. Tupel
  const userArray: [string, string, string, number] = ["name", "Bob", "age", 30];
  // userArray[0] = true; - ошибка

  ////////////////////////////////////////

  // 6. Function
  // 6.1  
  const sayHi = (personalName: string): void =>{
    console.log(`Hallo, ${personalName}`);   
  };

  // const sayHi: (personalName: string)=>void = (personalName) =>{
  //   console.log(`Hallo, ${personalName}`);   
  // };

  // 6.2
  const add = (a: number, b: number): number =>{
    return a + b;
  }
  console.log(add (1, 2));
   
  ///////////////////////////////////////////

  // 7. Any
  let anyVariable: any = "hallo";
  anyVariable = 3;
  anyVariable = [1, "3", true]; 

  ///////////////////////////////////////////

  // 8. null , undefined
  let count: null = null;
  // count = 1;  - ошибка

  ////////////////////////////////////////////

  // 9. Union
  let userAge: undefined | number | string = undefined;
  userAge = 40; 

  ///////////////////////////////////////////
  // 10. Object
  interface User {
    firstName: string,
    lastName: string,
    age: number,
  }

  const userData: User = {
    firstName: "John",
    lastName: "Johnson",
    age: 35,
  }

  interface Admin extends User {
    isAdmin: boolean,
  }

  const adminData: Admin = {
    isAdmin: true,
    firstName: "Bob",
    lastName: "Bobson",
    age: 40,
  }

  interface User {
    //////////..../////
  }

  ////////////////////////////////////

  // 11. Type
  type Animal = {
    name: string,
  }

  const animalData: Animal = {
    name: "Lion",
  }

  




  return (
    <div className="lesson_06_page_wrapper">
      Lesson 06
    </div>
  );
}

export default Lesson_06;