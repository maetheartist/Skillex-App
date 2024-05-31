import React from "react";
import Logo from "./Logo";
import styled from "@emotion/styled";
import Halo from "../assets/images/Halo.svg";
import Facebook from "../assets/images/Facebook.svg";
import Behance from "../assets/images/Behance.svg";
import LinkedIn from "../assets/images/LinkedIn.svg";
import Instagram from "../assets/images/Instagram.svg";
import Ball from "../assets/images/Ball.svg";
import logo from "../assets/images/logo.svg";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box>
      <Container>
        <FooterData>
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <Links>
              <LinkChild>FInd Passion</LinkChild>
              <LinkChild>Categories</LinkChild>
              <LinkChild>Skills</LinkChild>
              <LinkChild>Customer</LinkChild>
            </Links>
          </div>
          <div>
            <Typography>Join Our Community</Typography>
            <form noValidate autoComplete="off">
              <FormControl
                sx={{ width: "25ch", marginTop: "1em", marginBottom: "3em" }}
              >
                <OutlinedInput placeholder="Please enter text" />
              </FormControl>
            </form>
          </div>
        </FooterData>
        <FooterSubData>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Halo} alt="" />
            <Typography>2021 Halo Lab. All rights reserved</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Img src={Behance} alt="" />
            <Img src={Facebook} alt="" />
            <Img src={LinkedIn} alt="" />
            <Img src={Instagram} alt="" />
            <Img src={Ball} alt="" />
          </Box>
        </FooterSubData>
      </Container>
      <FooterBottomText>
        Like & Follow from you. New free to use projects from us.
      </FooterBottomText>
    </Box>
  );
}
const Links = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
  width: 100%;
`;

const LinkChild = styled.li`
  list-style: none;
`;

const FooterData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5em;
  border-bottom: 1px Solid #918b8a;
`;

const FooterSubData = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
`;

const Img = styled.img`
  border: 1px solid;
`;
const FooterBottomText = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 1em;
  margin-top: 1em;
  background: #1e1e2f;
`;
