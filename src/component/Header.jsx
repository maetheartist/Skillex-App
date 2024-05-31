import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { Box, Typography, Stack } from "@mui/material";
import { userData } from "./Data";
import styled from "@emotion/styled";

export default function Header() {
  return (
    <div>
      <Navbar />
      <Hero>
        <Stack>
          <Typography variant="h3">Watch.</Typography>
          <Typography variant="h3">Learn.</Typography>
          <Typography variant="h3">Grow.</Typography>
        </Stack>
        <ImgWrapper>
          {userData.map(({ id, title, subTitle, bgimage }) => {
            return (
              <Img key={id} bgimage={bgimage}>
                {title} <span>{subTitle}</span>
              </Img>
            );
          })}
        </ImgWrapper>
      </Hero>
    </div>
  );
}
const ImgWrapper = styled(Box)`
  display: flex;
  gap: 20px;
  h5 {
    color: white;
  }
`;
const Img = styled(Box)`
  width: 300px;
  background-image: url(${({ bgimage }) => bgimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  border-radius: 10px;
  padding: 20px;
`;
