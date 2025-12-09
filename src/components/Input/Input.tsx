import { InputWrapper,InputLabel,InputComponent } from "./styles";
import {type InputProps } from "./types";


function Input({ id, name, type, placeholder, label, error, disabled=false} : InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>
        {label}
      </InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
      />
    </InputWrapper>
  );
}

export default Input;
