import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password is too short - should be 6 chars minimum.").required("Required"),
});
const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <>
      <div className={css.login_form}>
        <h2 className={css.title}>Login</h2>
        <Formik initialValues={{ email: "", password: "" }} validationSchema={LoginSchema} onSubmit={handleSubmit}>
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Box marginBottom={2}>
                <Field as={TextField} type="email" label="Email" name="email" helperText={touched.email ? errors.email : ""} error={touched.email && Boolean(errors.email)} fullWidth />
              </Box>
              <Box marginBottom={2}>
                <Field as={TextField} type="password" label="Password" name="password" helperText={touched.password ? errors.password : ""} error={touched.password && Boolean(errors.password)} fullWidth />
              </Box>
              <Button className={css.submit_button} type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
