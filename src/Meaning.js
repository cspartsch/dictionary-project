import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="titleDefinition">Definition</div>
            <span className="definition">{definition.definition}</span>
            <div className="example">
              {definition.example}
            </div>
          </div>
        );
      })}
    </div>
  );
}
