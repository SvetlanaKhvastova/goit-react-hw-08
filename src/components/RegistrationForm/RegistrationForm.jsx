import { useDispatch } from "react-redux";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password is too short - should be 6 chars minimum.").required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <div className={css.registration_form}>
        <h2 className={css.title}>Registration</h2>
        <Formik initialValues={{ name: "", email: "", password: "" }} validationSchema={RegistrationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Box marginBottom={2}>
                <Field as={TextField} label="name" name="name" helperText={touched.username ? errors.username : ""} error={touched.username && Boolean(errors.username)} fullWidth />
              </Box>
              <Box marginBottom={2}>
                <Field as={TextField} type="email" label="Email" name="email" helperText={touched.email ? errors.email : ""} error={touched.email && Boolean(errors.email)} fullWidth />
              </Box>
              <Box marginBottom={2}>
                <Field as={TextField} type="password" label="Password" name="password" helperText={touched.password ? errors.password : ""} error={touched.password && Boolean(errors.password)} fullWidth />
              </Box>
              <Button className={css.submit_button} type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegistrationForm;
