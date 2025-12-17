import { useState, type ChangeEvent } from "react";
import axios from "axios";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import {
  PageWrapper,
  ContainerInputButton,
  Card,
  Text,
  ErrorText,
} from "./styles";
import { v4 } from "uuid";

export default function Lesson_11() {
  const [country, setCountry] = useState<string>("");
  const [output, setOutput] = useState<
    { country: string; name: string; web_pages: string[] }[]
  >([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const UrlUni = `http://universities.hipolabs.com/search?country=${country}`;

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const getCountry = async (event: any) => {
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
      <Card>
        {output.length > 0 &&
          output.slice(0, 15).map((universities) => (
            <Text key={v4()}>
              {universities.country} {universities.name}{" "}
              {universities.web_pages}
            </Text>
          ))}
        {!!error && <ErrorText>{error}</ErrorText>}
      </Card>
    </PageWrapper>
  );
}


