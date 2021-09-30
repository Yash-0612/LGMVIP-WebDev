import React from 'react'
import { Link,NavLink } from 'react-router-dom'



const About = () => (

    <div className="container p-5 my-3 bg-success text-black">
      <div className="clearfix"><br/><br/><br/></div>
      <div className="jumbotron mt">
          <h2>Welcome to Olympus</h2>
          <p>The company was established on 12th October 1919, initially specializing in microscopes and thermometers. </p>
          <h3>Revenue</h3>
          <p>The consolidated revenue of the company for the year 2021 is ¥ 730.5bn.</p>
          <h3>Message from the President</h3>
          <p>As we mark our 100th anniversary this year, we are beginning in the earnest to transform Olympus into a more powerful and agile company for sustainable growth.</p>
          <p>
            <NavLink target="_blank" to="/">Read Article</NavLink>
          </p>
      </div>
    </div>
)

export default About
