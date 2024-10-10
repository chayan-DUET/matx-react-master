import { Box, styled } from "@mui/material";
import PaginationTable from "./PaginationTable";
import { Breadcrumb, SimpleCard } from "app/components";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showUser } from "features/userDetailSlice";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppChayan() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUser());
    console.log(dispatch(showUser()));
  }, []);
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Table" }]} />
      </Box>

      

      <SimpleCard title="Pagination Table hi dear Chayan how r u with nice MUI">
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
}
