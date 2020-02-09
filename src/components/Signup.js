import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Signup = () => {
  const formik = useFormik({
    // inial values needs to be the same as the form values
    initialValues: {
      email: "",
      password: ""
    },
    // validation using Yup object
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Name must be 3 characters at least")
        .required("required"),
      lastName: Yup.string()
        .min(3, "Name must be 3 characters at least")
        .required("required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      )
    }),
    // when submitted, get the values from the values object of formik and pass it to the JSON to convert it into the string
    onSubmit: (values, { resetForm }) => {
      // emulate server's delay
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        // reset the form to null after submitted
        resetForm();
      }, 500);
    }
  });
  // to change background of the pages
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(120deg, #4568dc, #b06ab3)";
    return () => {
      document.body.style.background =
        "linear-gradient(120deg, #ff5e62, #ff9966)";
    };
  });
  return (
    <div className="signup-page">
      <form className="form-signup" onSubmit={formik.handleSubmit}>
        <h1> Signup </h1>
        <div className="input-box">
          <input
            className="firstName"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="has-error"> {formik.errors.firstName} </div>
          ) : null}
        </div>
        <div className="input-box">
          <input
            className="lastName"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="has-error"> {formik.errors.lastName} </div>
          ) : null}
        </div>
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
        <div className="input-box">
          <input
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            placeholder="Enter matching password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirmation}
          />
          {formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation ? (
            <div className="has-error">
              {" "}
              {formik.errors.passwordConfirmation}{" "}
            </div>
          ) : null}
        </div>

        <input type="submit" value="Signup" className="btn" />

        <div className="bottom-text">
          Already have an account?{" "}
          <Link to="/login">
            {" "}
            <a href="#">Login</a>{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
