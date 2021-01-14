import * as React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import mock_data from "../data/mock_data.json";

const useStyles = makeStyles((theme) => ({
  // TODO
}));

function Page() {
  const classes = useStyles();

  console.log(mock_data);
  // 請搭配 React Hook 實作有 client-side search, client-side filter 功能之 table
  // Filter: 選項 All / Male / Female (Radio Group)
  // Search: 透過關鍵字篩選 First_name, last_name, email

  // Table 須要有 fixed header 且奇數偶數行顏色不同

  return <Container>{/* TODO */}</Container>;
}

export default Page;
