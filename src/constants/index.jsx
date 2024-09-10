import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

export const NAVIGATION_LINKS = [
  { label: "Projetos", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Tecnologias", href: "#skills" },
  { label: "Experiência", href: "#work" },
  { label: "Educação", href: "#education" },
  { label: "Contato", href: "#contact" },
];

export const HERO = {
  name: "Gabriel Revolti",
  greet: "Olá! 👋🏻",
  description:
    "Eu sou um desenvolvedor frontend apaixonado, com talento para criar interfaces de usuário bonitas e funcionais. Ao longo desses 2 anos, tenho me dedicado a aprimorar minhas habilidades e entregar soluções eficientes e inovadoras.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "+1 anos",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "+1 anos",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "TailwindCss",
    experience: "6 meses",
  },
  {
    icon: <FaSass className="text-4xl text-pink-500 lg:text-5xl" />,
    name: "Sass",
    experience: "6 meses",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1 ano",
  },
  {
    icon: <GrMysql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "MySql",
    experience: "1 ano",
  },
];

export const EXPERIENCES = [
  {
    title: "Desenvolvedor Web Freelancer",
    duration: "Agosto 2023 - Atualmente",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  // {
  //   title: "",
  //   company: "",
  //   duration: "",
  //   description: "",
  // },
];

export const EDUCATION = [
  {
    degree: "Análise e desenvolvimento de sistemas",
    institution: "Impacta tecnologia",
    duration: "Agosto 2022 - Dezembro 2024",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  // {
  //   degree: "Bachelor of Science in Information Technology",
  //   institution: "University of California, Berkeley",
  //   duration: "September 2008 - June 2012",
  //   description:
  //     "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  // },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/gabriel_revolti/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/gabrielrevolti",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/gabriel-revolti-486042287/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
