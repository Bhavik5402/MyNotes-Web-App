import React from "react";
import bg from "../aboutbg.jpg"
import '../about.css'

export default function About() {
  return (
    <div className="container"> 
      <div class="shadow p-3 mb-5 bg-body rounded text-center">
        <h1>About MyNotes</h1>
        </div>
        <div className="containor p-3">
          <h2 className="text-center">Technology</h2>
          <hr />
          <h5 className="text-center">In this application,I have used MERN Stack technology.MERN stack is a collection of technologies that enables faster application development.It is a contraction for four different technologies : M - MongoDB , E - ExpressJS , R - ReactJS , N - NodeJS. </h5>
        </div>
        <div className="containor-2 p-3">
          <h2 className="text-center">MyNotes</h2>
          <hr />
          <h5 className="text-center">MyNotes is a React Application for managing personal notes on the cloud </h5>
        </div>

      
    </div>
  );
}
