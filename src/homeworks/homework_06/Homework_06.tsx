import { Brand, Car_card, H3, Homework_06_wrapper } from "./styles";

function Homework_06() {
  // лучше использовать interface, type обычно оставляют для других целей
  interface Car {
    brand: string;
    price: number;
    isDiesel: boolean;
  }

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
      <Car_card key={car.brand} >
        <Brand>{car.brand}</Brand>
        <H3>Price: {car.price}</H3>
        <H3>Is Disel: {car.isDiesel ? "Yes" : "No"}</H3>
      </Car_card>
    );
  });

  console.log(cars);

  return <Homework_06_wrapper>{orderCars}</Homework_06_wrapper>;
}

export default Homework_06;
