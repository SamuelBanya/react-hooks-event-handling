import React from "react";

function Tickler() {
  // Example of using a callback function if you have extended logic to take care of for
  // event handling:

  // function tickle() {
  // console.log("Teehee!");
  // }

  // return <button onClick={tickle}>Tickle me!</button>;

  function tickle(event) {
    console.log(event);
  }

  // Previous return statement without separate callback function:
  // return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;

  // Return statement with separate callback function called from above:
  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
