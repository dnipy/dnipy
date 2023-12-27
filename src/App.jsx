import "./App.css";
import Hero from "./components/Hero";
import information from "./content/information";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Heading from "./components/Heading";
import projects, { Real_Projects } from "./content/projects";
import Skill from "./components/Skill";
import skills from "./content/skills";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import blogPosts from "./content/blogPosts";
import ContactForm from "./components/ContactForm";
import BlogPost from "./components/BlogPost";
import {CertificationCard } from "./components/CertificationCard";
import { Certification_List } from "./content/Certifications";

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [showAll,setShowAll] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Navbar
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
      />
      <Hero
        img={information.userData.img}
        description={information.userData.description}
        title={information.userData.title}
      />
      
      <div className="hr"></div>
      
      <section id="skills">
        <Heading firstWord="Skills" secondWord="&Tools" />
        <motion.div
          className="skill-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Skill skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="hr"></div>

      <section id="Certifications">
        <Heading firstWord="My" secondWord="Certifications" />
        <motion.div
          className="project-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {Certification_List
            .slice(0,showAll == true ? Certification_List.length : 3)
            .map((cert, index) => (
              <CertificationCard
                  key={index}
                  IssuerIcon={cert.IssuerIcon}
                  issuer={cert.issuer}
                  link={cert.link}
                  name={cert.name}
              />
          ))}

        </motion.div>
              <div onClick={()=>setShowAll(!showAll)} style={{marginTop : '32px',display : 'flex',justifyContent : 'center'}} >
                <a className="navbar-btn" style={{cursor : 'pointer'}}>
                  Show  {showAll == false ? 'More ...' : 'Less'} 
                </a>
              </div>
      </section>

      <div className="hr"></div>
     
      <section id="projects">
        <Heading firstWord="My" secondWord="Projects" />
        <motion.div
          className="project-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {Real_Projects.map((project, index) => (
              <ProjectCard
                key={index}
                links={project.links}
                shortDesc={project.shortDesc}
                stack={project.stack}
                name={project.name}
                img={project.img}
                description={project.description}
                preview={project.preview}
              />
          ))}
        </motion.div>
      </section>
     
      <div className="hr"></div>
     
      <section id="contact">
        <Heading firstWord="Contact" secondWord="Me" />
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;
