import { ButtonComponent } from "./styles";
import { type ButtonProps } from "./types";

function Button({ name = "Send", type = "button", onClick, isRed= false, isDisabled= false}: ButtonProps) {
  return (
    <ButtonComponent $isRed={isRed} disabled={isDisabled} type={type} onClick={onClick}>
      {name}
    </ButtonComponent>
  );
}

export default Button;
