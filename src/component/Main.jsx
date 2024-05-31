import React from "react";
import { list, ourTeam, photoList, skills } from "./Data";
import styled from "@emotion/styled";
import {
  Box,
  Card,
  Stack,
  Typography,
  Avatar,
  CardContent,
  CardHeader,
} from "@mui/material";
import techPic from "../assets/images/techsis.jpg";
import Hero from "./Hero";
import BoltIcon from "@mui/icons-material/Bolt";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Section from "./Section";

export default function Main() {
  return (
    <Wrapper>
      <h1>Unlimited access to 100+ instructors.</h1>
      <NavLink>
        {list.map(({ id, title, type }) => {
          return (
            <li
              key={id}
              style={{ borderBottom: `${!type ? "1px solid" : "none"}` }}
            >
              {title}
            </li>
          );
        })}
      </NavLink>
      <MainWrapper>
        {photoList.map(({ id, pic, text, time, type }) => {
          return (
            <Section key={id} sx={{ width: "400px" }}>
              <Box>
                <Picture
                  src={pic}
                  alt={pic}
                  style={{ height: `${type ? "300px" : ""}` }}
                />
              </Box>

              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                {text}
              </Typography>
              <Typography variant="h6">{time}</Typography>
            </Section>
          );
        })}
      </MainWrapper>
      <Hero>
        <Typography variant="h3">
          Get the skills you need for a job that is in demand.
        </Typography>
        <Typography variant="h5">
          The modern labor market dictates its own terms. Today, to be a
          competitive specialist requires more than professional skills.
        </Typography>
      </Hero>
      <SkillWrapper>
        <SkillSet>
          {skills.map(({ id, skill, title, icon }) => {
            return (
              <IconList key={id}>
                <span style={{ width: "30px" }}>{icon}</span>
                <>
                  <Box>
                    <Typography>{skill}</Typography>
                    <Typography>{title}</Typography>
                  </Box>
                </>
              </IconList>
            );
          })}
        </SkillSet>
        <Box sx={{ width: "500px" }}>
          <Picture src={techPic} alt="tech-pic" />
        </Box>
      </SkillWrapper>
      <div>
        <h1>What our Customers say.</h1>
        <Section
          sx={{
            display: "flex",
            gap: "2rem",
            marginTop: "3rem",
            justifyContent: "center",
          }}
        >
          <CardList>
            {ourTeam.map(({ id, name, title, role, avi }) => {
              return (
                <MainCard key={id} sx={{ maxWidth: 280 }}>
                  <CardContent>
                    <Typography
                      variant="p"
                      color="text.secondary"
                      fontSize="17px"
                    >
                      {title}
                    </Typography>
                  </CardContent>
                  <CardHeader
                    avatar={<Avatar alt="avatar">{avi}</Avatar>}
                    title={name}
                    subheader={role}
                  />
                </MainCard>
              );
            })}
          </CardList>
        </Section>
        <Icon>
          <Box>
            <ArrowBackIcon sx={{ marginRight: "2em" }} />
            <ArrowForwardIcon />
          </Box>
        </Icon>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled(Box)`
  text-align: center;
  padding: 20px;
`;
const NavLink = styled.ul`
  width: 70%;
  margin: 0 auto;
  display: flex;
  gap: 15px;
  font-size: 25px;
  list-style: none;
  &:hover {
    color: #283618;
    cursor: pointer;
  }
`;
const Picture = styled.img`
  width: 100%;
  border-radius: 20px;
`;
const MainWrapper = styled(Box)`
  display: flex;
  gap: 20px;
  margin: 20px;
  h6 {
    text-align: start;
  }
`;
const SkillWrapper = styled(Hero)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
`;
const SkillSet = styled.div`
  list-style: none;
  padding: 50px;
`;
const IconList = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  text-align: left;
  padding: 40px;
`;
const CardList = styled.div`
  display: flex;
  gap: 20px;
  width: 150%;
  overflow: hidden;
  //   background: #FFFFFF;
  height: 15em;
  margin: 20px;
`;
const MainCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.5rem;
  border: none;
  font-family: sans-serif;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
`;
