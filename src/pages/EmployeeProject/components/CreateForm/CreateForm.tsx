import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { CREATE_FORM_VALUES } from "./types";
import { LoginFormContainer, InputsContainer, } from "./styles";

const validationShema = Yup.object().shape({
  [CREATE_FORM_VALUES.NAME]: Yup.string()
    .required("Email field is required")
    .email("fild email forme"),
  [CREATE_FORM_VALUES.SURNAME]: Yup.string()
    .required("Password field is required")
    .min(5, "min 5 simbols")
    .max(10, "max 10 simbols"),
  [CREATE_FORM_VALUES.AGE]: Yup.number()
    .required("Password field is required")
    .min(5, "min 5 simbols")
    .max(10, "max 10 simbols"),
  [CREATE_FORM_VALUES.JOB_POSITION]: Yup.string()
    .required("Password field is required")
    .min(5, "min 5 simbols")
    .max(10, "max 10 simbols"),  
});

function CreateForm() {
  const formik = useFormik({
      initialValues: {
        [CREATE_FORM_VALUES.NAME]: "",
        [CREATE_FORM_VALUES.SURNAME]: "",
        [CREATE_FORM_VALUES.AGE]: "",
        [CREATE_FORM_VALUES.JOB_POSITION]: "",
      },
      validationSchema: validationShema,
      validateOnChange: false,
      onSubmit: (values, helpers) => {
        console.log("formik");
        console.log(values, helpers);
      },
    });
  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
          <Input
          id="name-id"
          name={CREATE_FORM_VALUES.NAME}
          placeholder="Enter your name"
          label="Name*"
          // formik.values.email - мы прописываем, чтобы элемент формы получил значение
          // которое пользователь вводит с клавиатуры
          value={formik.values[CREATE_FORM_VALUES.NAME]}
          // formik.handleChange - помогает контрлировать ввод пользователя данных с клавиатуры
          // и когда пользователь что-то вводит, то formik.handleChange записывает данные в formik.values.email
          onChange={formik.handleChange}
          error={formik.errors[CREATE_FORM_VALUES.NAME]}
        />
        <Input
          id="surname-id"
          name={CREATE_FORM_VALUES.SURNAME}
          type="surname"
          placeholder="Enter your surname"
          label="Surname*"
          value={formik.values[CREATE_FORM_VALUES.SURNAME]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_FORM_VALUES.SURNAME]}
        />
        <Input
          id="age-id"
          name={CREATE_FORM_VALUES.AGE}
          type="age"
          placeholder="Enter your age"
          label="Age*"
          value={formik.values[CREATE_FORM_VALUES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_FORM_VALUES.AGE]}
        />
        <Input
          id="job-id"
          name={CREATE_FORM_VALUES.JOB_POSITION}
          type="job"
          placeholder="Enter your job position"
          label="Job Position"
          value={formik.values[CREATE_FORM_VALUES.JOB_POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_FORM_VALUES.JOB_POSITION]}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  )
}
export default CreateForm;