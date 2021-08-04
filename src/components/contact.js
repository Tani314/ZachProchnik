import React from "react";
import "../styles/contact.css"
import instalogo from '../assets/instalogo.jpeg'
const Contact = props => {
  function sendEmail(e) {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "gmail",
    //     "template_rTlM77lf",
    //     e.target,
    //     "user_9ByIUdluMXbyVpzgkRLLA"
    //   )
    //   .then(
    //     result => {
    //       console.log(result.text);
    //     },
    //     error => {
    //       console.log(error.text);
    //     }
    //   );
  }

  return (
    <div id="contact">
      <div className="page">
        <div class="triangle-up"></div>
        <div className="contactTitle">Contact</div>
        <hr className="contactHr" />
        <div className="line">Have any question or want to work with me?</div>

        <div className="formdesign">
          <form onSubmit={sendEmail}>
            <input placeholder="Name" type="text" name="name" required />

            <input placeholder="Email" type="email" name="email" required />

            <textarea placeholder="Your Message" type="text" name="message" />

            <input type="submit" value="Send" />
          </form>
        </div>

        <div className="contact1">
          <a href="https://www.instagram.com/131boerum/">
           <img src={instalogo} width="60" height="60" alt="Instagram" /> 
          </a>
        </div>
        <div className="footer">
          Zach Prochnik &#169;{new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};
export default Contact;