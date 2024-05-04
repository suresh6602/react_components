/* eslint-disable no-unused-vars */
import { Grid, InputAdornment, Switch, TextField } from "@mui/material";
import CustomDataGrid from "./index";
import SearchIcon from "@mui/icons-material/Search";
import { getNurse } from "./datagrid.api";
import { useState } from "react";
import { wrap } from "framer-motion";
const Nurse = () => {
  const cloumn = [
    {
      field: "fullName",
      headerName: "Full name",
      width: 200,
      // flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "email",
      width: 300,
      // flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phoneNumber",
      headerName: "phone number",
      width: 200,
      // flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "level",
      headerName: "level",
      width: 120,
      // flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "isActive",
      headerName: "Active",
      width: 150,
      // flex: 1,
      headerAlign: "left",
      align: "left",
      renderCell: (item) => {
        return (
          <>
            <Switch size="medium" checked={item?.row?.isActive} />
          </>
        );
      },
    },
    {
      field: "totalApplicationTime",
      headerName: "Total app time (Mins)",
      width: 240,
      // flex: 1,
      headerAlign: "left",
      align: "center",
      renderCell: (item) => {
        return <>{Math.floor(item?.row?.totalApplicationTime / 60)} mins</>;
      },
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [values, setValue] = useState("");

  const { data, isLoading } = getNurse(currentPage, pageSize, values);

  const handlePageChange = (params) => {
    setCurrentPage(params.page);
    setPageSize(params.pageSize);
  };

  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Grid
        item
        width={"100%"}
        rowGap={2}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        flexWrap={wrap}
      >
        <TextField
          sx={{ alignSelf: "flex-start" }}
          variant="outlined"
          size="small"
          placeholder="Search by mobile number"
          onChange={handleSearchChange}
          value={values}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <CustomDataGrid
          isLoading={isLoading}
          cloumn={cloumn}
          onPageChange={handlePageChange}
          pageSize={pageSize}
          rowCount={
            data?.responseObj?.responseDataParams?.data?.totalUsers
              ? data?.responseObj?.responseDataParams?.data?.totalUsers
              : 0
          }
          data={
            data?.responseObj?.responseDataParams?.data?.users
              ? data?.responseObj?.responseDataParams?.data?.users
              : []
          }
        />
      </Grid>
    </>
  );
};

export default Nurse;
