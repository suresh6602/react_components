import React from "react";
import getDashboardDetails from "./index.api";
import Loader from "../components/loader";
import { Grid } from "@mui/material";
const Usequery = () => {
  const { data, isLoading } = getDashboardDetails();
  return (
    <>
      <Loader load={isLoading} circle={true} />
      <Grid>{data}</Grid>
    </>
  );
};

export default Usequery;
