import { PageWrapper, Paragraph, ButtonControl, InputControl } from "./styles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";



function Homework_08() {
  return (
    <PageWrapper>

      <Paragraph>Homework_08</Paragraph>

      <InputControl>
        <Input  name="Enter" type="text" placeholder="Enter" label="Enter"/>
      </InputControl>
      <ButtonControl>
        <Button name="Blue"/>
      </ButtonControl>

      <InputControl>
        <Input error="false email" name="Email" type="email" placeholder="Enter your email" label="Email"/>
      </InputControl>
      <ButtonControl>
        <Button isRed name="Red"/>
      </ButtonControl>

      <InputControl>
        <Input disabled error="Some error" name="Enter" type="text" placeholder="Enter" label="Enter"/>
      </InputControl>
      <ButtonControl>
        <Button isDisabled name="Disable"/>
      </ButtonControl>
    </PageWrapper>
  )
}
export default Homework_08;