import PropTypes from "prop-types";
import { BaseCertURL } from "../content/Certifications";


export const CertificationCard = (props) => {
  const openCert= ()=>{
    window.open(`${BaseCertURL}${props.link}`)
  }
  return (
    <div onClick={openCert} className="cert-card" style={{height : 'auto'}}>
      <div className="cert-img">
        <div style={{padding : '10px', backgroundColor : '#fff' , borderRadius : '100%', height:`100px` , display : `flex` , alignItems : 'center' , margin : '10px'}}>
            <img src={props.IssuerIcon} alt={props.name} />
        </div>
      </div>
      <div style={{margin : 'auto'}} >
        <div style={{overflow : 'hidden',textOverflow : 'ellipsis'}} className="project-title">
            <h2>{props.name}</h2>
            </div>
            <div className="project-description">
            <p>#{props.link}</p>
            </div>
            <div className="project-description">
            <p>by : {props.issuer}</p>
          </div>
      </div>

    </div>
  );
};

CertificationCard.propTypes = {
    name: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    IssuerIcon: PropTypes.string.isRequired,
};