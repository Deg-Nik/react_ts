import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

import { PageWrapper, ButtonControl } from "./styles";

function About() {

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/")
  };

  const goBack = () => {
    navigate(-1)
  };
  
  return (
    <PageWrapper>
      Information about company
      <ButtonControl>
        <Button name="Go back" onClick={goBack}/>
      </ButtonControl>
      <ButtonControl>
        <Button name="Go to Home page" onClick={goToHomePage} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default About;
