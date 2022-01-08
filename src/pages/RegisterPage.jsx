import { autocompleteClasses, Avatar, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import NameField from "../components/form-control/NameField";
import PasswordField from "../components/form-control/PasswordField";
import "./LoginPage.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import userApi from "../api/userApi";
import { register } from "../app/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from 'notistack';
const schema = yup.object().shape({
  userName: yup
    .string()
    .required("Please enter your name")
    .test(
      "Please enter as least as 2 word",
      "Please enter as least as 2 word",
      (value) => {
        return value.split(" ").length >= 2;
      }
    ),
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter valid email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Please enter as least as 6 character"),
  retypePassword: yup
    .string()
    .required("Please enter Confirm Password")
    .oneOf([yup.ref("password")], "Not correct , please enter again"),
});

const RegisterPage = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading , setIsLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit =  async (data) => {
    setIsLoading(true);
    try { 
        const action = register({
            email: data.email,
            password: data.password,
            returnSecureToken: true,
            userName: data.userName,
        })
        const resultAction = await dispatch(action);
        unwrapResult(resultAction);
        enqueueSnackbar('Register successfully.' , {variant : 'success'})
        navigate('/');
    } catch (error) {
       if(error.message === "Request failed with status code 400") {
           let message = "This email already exists";
           enqueueSnackbar(message , {variant : 'error'})
           setIsLoading(false);
       }
    }
    setIsLoading(false);
  };
  return (
    <div className="login">
      <div className="login-wrapper">
        <h1>Sign In</h1>
        <Avatar className="avt" />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <NameField name="userName" label="Full Name" />
            <NameField name="email" label="Email" />
            <PasswordField name="password" label="Password" />
            <PasswordField name="retypePassword" label="Retype Password" />
            {isLoading ? <div className="loadingCtn">
                <CircularProgress />
            </div>: <button className="btn btn-primary fw mg-top25">Register</button> }
            <Link to="/login">
              <p className="login__link mg-top25">
                You already have an account? Go to login page.
              </p>
            </Link>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default RegisterPage;
