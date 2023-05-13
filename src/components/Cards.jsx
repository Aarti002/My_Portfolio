import React, { Component } from "react";
import "../index.css";
import "../flip-transition.css";

function Cards({onClick}) {
    return (
     <div className="cards" onClick={onClick}>
        <div className="card-front">
            front
        </div>
        <div className="card-back">
            back
        </div>
     </div>
    );
}

export default Cards;