// ProjectsPage.js
import React from "react";
import "@fontsource/dm-sans";
import "@fontsource/space-mono";

const projectStyle = {
  fontFamily: "Space Mono",
  color: "#EFEFEF",

  fontSize: "18px", // Font size for all project sections
};

const linkStyle = {
  color: "#f1b064", // Link color is yellow
};

function ProjectsPage() {
  return (
    <div style={projectStyle}>
      <div>
        <a
          href="https://github.com/juhiechandra/SQL-editor-Atlan"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          SQL-Editor
        </a>{" "}
        solution for executing SQL queries, analyzing data, and managing
        database operations effectively
      </div>

      <div>
        <a
          href="https://github.com/juhiechandra/AI-based-log-analyser"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          AI-Based-Log-Analyzer
        </a>{" "}
        used to monitor log structure / parse it to certain format then analyse
        them / to automatically catch software incidents and show the root cause
        of it.
      </div>

      <div>
        <a
          href="https://github.com/mailforwork/medicwise-main"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Medicwise
        </a>{" "}
        online personal health care
      </div>

      <div>
        <a
          href="https://yadav-rohit.github.io/continuumpreview/#/About"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Continuum
        </a>{" "}
        decentralized donation platform (smart-contracts)
      </div>

      <div>
        <a
          href="https://activewater.softr.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Active Water
        </a>{" "}
        developed a product to handle TDS of waste water: CAD model and circuits
      </div>

      <div>
        <a
          href="https://github.com/juhiechandra/medusa-hacks-improved"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Flareon
        </a>{" "}
        sneaker-store with medusa js for hacktoberfest'22
      </div>

      <div>
        <a
          href="https://github.com/mailforwork/Engage-2022"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Crime-Detector
        </a>{" "}
        face-api usage for detecting potential threats
      </div>

      <div>
        <a
          href="https://github.com/juhiechandra/yasu-hack-this-fall"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Yasu-Healthcare
        </a>{" "}
        digital record of a person's medical history, medical appointments, and
        medications.
      </div>

      <div>
        <a
          href="https://github.com/juhiechandra/HOLA-NITJ"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Hola-NITJ
        </a>{" "}
        First ever web project made in college hackathon :P
      </div>
      <div style={{ fontStyle: "italic" }}>
        !--Check creative projects section for other--!
      </div>
    </div>
  );
}

export default ProjectsPage;
