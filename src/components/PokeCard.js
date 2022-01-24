import React from "react";
import {Link} from "react-router-dom"

function PokeCard(props) {
  console.log(props);
  return (
    <article className="card" style={{maxWidth: "300px"}}>
      <div className="card-image">
        <figure className="image">
          <Link to={`/pokemon/${props.id}`}><img src={props.image} alt={props.name} /></Link>
        </figure>
      </div>
      <div className="card-header">
        <h3>#{props.id} {props.name}</h3>
      </div>
    </article>
  );
}

export default PokeCard;
