// import { type FormEvent, type ChangeEvent, useState } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LOGIN_FORM_VALUES } from "./types";
import { LoginFormContainer, InputsContainer, Title } from "./styles";
import { useState, type ChangeEvent } from "react";

function LoginForm() {
  // Пример контроля  input
  // const [firstName, setFirstName] = useState<string>("");

  // const onChange = (event: any) => {
  //   setFirstName(event.target.value);
  // };

  // ШАГ 1 Создаем стейты для контроля HTML элеметов Input
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // ШАГ 2 создаем функции onChange для ловли события change, чтобы получить доступ к введенным данным полльзователя и обновить стейты
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const login = (event: any) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <LoginFormContainer onSubmit={login}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          value={email}
          onChange={onChangeEmail}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={password}
          onChange={onChangePassword}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;
