import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import Button from "components/Button/Button";
import { PageWrapper, Card, Title, ContainerJoke, Text, ErrorText } from "./styles";

function Homework_10() {
  const [jokeSetup, setJokeSetup] = useState<string | undefined>(undefined);
  const [jokePunchline, setJokePunchline] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const JOKE_URL = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    try {
      setJokeSetup(undefined);
      setJokePunchline(undefined)
      setError(undefined);
      const response = await axios.get(JOKE_URL);
      setJokeSetup(response.data.setup);
      setJokePunchline(response.data.punchline);
    } catch {
      setError("Some Network Error");
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <Card>
        <Title>Homework_10</Title>
        <ContainerJoke>
          {!!jokeSetup && <Text>{jokeSetup}</Text>}
          {!!jokePunchline && <Text>{jokePunchline}</Text>}
          {!!error && <ErrorText>{error}</ErrorText>}
        </ContainerJoke>
        <Button name="Add Joke" type="button" onClick={getJoke} />
      </Card>
    </PageWrapper>
  );
}

export default Homework_10;
