import "./styles.css";
import {type Car} from "./type"
import { v4 } from "uuid";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  // Типизируем параметры функции
  const orderCars = cars.map((car: Car) => {
    return (
      // Для key использовать index плохая практика
      <div key={v4()} className="car_card">
        <h1 className="brand">{car.brand}</h1>
        <h3>Price: {car.price}</h3>
        <h3>Is Disel: {car.isDiesel ? "Yes" : "No"}</h3>
      </div>
    );
  });

  console.log(cars);

  return <div className="homework_06_wrapper">{orderCars}</div>;
}

export default Homework_06;
