import { useState, type ChangeEvent, type FormEvent } from "react";
import "./styles";

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

interface Universitets {
  country: string;
  name: string;
  web_pages: string[];
}

// Основная функция — это как весь узел в сборе
export default function Lesson_11() {
  const [country, setCountry] = useState<string>("");
  const [output, setOutput] = useState<Universitets[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const UrlUni: string = `http://universities.hipolabs.com/search?country=${country}`;

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCountry(event.target.value);
  };

  const getCountry = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setOutput([]);
    setError(undefined);
    setIsDisabled(true);

    try {
      const response = await axios.get(UrlUni);
      setOutput(response.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <PageWrapper>
      <ContainerInputButton onSubmit={getCountry}>
        <Input
          id="search-input"
          name="searchCountry"
          label="Country"
          placeholder="Enter Country for searching uneversities"
          value={country}
          onChange={onSearchChange}
        />
        <Button isDisabled={isDisabled} name="Get Universities" type="submit" />
      </ContainerInputButton>
      {output.length > 0 && (
        <Card>
          {output.slice(0, 15).map((universities: Universitets) => (
            <Text key={v4()}>
              {universities.country} {universities.name}
              {universities.web_pages}
            </Text>
          ))}
          {!!error && <ErrorText>{error}</ErrorText>}
        </Card>
      )}
    </PageWrapper>
  );
}
