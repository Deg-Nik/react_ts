import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { PageWrapper, ContainerInputButton, Card, Text, ErrorText } from "./styles";

export default function Lesson_11() {
  const [country, setCountry] = useState<string>("");
  const [output, setOutput] = useState<[]>([])
  const [error, setError] = useState<string | undefined>(undefined);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const UrlUni = `http://universities.hipolabs.com/search?country=${country}`;

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  // const input = (event: any) => {
  //   event.preventDefault();
  //   console.log(country);
  // };

  const getCountry = async (event: any) => {
    event.preventDefault();
    setOutput([]);
    setError(undefined);
    setIsDisabled(true);

    try {
      const response = await axios.get(UrlUni);
      const data = response.data;
      // тут пишем логику, когда нам пришла шутка(статус промиса fullfiled)
      // setOutput(`${data.country} ${data.name} ${data.web_pages}`);
    } catch (error: any) {
      // тут пишем логику, когда нам пришла ошибка(статус промиса rejected)
      setError(error.message);
    } finally {
      setIsDisabled(false);
    }
  };

  // useEffect(() => {
  //   getCountry();
  // }, []);

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
      <Card>
        {!!output && <Text>{output}</Text>}
        {!!error && <ErrorText>{error}</ErrorText>}
      </Card>
    </PageWrapper>
  );
}

// slice()
// filter()
// array.slice(start, end)