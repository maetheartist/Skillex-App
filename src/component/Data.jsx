import img1 from "../assets/images/writing-course-img.webp";
import img2 from "../assets/images/business-course-img.webp";
import img3 from "../assets/images/writing-course2-img.webp";

import pic1 from "../assets/images/salesmkt.webp";
import pic2 from "../assets/images/analytics.webp";
import pic3 from "../assets/images/copywrite.webp";
import pic4 from "../assets/images/designArt.webp";

import BoltIcon from "@mui/icons-material/Bolt";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";

import avi from "../assets/images/user4.jpg";

export const navList = [
  { id: 1, item: "Find Passion" },
  { id: 2, item: "Categories" },
  { id: 3, item: "Skills" },
  { id: 4, item: "Customer" },
];
export const skills = [
  {
    id: 1,
    skill: "Leadership",
    title: "Fully committed to the success company",
    icon: <LightbulbIcon />,
  },
  {
    id: 2,
    skill: "Responsibility",
    title: "Employees will always be my top priority",
    icon: <PsychologyIcon />,
  },
  {
    id: 3,
    skill: "Flexibility",
    title: "The ability to switch is an important skill",
    icon: <BoltIcon />,
  },
];
export const userData = [
  {
    id: 2,

    title: "Writing Course.",
    subTitle: "100 Topics",
    bgimage: img1,
  },
  {
    id: 3,

    title: "Writing Course.",
    subTitle: "100 Topics",
    bgimage: img2,
  },
  {
    id: 4,

    title: "Business Course.",
    subTitle: "100 Topics",
    bgimage: img3,
  },
];

export const list = [
  { id: 1, title: "All Categories", type: false },
  { id: 2, title: "Entertainment", type: true },
  { id: 3, title: "Lifestyle", type: true },
  { id: 4, title: "Writing", type: true },
  { id: 5, title: "Business", type: true },
  { id: 6, title: "Food", type: true },
];
export const photoList = [
  { id: 1, pic: pic1, text: "Sales Marketing", time: "4 months", type: "" },
  { id: 2, pic: pic2, text: "Data Analytics", time: "3 months", type: "green" },
  { id: 3, pic: pic3, text: "Copywriting Pro", time: "2 months", type: "" },
  { id: 4, pic: pic4, text: "Design Art", time: "4 months", type: "" },
];

export const ourTeam = [
  {
    id: 1,
    title:
      "The explanations are clear, the teachers are responsible and friendly, and the homework is practical",
    pic: avi,
    name: "Rob Zuber",
    role: "CEO",
  },
  {
    id: 2,
    title:
      "I learnt a lot of new things, I immediately apply my knowledge in my work, found myself a new client.",
    pic: avi,
    name: "Melanie Pickett",
    role: "IT Analyst",
  },
  {
    id: 3,
    title:
      "I really like the speakers of the course and the quality of the lectures. There is always feedback",
    pic: avi,
    name: "Reggie Wilson",
    role: "Engineer",
  },
  {
    id: 4,
    title:
      "A new profession is a lot of vivid impressions. Today I was at the presentation of the regional business award",
    pic: avi,
    name: "Emma Watson",
    role: "Cook",
  },
  {
    id: 5,
    title:
      "A new profession is a lot of vivid impressions. Today I was at the presentation of the regional business award",
    pic: avi,
    name: "Emma Watson",
    role: "Cook",
  },
  {
    id: 6,
    title:
      "On the course, 'Data Analysis' in Python everything is very interesting and informative, very detailed material",
    pic: avi,
    name: "Chris Hemsworth",
    role: "Analyst",
  },
  {
    id: 7,
    title:
      "For several months I studied one of the most popular programming languages on the course 'Java Development' ",
    pic: avi,
    name: "Elizabeth Stone",
    role: "Developer",
  },
];
