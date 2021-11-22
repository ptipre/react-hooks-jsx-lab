import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Former derivatives trader trying to figure out web3</p>
      <img src={image} alt='I made this'/>
    </div>
  )
}

export default About;
