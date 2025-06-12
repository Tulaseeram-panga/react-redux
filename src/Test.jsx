import React from "react";

const Test = () => {
  const list = [
    "apple",
    "ball",
    "cat",
    "dog",
    "ant",
    "along",
    "nothing",
    "move",
    "filler",
    "zince",
    "nothing",
    "gun",
  ];
  return (
    <div className="playground">
      {list
        .sort()
        .reverse()
        .map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
    </div>
  );
};

export default Test;
