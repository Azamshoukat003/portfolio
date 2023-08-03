import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bm9ogp8",
        "template_gcilmfs",
        form.current,
        "niOmTMx2GQOCmSQcX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="conatct__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Azamsniper1122@gmail.com</h5>
            <a href="mailto:myemail@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>mymessenger@gmail.com</h5>
            <a href="https://m.me/azam.shoukat.33" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsap</h4>
            <h5>+923106501781</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+923106501781"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact Option */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
