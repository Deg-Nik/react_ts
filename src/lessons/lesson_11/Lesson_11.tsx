// Беру из React штуку, которая помогает хранить данные в компоненте
// ChangeEvent нужен, чтобы правильно понять, что произошло с полем ввода
import { useState, type ChangeEvent } from "react";

// Axios — это как шланг, через который я тяну данные из интернета
import axios from "axios";

// Готовые детали интерфейса: поле ввода и кнопка
import Input from "components/Input/Input";
import Button from "components/Button/Button";

// Обёртки и стили, чтобы всё выглядело аккуратно
import {
  PageWrapper,
  ContainerInputButton,
  Card,
  Text,
  ErrorText,
} from "./styles";

// Генератор уникальных номеров, чтобы React не путался в списке
import { v4 } from "uuid";

// Основная функция — это как весь узел в сборе
export default function Lesson_11() {
  // Здесь храню страну, которую вводит человек
  const [country, setCountry] = useState<string>("");

  // Здесь хранится список университетов, которые пришли с сервера
  const [output, setOutput] = useState<
    { country: string; name: string; web_pages: string[] }[]
  >([]);

  // Сюда записываю ошибку, если что-то пошло не так
  const [error, setError] = useState<string | undefined>(undefined);

  // Это флажок: можно нажимать кнопку или нельзя
  // Нельзя — пока идёт запрос
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  // Собираю адрес, куда буду делать запрос
  // Вставляю туда страну, которую ввёл человек
  const UrlUni = `http://universities.hipolabs.com/search?country=${country}`;

  // Эта функция срабатывает, когда человек печатает в поле
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Забираю текст из поля и кладу его в state
    setCountry(event.target.value);
  };

  // Эта функция вызывается, когда нажали кнопку или отправили форму
  const getCountry = async (event: any) => {
    // Останавливаю стандартное поведение формы,
    // чтобы страница не перезагружалась
    event.preventDefault();

    // Чищу старые данные, чтобы не мешались
    setOutput([]);

    // Убираю старую ошибку
    setError(undefined);

    // Блокирую кнопку, чтобы не нажимали по сто раз
    setIsDisabled(true);

    try {
      // Делаю запрос на сервер по собранному адресу
      const response = await axios.get(UrlUni);

      // То, что пришло с сервера, кладу в output
      setOutput(response.data);

    } catch (error: any) {
      // Если что-то сломалось — записываю сообщение об ошибке
      setError(error.message);
    } finally {
      // В любом случае включаю кнопку обратно
      setIsDisabled(false);
    }
  };

  return (
    // Общая обёртка страницы
    <PageWrapper>
      {/* Форма с полем и кнопкой */}
      <ContainerInputButton onSubmit={getCountry}>
        <Input
          id="search-input"
          name="searchCountry"
          label="Country"
          placeholder="Enter Country for searching uneversities"
          value={country}
          onChange={onSearchChange}
        />
        <Button
          isDisabled={isDisabled}
          name="Get Universities"
          type="submit"
        />
      </ContainerInputButton>

      {/* Здесь показываю результат или ошибку */}
      <Card>
        {/* Если данные пришли */}
        {output.length > 0 &&
          // Беру только первые 15, чтобы не было каши
          output.slice(0, 15).map((universities) => (
            // Каждой строке даю уникальный номер
            <Text key={v4()}>
              {universities.country} {universities.name}{" "}
              {universities.web_pages}
            </Text>
          ))}

        {/* Если есть ошибка — показываю её */}
        {!!error && <ErrorText>{error}</ErrorText>}
      </Card>
    </PageWrapper>
  );
}

