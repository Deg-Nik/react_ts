import { useFormik } from "formik";
import * as Yup from "yup";
import { ContactUsContainer, Title } from "./styles";
import { CONTACT_US_VALUES } from "./types";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

export default function ContactUs() {
  const validationSchema = Yup.object().shape({
    [CONTACT_US_VALUES.FULLNAME]: Yup.string()
      .required("Enter your name")
      .min(3, "minimum 3 simbol")
      .max(50, "maximum 50 simbol"),
    [CONTACT_US_VALUES.PHONE]: Yup.string()
      .required("Enter your phone")
      .min(4, "minimum 4 simbol")
      .max(20, "maximum 20 simbol"),
    [CONTACT_US_VALUES.EMAIL]: Yup.string()
      .min(6, "minimum 6 simbol")
      .max(60, "maximum 60 simbol"),
  });

  const formik = useFormik({
    initialValues: {
      [CONTACT_US_VALUES.FULLNAME]: "",
      [CONTACT_US_VALUES.PHONE]: "",
      [CONTACT_US_VALUES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log(values, helpers);
      helpers.resetForm();
    },
  });

  return (
    <ContactUsContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <Input
        name={CONTACT_US_VALUES.FULLNAME}
        label={"Full name*"}
        placeholder="Your full name"
        value={formik.values[CONTACT_US_VALUES.FULLNAME]}
        onChange={formik.handleChange}
        error={formik.errors[CONTACT_US_VALUES.FULLNAME]}
      />
      <Input
        name={CONTACT_US_VALUES.PHONE}
        label={"Phone*"}
        placeholder="Your phone number"
        value={formik.values[CONTACT_US_VALUES.PHONE]}
        onChange={formik.handleChange}
        error={formik.errors[CONTACT_US_VALUES.PHONE]}
      />
      <Input
        name={CONTACT_US_VALUES.EMAIL}
        label={"Email"}
        placeholder="Your email"
        value={formik.values[CONTACT_US_VALUES.EMAIL]}
        onChange={formik.handleChange}
        error={formik.errors[CONTACT_US_VALUES.EMAIL]}
      />
      <Button name={"SEND REQUEST"} type="submit" />
    </ContactUsContainer>
  );
}
