import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, CircularProgress } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { login } from "../app/userSlice";
import NameField from "../components/form-control/NameField";
import PasswordField from "../components/form-control/PasswordField";
import "./LoginPage.scss";
import userApi from "../api/userApi";
import { useSnackbar } from "notistack";
const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter valid email!"),
    password: yup.string().required("Hãy nhập Password của bạn !"),
  });
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      const action = login({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      });
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      enqueueSnackbar("Login Successfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      if (error.message === "Request failed with status code 400") {
        let message = "Login Failed";
        enqueueSnackbar(message, { variant: "error" });
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
            {/* <NameField name="firstName" label="First Name"/> */}
            <NameField name="email" label="Email" />
            <PasswordField name="password" label="Password" />
            {isLoading ? (
              <div className="loadingCtn">
                <CircularProgress />
              </div>
            ) : (
              <button className="btn btn-primary fw mg-top25">
                Login
              </button>
            )}
            <Link to="/register">
              <p className="login__link mg-top25">
                You don't have an account , let create a new one
              </p>
            </Link>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default LoginPage;
