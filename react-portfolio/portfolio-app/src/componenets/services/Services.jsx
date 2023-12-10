import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container serices__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Focus on creating a positive overall user experience.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Design visually appealing and functional websites.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Implement responsive web design for optimal viewing on different
                devices.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Create user interfaces specifically tailored for mobile
                applications.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Ensure responsive design for various screen sizes and devices.
              </p>
            </li>
          </ul>
        </article>
        {/*EnD of Ui*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Offer end-to-end development services covering both front-end
                and back-end aspects.
              </p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Create dynamic and feature-rich web applications.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Use React frameworks for building interactive user interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Design and develop APIs for seamless integration with
                third-party services.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Integrate APIs to enhance the functionality of web applications.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Incorporate security measures to protect against common web
                threats.
              </p>
            </li>
          </ul>
        </article>
        {/*EnD of Web Development*/}

        {/*EnD of Content creation*/}
      </div>
    </section>
  );
}

export default Services;
