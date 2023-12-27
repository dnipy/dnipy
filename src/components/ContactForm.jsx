import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let&apos;s talk about everything!</h1>
        <p>
          Don&apos;t like forms? Send me an{" "}
          <a href="mailto:dnipy@protonmail.com">email</a>. 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img style={{borderRadius : "100%"}} src={`/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div>
        </p>
        <div>
          <p className="contact-links">
            <MdEmail />
            dnipy@protonmail.com
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +1 (661) 556-9831
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +98 (903) 509-5691
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            Istanbul / Turkey
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        <form style={{cursor : 'not-allowed'}} name="contact" netlify>
          <input
          disabled
            type="text"
            name="senderName"
            placeholder="Your Name"
            required
            style={{cursor : 'not-allowed'}}
          />
          <input
          style={{cursor : 'not-allowed'}}
          disabled type="text" name="senderEmail" placeholder="Email" required />
          <input 
          style={{cursor : 'not-allowed'}}
          disabledtype="text" name="subject" placeholder="Subject" required />
          <textarea
          style={{cursor : 'not-allowed'}}
          disabled
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <input style={{cursor : 'not-allowed'}} disabled type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
