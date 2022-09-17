import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetic">
      <a href={props.phonetics.audio} target="#blank">
        Listen
      </a>
      <br />
      {props.phonetics.text}
    </div>
  );
}