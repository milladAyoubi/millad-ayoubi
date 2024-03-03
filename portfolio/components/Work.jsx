"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const projectData = [
  {
    image: "/work/Ionic-2.png",
    category: "fullstack",
    name: "Ionic Eccomerce Website",
    description:
      "Ionic is a complete eCommerce shopping website. From the design phase. It offers an intuitive shopping experience that is user centric.",
    link: "https://ionic-kappa.vercel.app/",
    github: "/",
    stack: [
      "React.js",
      "Next.js",
      "Sanity.io",
      "Stripe API",
      "Full Stack",
      "UX/UI Design Process",
    ],
  },
  {
    image: "/work/Renew-1.png",
    category: "ux/ui",
    name: "RENEW eCommerce UX Case Study",
    description:
      "Utilizing Design Thinking, this project empathizes with users, defines challenges, ideates innovative solutions, prototypes, and iteratively tests improvements.",
    link: "https://dribbble.com/shots/23756267-Renew-Ecommerce-Case-Study",
    github: "/",
    stack: [
      "UX/UI Design Process",
      "Design Thinking",
      "UX Research",
      "Figma Prototyped",
      "User Flow",
    ],
  },
  {
    image: "/work/Voyager-3.png",
    category: "frontend",
    name: "Voyager Car Rental",
    description:
      "a user-friendly car rental website developed with Next.js and React, providing a seamless platform for users to effortlessly browse and rent from a diverse fleet of vehicles.",
    link: "https://voyager-ku46.vercel.app/",
    github: "/",
    stack: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Car API",
      "JavaScript",
      "Framer Motion",
    ],
  },

  {
    image: "/work/NetBook.png",
    category: "frontend",
    name: "NetBook Solutions Website",
    description:
      "NetBook Solutions provides digital services for its users and memebrs to efficatianly share, view and collaborate together. Built from a Figma prototype in ReactJS. Mobile Optimized.",
    link: "https://netbook-solutions.netlify.app/",
    github: "/",
    stack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Figma Designed",
      "Mobile Optimized",
    ],
  },

  {
    image: "/work/Sangoma Team Collaboration Page.png",
    category: "ux/ui",
    name: "Sangoma Team Page Redesign",
    description:
      "This UX/UI test involves redesigning Sangoma's Team Collaboration Page for an Enhanced User Experience, Improved Information Presentation, Clear Value Proposition and Seamless Navigation.",
    link: "https://www.figma.com/file/2whWdQZ3wfMcTe95kyplaN/Sangoma-UI-Analysis?type=design&node-id=0%3A1&mode=design&t=ysFwpW38zMzzxIsW-1",
    github: "/",
    stack: [
      "UX/UI Design Process",
      "Website Redesign",
      "Usability Improvments",
      "Prototyping",
    ],
  },

  {
    image: "/work/Artemis.png",
    category: "frontend",
    name: "Artemis Payment Website",
    description:
      "A brochure website showcasing personally crafted, cutting-edge UI/UX designs optimized in Figma.Focusing optimal website performance and ease of navigation.",
    link: "https://artemis-payment.netlify.app//",
    github: "/",
    stack: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "UX Optimized",
    ],
  },

  {
    image: "/work/Task.png",
    category: "ux/ui",
    name: "2DO Task Manager Project",
    description:
      "2DO is a intuitive task manager application that focuses on providing struggling students with the means to consistently get their daily tasks completed. ",
    link: "https://www.figma.com/file/R3KRcDMFxue1SLmIBKHBaJ/2DO%3A-Task-Manager-Application?type=design&node-id=1-2520&mode=design",
    github: "/",
    stack: [
      "UX Research",
      "UX/UI Process",
      "User Task Study",
      "Mobile First Design",
      "Interactive Prototype",
    ],
  },

  {
    image: "/work/Bobahub-8.png",
    category: "frontend",
    name: "Boba Bliss Ordering Website",
    description:
      "Boba Bliss streamlines bubble tea ordering. It offers seamless customization—select bases, flavors, toppings, and sweetness. Real-time cost calculations aid transparency in the cart.",
    link: "https://boba-bliss.vercel.app/",
    github: "/",
    stack: [
      "Next.js",
      "React.js",
      "State Context",
      "Product Cart Customization ",
      "Tailwind CSS",
    ],
  },

  {
    image: "/work/Wam.png",
    category: "ux/ui",
    name: "Fitness UX Case Study",
    description:
      "One of the biggest challenges for Gen Z is their sedentary lifestyle. This Case Study was designed so that it helps/assists Gen Z achieve their fitness goals by offering services tailored to their fitness needs.",
    link: "https://dribbble.com/shots/23324919-Weight-A-Minute-Fitness-UX-Case-Study",
    github: "/",
    stack: [
      "UX/UI Design Process",
      "Design Thinking",
      "UX Research",
      "Figma Prototyped",
    ],
  },

  {
    image: "/work/2DO-3.png",
    category: "ux/ui",
    name: "Acedemic Website UX Research",
    description:
      "The following project is a study into how students interact with their respective institutions academic websites. It follows up on the research phase, quantifying the data obtained for further analysis.",
    link: "https://www.figma.com/file/jHwuqDWUCbwOD1sfo9IpPW/A4?type=design&node-id=0%3A1&mode=design&t=hZ6bj18StGAXRUkv-1",
    github: "/",
    stack: ["User Reaserch", "Data Analysis", "Quantitative Research"],
  },

  {
    image: "/work/Unova-2.png",
    category: "fullstack",
    name: "Unova Chat Application",
    description:
      "Unova Chat is a real-time chat application built with Node.js, Express.js, HTML, CSS, JavaScript, and Socket.io. With Unova Chat, users can join a specific room and exchange messages with others in the same room. ",
    link: "https://github.com/milladAyoubi/Chat-Application",
    github: "/",
    stack: [
      "NodeJS",
      "ExpressJS",
      "Socket.io",
      "ReactJS",
      "HTML5",
      "CSS3",
      "Mobile Responsive",
    ],
  },
  {
    image: "/work/Venti.png",
    category: "frontend",
    name: "Venti Shopping Website",
    description:
      "One of my first website I built. Hightlights the basics and fundementals of webs design, developement and good UX/UI principles. It is also mobile responsive.",
    link: "https://venti-website.netlify.app/",
    github: "/",
    stack: ["JavaScript", "HTML5", "CSS3", "Mobile Responsive", "Bootstrap 5"],
  },
  {
    image: "/work/Pyro.png",
    category: "fullstack",
    name: "Pyro Android Application",
    description:
      "After completing their exercise, users can enter the calories they have burned for the workout through the application. They must enter the calories they burned, their type of exercise performed, and the duration. ",
    link: "https://github.com/milladAyoubi/PyRo-Fitness-Application-",
    github: "/",
    stack: ["Java", "Android Development", "FireBase", "SQLite", "QA Testing"],
  },

  {
    image: "/work/Aequitas-1.png",
    category: "ux/ui",
    name: "Aequitas UI Redesign",
    description:
      "Aequitas Partners is a prominent search firm specializing in Growth Stage companies within the Healthcare Technology sector. The companys website serves as a crucial touchpoint for potential clients.",
    link: "https://www.figma.com/file/SZDd6xb2St2dbPsHMRTBoU/Aquitas-UI-Redesign?type=design&node-id=14%3A48&mode=design&t=NyF2RQbJpaOkZk9A-1",
    github: "/",
    stack: ["Website Redesign", "Usability Improvments", "Prototypes"],
  },
  {
    image: "/work/Cozey.png",
    category: "ux/ui",
    name: "Cozey UI Challenge",
    description:
      "A UI challenge given to me on Figma by Cozey. I had to teach myself the varients of figma in order to be able to sucessfully complete the interactive prototype.",
    link: "https://www.figma.com/file/HCjI6467uEc5fiQO6l01hK/COZEY-DESIGN-CHALLENGE?type=design&node-id=0%3A1&mode=design&t=Geib0IrUd9RdoDhJ-1",
    github: "/",
    stack: ["Interactive Prototype", "Feature Design", "Design Guidelines"],
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Work = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section
      className="bg-fixed bg-cover min-h-screen pt-24 pb-1 "
      id="#projects"
    >
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="uppercase w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
