import React, { useState } from "react";
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import mern from "../img/MERN.jpg";
// import bikerental from "../img/bike-rental.jpg";
// import dice from "../img/Dice.jpg";
import "../Components/Projects/projectss.css";

function CarousellNew() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const items = [
    {
      id: "1",
      name: "Movie Searcher",
      link: "https://movie-searcher-info.netlify.app/",
      image: "movie-search",
      alt: "Movie Searcher",
    },
    {
      id: "2",
      name: "Remine India",
      link: "https://remine-india-rushabh.netlify.app/",
      image: "remine",
      alt: "Remine India",
    },
    {
      id: "3",
      name: "MERN Projects",
      link: "https://rushabhreactmern.netlify.app/",
      image: "MERN",
      alt: "MERN",
    },
    {
      id: "4",
      name: "Bike Renatl",
      link: "https://bikerental-isa.netlify.app/",
      image: "bike-rental",
      alt: "Bike Rental",
    },
    {
      id: "5",
      name: "School Website",
      link: "https://rushabh-school.netlify.app/",
      image: "school-website",
      alt: "School Website",
    },
  ];

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {items.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img
                className="d-block"
                src={require(`../img/${item.image}.jpg`)}
                alt={item.alt}
              />
              <Carousel.Caption>
                <h3 className="label">
                  <div className="frame">
                    <a href={item.link}>
                      <button className="custom-btn btn-1">{item.name}</button>
                    </a>
                  </div>
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
export default CarousellNew;
