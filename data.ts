import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b>React.js</b>, <b>Next.js</b>   and <b>TypeScript</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "I can handle database, server, api using <b>Node.js</b>, <b>Golang</b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Go</b> and <b>Gin</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "Daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Stunning User Interface Designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Attention to Detail",
    about:
      "Meticulously tested and debugged code, resulting in a 99% bug free product",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Next",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Golang",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "75",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    name: "PropertyRadar App",
    description:
      "This app is a real estate application that provides comprehensive data and analytics for real estate professionals, allowing users to discover opportunities, analyze deals, manage relationships, and automate marketing",
    image_path: "/images/PropertyRadar.png",
    deployed_url: "https://www.propertyradar.com/",
    github_url: "",
    category: ["react", "next"],
    key_techs: ["React.js", "Next.js", "Material UI"],
  },

  {
    name: "Invitae Multi-Cancer Panel",
    image_path: "/images/Invitae.png",
    deployed_url: "https://www.invitae.com/en",
    github_url: "",
    category: ["node", "react"],
    description:
      "The site provides detailed information about the various genetic tests offered by Invitae, including tests for hereditary cancer, cardiovascular conditions, neurological disorders, pediatric conditions, and rare diseases",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Trinity Media LLC",
    image_path: "/images/TRINITY MEDIA LLC.png",
    deployed_url: "https://www.trinitymediauae.com/",
    github_url: "",
    category: ["react"],
    description:
      "The site provides information about the company's expertise, projects, and services",
    key_techs: ["HTML", "CSS", "React"],
  },

  {
    name: "testRTC",
    image_path: "/images/Callstats.png",
    deployed_url: "https://testrtc.com/callstats-io-was-recently-acquired-by-spearline/",
    github_url: "",
    category: ["go"],
    description:
      "This site provides monitoring and analytics for WebRTC-based applications",
    key_techs: [
      "Go",
      "Gin",
      "Java",
      "Mongo",
      "REST API",
    ],
  },
];
