import { useMutation } from "react-query";
import login from "./index.api";
import { Navigate } from "react-router";
import CustomAlert from "../components/alert";
import React, { useContext } from "react";
import { Button } from "@mui/base";
import Loader from "../components/loader";
const { alert, setAlert } = useContext();

const Usemutation = () => {
  const { mutate: loginMutate, isLoading } = useMutation(login, {
    onSuccess: (response) => {
      const Admin =
        response?.data?.responseObj?.responseDataParams?.data?.isAdmin == true
          ? true
          : false;
      if (response?.data?.responseObj?.responseCode == 200 && Admin) {
        const token =
          response?.data?.responseObj?.responseDataParams?.data?.token;
        setAlert({
          open: true,
          severity: "success",
          message: response?.data?.responseObj?.responseMessage,
        });
        setTimeout(() => {
          localStorage.setItem("token", token);
          Navigate("/dashboard");
          setAlert({
            open: false,
            severity: "",
            message: "",
          });
        }, 1000);
      } else {
        setAlert({
          open: true,
          severity: "warning",
          message: "you are not a authorized person to login",
        });
      }
    },

    onError: (error) => {
      setAlert({
        open: true,
        severity: "error",
        message: "Something went wrong...!",
      });
      return error;
    },
  });

  const onSubmit = (data) => {
    loginMutate(data);
  };
  return (
    <>
      <Loader load={isLoading} circle={true} />
      <CustomAlert
        open={alert?.open}
        message={alert?.message}
        severity={alert?.severity}
        onclose={() => true}
      />
      <Button
        onClick={() => {
          onSubmit;
        }}
      ></Button>
    </>
  );
};

export default Usemutation;
