// CreativeProgrammingPage.js
import React from "react";
import "@fontsource/space-mono";

const projectStyle = {
  fontFamily: "Space Mono",
  color: "#EFEFEF",
  marginBottom: "20px", // Add spacing between projects
  fontSize: "1.25rem", // Font size for all project headings (18px)
};

const linkStyle = {
  color: "#f1b064", // Link color is yellow
};

const descriptionStyle = {
  fontSize: "1rem", // Font size for project descriptions (16px)
};

function CreativeProgrammingPage() {
  return (
    <div style={projectStyle}>
      <div>
        <a
          href="https://calculus-fav-js-2fan-e5uc1nw58-mailforwork.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Visualizer
        </a>{" "}
        -{" "}
        <span style={descriptionStyle}>
          Pretty simple Dijkstra algorithm visualizer and more like calculus
          graphs.
        </span>
        <a
          href="https://github.com/mailforwork/visualizers-makes-maths-fun"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          GitHub
        </a>
      </div>

      <div>
        <a
          href="https://creative-programming.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Life Game
        </a>{" "}
        -{" "}
        <span style={descriptionStyle}>
          Found this easy game very interesting.
        </span>
        <a
          href="https://github.com/mailforwork/creative-programming"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          GitHub
        </a>
      </div>

      <div>
        <a
          href="https://youtu.be/obpViFbILpc?si=Q7KCD5DZi7VdjtUb"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Self Balancing Bicyrobo (Minor Project) - Video 1
        </a>{" "}
        -{" "}
        <span style={descriptionStyle}>
          Check out the video to see the project.
        </span>
      </div>

      <div>
        <a
          href="https://youtu.be/S8J6gpaJfkc?si=QxVRNCHwdzNhtctU"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Self Balancing Bicyrobo (Minor Project) - Video 2
        </a>{" "}
        -{" "}
        <span style={descriptionStyle}>
          Check out the video to see the project.
        </span>
      </div>

      <div>
        <a
          href="https://github.com/juhiechandra/Remotion-TS-HO"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Remotion Video
        </a>{" "}
        -{" "}
        <span style={descriptionStyle}>
          Alternative for After Effects in React JS, Headout's Assignment :P
        </span>
      </div>
    </div>
  );
}

export default CreativeProgrammingPage;
