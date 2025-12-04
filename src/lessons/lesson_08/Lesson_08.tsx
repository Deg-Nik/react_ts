
import { PageWrapper, Paragraph, ButtonControl } from "./styles";
import Button from "components/Button/Button";

function Lesson_08() {
  return (
    <PageWrapper>

      <Paragraph>Lesson_08</Paragraph>

      <ButtonControl>
        <Button name="Go back"/>
      </ButtonControl>

      <ButtonControl>
        <Button isRed name="Delete"/>
      </ButtonControl>

      <ButtonControl>
        <Button isDisabled name="Disable"/>
      </ButtonControl>

    </PageWrapper>
  );
}
export default Lesson_08;
