import React from "react";
import ReactDOM from "react-dom";

const name = "AVANEESH YADAV";
const currentDate = new Date();
const year = currentDate.getFullYear();
// const year = 2024;

console.log(year);

ReactDOM.render(
  <div>
    <p> created by {name}</p>
    <p>Copyright {year}.</p>
  </div>,

  document.getElementById("root")
);
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
