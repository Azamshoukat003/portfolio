import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pic3.jpg";

const data = [
  {
    id: 1,
    // width: "400px",
    // height: "300px",
    image: IMG1,
    title: "Fully Responsive Ecomerece Website ",
    github: "https://github.com/Azamshoukat003/ecomerce-web",
    demo: "https://ecomerce-web-8i67.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container__portfolio">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
