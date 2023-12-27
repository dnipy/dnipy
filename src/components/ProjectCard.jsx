import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
const ProjectCard = (props) => {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 0.8 } },
  // };
  return (
    <div className="project-card" onClick={()=>window.open(props.preview)}>
      <div className="project-img">
        <img src={props.img} alt={props.name} />
      </div>
      <div style={{height : "130px"}}>
          <div className="project-title">
            <h2>{props.name}</h2>
          </div>
          <div className="project-title">
            <h2>{props.shortDesc}</h2>
          </div>
      </div>
      <div className="project-description">
        <p>{props.description}</p>
      </div>


      <div className="project-tags">
          {props.stack.map((project, index) => (
        <div className="project-tag">
            <p key={index}>{project}</p>
        </div>
          ))}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  links : PropTypes.array ,
  shortDesc : PropTypes.string ,
  stack : PropTypes.array
};

export default ProjectCard;
