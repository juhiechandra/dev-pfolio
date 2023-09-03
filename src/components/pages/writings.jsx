// WritingsPage.js
import React from "react";
import "@fontsource/space-mono";

const writingStyle = {
  fontFamily: "Space Mono",
  color: "#EFEFEF",
  marginBottom: "20px",
  fontSize: "14px",
};

const headingStyle = {
  fontSize: "16px",
};

const linkStyle = {
  color: "#f1b064",
};

function WritingsPage() {
  return (
    <div style={writingStyle}>
      <div>
        <hr /> {/* Horizontal line */}
        <h2 style={headingStyle}>
          Writing something in Third Wave HSR 14th Main road
        </h2>
        <p>Published Date: 6:09 AM · Jul 5, 2023</p>
        <a
          href="https://twitter.com/CerulianJ/status/1676390337860993029?s=20"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Read on Twitter
        </a>
      </div>

      <div>
        <hr /> {/* Horizontal line */}
        <h2 style={headingStyle}>Anecdotes from childhood (messed up)</h2>
        <p>Medium Title: Realization</p>
        <p>Published Date: Nov 10, 2021</p>
        <a
          href="https://medium.com/@juhiechandra/realization-e0041cb266d7"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Read on Medium
        </a>
      </div>
    </div>
  );
}

export default WritingsPage;
