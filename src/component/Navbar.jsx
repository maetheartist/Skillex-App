import React from "react";
import Logo from "./Logo";
import { Box, Button, Stack } from "@mui/material";
import { navList } from "./Data";

import styled from "@emotion/styled";
export default function Navbar() {
  return (
    <Box>
      <NavItems spacing={4} alignItems="center">
        <Logo />
        <NavLink>
          {navList.map(({ item, id }) => (
            <li key={id}> {item}</li>
          ))}
        </NavLink>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            sx={{ border: "1px solid black", color: "inherit" }}
          >
            Log In
          </Button>
          <Button
            variant="contained"
            sx={{ background: "black", borderRadius: "15px" }}
          >
            Free Trial
          </Button>
        </Stack>
      </NavItems>
    </Box>
  );
}
const NavLink = styled.ul`
  display: flex;
  gap: 15px;
  font-size: 25px;
  list-style: none;
  &:hover {
    color: #283618;
    cursor: pointer;
  }
`;
const NavItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
