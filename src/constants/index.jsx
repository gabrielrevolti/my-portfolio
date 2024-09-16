import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";

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
    name: "Portfólio",
    description:
      "Meu portfólio feito com React e Tailwind css para mostrar as minhas habilidades, e seção para contato.",
    image: projectImage1,
    githubLink: "https://github.com/gabrielrevolti/my-portfolio",
    live: false
  },
  {
    id: 2,
    name: "Hamburgueria",
    description:
      "Uma Hamburgueria feita com React e Flask, com funcionalidade de adicionar, remover, atualizar, excluir cardápio. Além de cadastro e login de usuário usando flask-session e redis gerando cookies do lado do servidor para segurança do cliente.",
    image: projectImage2,
    githubLink: "https://github.com/gabrielrevolti/Restaurante",
    live: false,
  },
  {
    id: 3,
    name: "Barber Original(Mobile)",
    description:
      "Um ponto de encontro para várias barbearias, desenvolvido com Next.js, TypeScript e Prisma. Possui funcionalidades como login com Google, agendamento de cortes em horários específicos, visualização e cancelamento de agendamentos, tudo salvo em um banco de dados online no Supabase.",
    image: projectImage3,
    githubLink: "https://github.com/gabrielrevolti/barber-original",
    live: "https://barber-original.vercel.app",
  },
  {
    id: 4,
    name: "OneBitX",
    description:
      "Site baseado na SpaceX, desenvolvido através do curso de Bootstrap da OneBitCode, utilizando HTML, Sass, Bootstrap e uma biblioteca de animações.",
    image: projectImage4,
    githubLink: "https://github.com/gabrielrevolti/onebit-x",
    live: "https://gabrielrevolti.github.io/onebit-x/"
  },
  {
    id: 5,
    name: "Movie Lib",
    description:
      "Movie Lib é um site que exibe os filmes mais populares, os que estão em cartaz e os lançamentos futuros. O projeto é alimentado pela API do The Movie Database e utiliza React, CSS e React Router DOM para criar rotas (várias páginas).",
    image: projectImage5,
    githubLink: "https://github.com/gabrielrevolti/movie-lib-react",
    live: "https://movie-lib-react-xi.vercel.app"
  },
  {
    id: 6,
    name: "JBL",
    description:
      "Site da JBL com UI desenvolvida por profissionais, criado com HTML, CSS e JavaScript. O site conta com animações utilizando ScrollReveal e Swiper, além de ser totalmente responsivo.",
    image: projectImage6,
    githubLink: "https://github.com/gabrielrevolti/jbl-website",
    live: "https://gabrielrevolti.github.io/JBL-website/"
  },
];

export const BIO = [
  "Meu nome é Gabriel Revolti, tenho 20 anos e estou me formando em Análise e Desenvolvimento de Sistemas pela Faculdade Impacta. Há cerca de 2 anos, venho me especializando em desenvolvimento frontend e programação. Atualmente, atuo como freelancer, criando sites e desenvolvendo projetos pessoais.",
  "Minha principal área de atuação é o frontend, utilizando tecnologias como HTML, CSS, JavaScript, React, Tailwind, Sass e Bootstrap. No entanto, também possuo experiência no desenvolvimento full stack, com conhecimento em backend, utilizando Python, MySQL e Node.js.",
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
      "Como desenvolvedor web freelancer, eu utilizo as tecnologias mais recentes do mercado, como React, Tailwind, Bootstrap, Sass, Python e Node.js, para entregar soluções otimizadas e eficientes. Minha experiência abrange em criação de interfaces responsivas e amigáveis ao usuário, com foco em performance e boas práticas de desenvolvimento.",
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
      "Estou me formando em Análise e Desenvolvimento de Sistemas, onde desenvolvi habilidades para planejar, criar e gerenciar sistemas de software. Durante o curso, aprendi a trabalhar com diversas linguagens de programação, bancos de dados e ferramentas de modelagem de sistemas. Minha formação incluiu tanto a análise de requisitos e lógica de programação quanto a implementação de soluções tecnológicas, como sistemas web e aplicativos.",
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
