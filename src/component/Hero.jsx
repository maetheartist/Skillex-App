import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Stack } from "@mui/material";

export default function Hero({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
