// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full-Stack developer",
    firstName: "Abdelrahman",
    LastName: "Atef",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "Years of Experince in Web development",
      },
      {
        count: "3K+",
        text: "projects done",
      },
    ],
  },
  skills: {
  title: "Skills",
  subtitle: "MY TOP SKILLS",
  skills_content: [
    {
      name: "HTML / CSS",
      para: "Building responsive, user-friendly websites with clean structure and modern design.",
      logo: figma,
      details: [
        "Responsive layouts using Flexbox and CSS Grid",
        "Pixel-perfect design implementation",
        "Advanced animations and hover effects",
        "Cross-browser and mobile compatibility",
      ],
    },
    {
      name: "Node.js",
      para: "Creating fast and scalable backend applications using Express and REST APIs.",
      logo: nodejs,
      details: [
        "Building RESTful APIs with Express.js",
        "Integrating databases like MongoDB and MySQL",
        "Implementing authentication (JWT, bcrypt)",
        "Optimizing backend performance and security",
      ],
    },
    {
      name: "Modern JavaScript (ES6+)",
      para: "Writing efficient, modular, and modern code with ES6+ features.",
      logo: ps,
      details: [
        "Smooth and dynamic web animations",
        "State management with Context API",
        "Reusable functions and modular code structure",
        "Async/Await and API integration mastery",
      ],
    },
    {
      name: "React.js",
      para: "Developing dynamic and high-performance user interfaces using React and hooks.",
      logo: reactjs,
      details: [
        "Reusable component-based architecture",
        "React Hooks (useState, useEffect, useContext)",
        "Dynamic rendering and conditional logic",
        "Integration with APIs and state management",
      ],
    },
    {
      name: "TypeScript (TSX)",
      para: "Building reliable and type-safe React components using TypeScript.",
      logo: sketch,
      details: [
        "Strong typing for variables, props, and states",
        "Reusable interfaces and custom types",
        "Error prevention and code autocompletion",
        "Scalable code structure for large projects",
      ],
    },
    {
      name: "Python",
      para: "Automating workflows, building scripts, and exploring data analysis with Python.",
      logo: python,
      details: [
        "Scripting and task automation",
        "Working with APIs and data parsing",
        "Data analysis with Pandas and NumPy",
        "Creating small-scale tools and backend prototypes",
      ],
    },
  ],
  icon: MdArrowForward,
},

  services: {
  title: "Services",
  subtitle: "WHAT I OFFER",
  service_content: [
    {
      title: "Web Development",
      para: "I build fast, responsive, and modern websites using the latest front-end technologies to ensure seamless user experiences across all devices.",
      logo: services_logo1,
    },
    {
      title: "UI / UX Design",
      para: "Designing intuitive, clean, and visually appealing interfaces focused on user satisfaction and smooth navigation experiences.",
      logo: services_logo2,
    },
    {
      title: "Photoshop Editing",
      para: "Providing professional photo retouching, background removal, and creative visual compositions for personal or brand projects.",
      logo: services_logo3,
    },
  ],
},

  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "ecommerce",
        image: project1,
      },
      {
        title: "VPN!!",
        image: project2,
      },
      {
        title: "Around the world",
        image: project3,
      },
    ],
  },
 Testimonials: {
  title: "Testimonials",
  subtitle: "WHAT PEOPLE SAY",
  testimonials_content: [
    {
      review:
        "“Bro, your game was honestly awesome! The movement felt smooth, and the levels were actually challenging — keep making more like that!”",
      img: avatar1,
      name: "UnityKing",
    },
    {
      review:
        "“I had a lot of fun playing your game. You’ve got great ideas and solid coding skills — it didn’t even feel like a student project.”",
      img: avatar1,
      name: "Joseph",
    },
    {
      review:
        "“You’ve made huge progress since joining Almdrasa. Your projects show real creativity and consistency — proud of how far you’ve come!”",
      img: avatar4,
      name: "Almdrasa Instructor",
    },
    {
      review:
        "“I checked out your GitHub repos — your work looks super clean and well-organized. You’re definitely improving fast!”",
      img: avatar3,
      name: "GitHub Friend",
    },
    {
      review:
        "“Honestly, you’ve got a great future ahead. I love how you mix creativity with real programming skill — that’s rare.”",
      img: avatar1,
      name: "Game Tester",
    },
  ],
},

  Hireme: {
  title: "Hire Me",
  subtitle: "FOR YOUR WEB PROJECTS",
  image1: Hireme_person,
  image2: Hireme_person2,
  para: "I design and develop modern, responsive, and high-performing websites that bring your ideas to life. From clean UI/UX to powerful front-end functionality, I make sure your project stands out on every device.",
  btnText: "Hire Me",
},
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "boody2012atef@gmail.com",
        icon: GrMail,
        link: "mailto:boody2012atef@gmail.com",
      },
      {
        text: "+966 55 617 4924",
        icon: MdCall,
        link: "https://wa.me/+966556174924",
      },
      {
        text: "abdelrahmanatef_doublea",
        icon: BsInstagram,
        link: "https://www.instagram.com/abdelrahmanatef_doublea/",
      },
    ],
  },
  Footer: {
    text: "",
  },
};
