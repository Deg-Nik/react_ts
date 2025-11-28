import "./styles.css";

function Lesson_06() {
  // 1 тип. string - строковый тип
  let userFullName: string = "John Johnson";
  // userFullName = 30; // будет ошибка!

  //   let hello: string = 30; // будет ошибка!
  let hello: string = `Hello, ${userFullName}`;
  console.log(hello);

  //   автоматическое определение типа
  let name = "Tom";
  //   name = 23; // будет ошибка!
  // //////////////////////////////////////////////
  // 2 тип. number - числовой
  let result: number = 100;
  //   result = "30";  // будет ошибка!
  result = 45.5;
  result = -10;
  result = NaN;
  result = Infinity;
  console.log(result);
  // /////////////////////////////////////////////////
  //  3 тип. boolean - логический
  let isAdmin: boolean = true;
  isAdmin = false;
  // //////////////////////////////////////////////////
  //   4. Массив
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  //   animals.push(100); // будет ошибка!

  const numbers: number[] = [1, 2, 100, 4];
  console.log(numbers);
  // ////////////////////////////////////////////////////
  //  5. Tupel (кортеж)
  const userArray: [string, string, string, number] = [
    "name",
    "Bob",
    "age",
    30,
  ];

  //   userArray[0] = true;  // будет ошибка!
  // ////////////////////////////////////////////////////
  //  6. Типизация функций
  // 6.1 Функция, которая что-то выполняет, но ничего не возвращает и имеет параметр
  //   1 способ (используем его!)
  const sayHi = (personalName: string): void => {
    console.log(`Hello, ${personalName}`);
  };

  //   2 способ
  //   const sayHi: (personalName: string) => void = (personalName) => {
  //     console.log(`Hello, ${personalName}`);
  //   };

  //   6.2 Функции, которые что-то возвращают
  const add = (a: number, b: number): number => {
    return a + b;
  };

  console.log(add(1, 2));
  //   add(3, '20') // будет ошибка!
  // ///////////////////////////////////////////////////////
  //   7. any - любой
  let anyVariable: any = "hello";
  anyVariable = 3;
  anyVariable = [1, "a", true];
  //  ////////////////////////////////////////////////////
  //   8. null и undefined
  let count: null = null;
  //   count = 1; // будет ошибка!

  let year: undefined = undefined;
  //   year = 3; // будет ошибка!
  // //////////////////////////////////////////////////
  //   9. union
  let userAge: undefined | number | string = undefined;
  userAge = "40";
  //  ////////////////////////////////////////////////
  //   10. Object
  interface User {
    firstName: string;
    age: number;
  }

  const userData: User = {
    firstName: "Mary",
    age: 30,
    lastName: "Smith",
  };

  interface Admin extends User {
    isAdmin: boolean;
  }

  const adminData: Admin = {
    isAdmin: true,
    firstName: "Bob",
    lastName: "John Johnson",
    age: 34,
  };

  //   можно дописать свойства для интерфейса
  interface User {
    lastName: string;
  }

  //   11. type
  type Animal = {
    name: string;
  };

  type GlobalAnimalProps = {
    isAnimal: boolean
  }

  const animalData: Animal = {
    name: "Lion",
  };

  const animalZoo: Animal | GlobalAnimalProps = {
    name: "Hipo",
    isAnimal: true
  }

  type Color = string | number | null;
  let backColor: Color = "black";
  backColor = 1234;

  let fontColor: Color = "red";
  fontColor = null;

  return (
    <div className="lesson_06_page_wrapper">
      Lesson 06
    </div>
  );
}

export default Lesson_06;