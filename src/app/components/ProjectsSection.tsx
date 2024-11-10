"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "A  Resume Builder Web Application",
    description: "An Online CV/Resume Builder for Job",
    image: "/images/projects/resume.png",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://my-cv-resume-builder.web.app/",
  },
  {
    id: 2,
    title: "Javascript Firebase Login-Signup Authentication Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/Firebase-authentication.png",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://auth-js-c349b.web.app/signup.html",
  },
  {
    id: 3,
    title: "Projects Showcase Website",
    description:"A project showcase website where i added login signup functionality through firebase where users can sigupn or signin and view my projects",
    image: "/images/projects/Project-showcase.png",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://auth-js-c349b.web.app/",
  },
  {
    id: 4,
    title: "Todo App",
    description: "A simple to-do list application.",
    image: "/images/projects/Todo-app.png",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://auth-js-c349b.web.app/todo.html",
  },
  {
    id: 5,
    title: "Image Gallery",
    description: "An image gallery built with JavaScript.",
    image: "/images/projects/image-gallery.jpg",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://image-gallery-using-js.vercel.app/",
  },
  {
    id: 6,
    title: "Form Validation",
    description: "Form validation using JavaScript.",
    image: "/images/projects/form-validation.jpg",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://form-validation-using-js-gamma.vercel.app/",
  },
  {
    id: 7,
    title: "Text Editor",
    description: "A text editor application built with JavaScript.",
    image: "/images/projects/text-editor.jpg",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://text-editor-using-js.vercel.app/",
  },
  {
    id: 8,
    title: "Travel Agency Website",
    description: "A responsive website for a travel agency.",
    image: "/images/projects/travel-agency-website.jpg",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://travel-agency-website-flax.vercel.app/",
  },
  {
    id: 9,
    title: "My Portfolio",
    description: "A personal portfolio website.",
    image: "/images/projects/personal-portfolio.jpg",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://personal-portfolio-assignment.vercel.app/",
  },
  {
    id: 10,
    title: "Stopwatch Web Application",
    description: "A simple stopwatch application.",
    image: "/images/projects/stopwatch.jpg",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://stopwatch-web-application-six.vercel.app/",
  },
  {
    id: 11,
    title: "TicTacToe Web Application",
    description: "A TicTacToe game application.",
    image: "/images/projects/tictactie.jpg",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://tic-tac-toe-web-application-chi.vercel.app/",
  },
  {
    id: 12,
    title: "Responsive Landing Page",
    description: "A responsive landing page design.",
    image: "/images/projects/responsive-landing-page.jpg",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://responsive-landing-page-green.vercel.app/",
  },
  {
    id: 13,
    title: "Resume Builder Web Application",
    description: "An application to create resumes.",
    image: "/images/projects/resume.jpg",
    tag: ["All", "Web-Development"],
    gitUrl: "/",
    previewUrl: "https://milestone-5-shareable-resume-builder-by-taha.vercel.app/",
  },
  {
    id: 14,
    title: "Countdown Timer App",
    description: "A countdown timer application.",
    image: "/images/projects/countdown-timer.jpg",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "https://count-down-timer-iota-self.vercel.app/",
  },
  {
    id: 15,
    title: "Weather Application",
    description: "Weather forecast application with city search.",
    image: "/images/projects/weather-app.jpg",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "https://weather-widget-app-three.vercel.app/",
  },
  {
    id: 16,
    title: "Birthday Wishes App",
    description: "A birthday wishes greeting application.",
    image: "/images/projects/birthday-wishes-app.jpg",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "https://birthday-wishes-app-3d-ti69.vercel.app/",
  },
  {
    id: 17,
    title: "Number Guessing Game",
    description: "A fun number guessing game.",
    image: "/images/projects/number-game.jpg",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "https://number-guessing-game-6a7v.vercel.app/",
  },
  {
    id: 18,
    title: "Calculator Web App",
    description: "A basic calculator web application.",
    image: "/images/projects/simple-calculator.jpg",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "https://simple-calculator-app-mocha.vercel.app/",
  },
  {
    id: 19,
    title: "Random Jokes Generator App",
    description: "Generates random jokes on click.",
    image: "/images/projects/jokes-app.jpg",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "https://random-jokes-generator-app-b8qx.vercel.app/",
  },
  {
    id: 20,
    title: "Tip Calculator App",
    description: "A tip calculator for restaurant bills.",
    image: "/images/projects/tip-calculator.jpg",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "https://tip-calculator-app-jade-pi.vercel.app/",
  },
  {
    id: 21,
    title: "Password Generator App",
    description: "Generates secure random passwords.",
    image: "/images/projects/password-generator-app.jpg",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "https://password-generator-app-k3w8.vercel.app/",
  },
  {
    id: 22,
    title: "Unit Converter App",
    description: "Converts units like length, weight, etc.",
    image: "/images/projects/unit-converter-app.jpg",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "https://unit-converter-apps--theta.vercel.app/",
  },
  {
    id: 23,
    title: "BMI Calculator App",
    description: "Calculates Body Mass Index (BMI).",
    image: "/images/projects/bmi-calculator.jpg",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "https://bmi-calculator-app-uowi.vercel.app/",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web-Development"
          isSelected={tag === "Web-Development"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
