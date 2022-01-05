import React from "react";

export default function MobComponents(props) {
  // const arr = ['jg','jbh']
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {props.arr.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}
