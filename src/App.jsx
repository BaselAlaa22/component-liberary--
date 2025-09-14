import React from "react";
import Badge from "./components/Badge";

function App() {
  return (
    <>
      <h1>Badges</h1>
      <div className="badge-container">
        <h3>Sqaure</h3>
        <Badge variant="grey" shape="square">
          Grey Square
        </Badge>
        <Badge variant="red" shape="square">
          Red Square
        </Badge>
        <Badge variant="yellow" shape="square">
          Yellow Square
        </Badge>
        <Badge variant="green" shape="square">
          Green Square
        </Badge>
        <Badge variant="blue" shape="square">
          Blue Square
        </Badge>
        <Badge variant="indigo" shape="square">
          Indigo Square
        </Badge>
        <Badge variant="purple" shape="square">
          Purple Square
        </Badge>
        <Badge variant="pink" shape="square">
          Pink Square
        </Badge>

        <h3>Pill</h3>
        <Badge variant="grey" shape="pill">
          Grey Pill
        </Badge>
        <Badge variant="red" shape="pill">
          Red Pill
        </Badge>
        <Badge variant="yellow" shape="pill">
          Yellow Pill
        </Badge>
        <Badge variant="green" shape="pill">
          Green Pill
        </Badge>
        <Badge variant="blue" shape="pill">
          Blue Pill
        </Badge>
        <Badge variant="indigo" shape="pill">
          Indigo Pill
        </Badge>
        <Badge variant="purple" shape="pill">
          Purple Pill
        </Badge>
        <Badge variant="pink" shape="pill">
          Pink Pill
        </Badge>
      </div>
    </>
  );
}

export default App;
