import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="expperience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>Tailwaind</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* {frontend End} */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="expperience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}
            <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>My Sql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}
            <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icons" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
