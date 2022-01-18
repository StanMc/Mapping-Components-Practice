import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.term}>
          {props.emoji}
        </span>
        <span>{props.term}</span>
      </dt>
      <dd>{props.detail}</dd>
    </div>
  );
}

export default Entry;
