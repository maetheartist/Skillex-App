import React from "react";
import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";

export default function Section({ id, children }) {
  return (
    <Stack key={id} >
      {children}
    </Stack>
  );
}
