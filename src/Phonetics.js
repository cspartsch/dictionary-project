import React from "react";
import "./Phonetics.css"

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetics.audio} target="#blank">
        Listen
      </a>
      <span className="text">
      {props.phonetics.text}
    </span>
    </div>
  );
}
