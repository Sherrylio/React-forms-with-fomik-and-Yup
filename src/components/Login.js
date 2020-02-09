import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    }),
    onSubmit: (values, { resetForm }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }, 500);
    }
  });
  return (
    <div className="login-page">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h1> Login </h1>
        <div className="input-box">
          <input
            className="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="has-error"> {formik.errors.email} </div>
          ) : null}
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="has-error"> {formik.errors.password} </div>
          ) : null}
        </div>

        <input type="submit" value="Login" className="btn" />

        <div className="bottom-text">
          Don't have an account?{" "}
          <Link to="/signup">
            {" "}
            <a href="#">Sign up</a>{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
