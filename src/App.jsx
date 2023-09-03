import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/home";
import ProjectsPage from "./components/pages/projects";
import BlogsPage from "./components/pages/blogs";
import WritingsPage from "./components/pages/writings";
import CreativeProgrammingPage from "./components/pages/creativeprogramming";
import styled from "styled-components";
import Sun from "./components/Sun";

const CentralBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  height: 100vh; /* Adjust to set the height of the central block to fill the viewport */
`;

const Content = styled.div`
  width: 50rem;
  height: 37.5rem;
  margin-left: 3rem;
`;

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CentralBlock>
          <div style={{ display: "flex" }}>
            <Navbar />
            <Content>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/writings" element={<WritingsPage />} />
                <Route
                  path="/creative-programming"
                  element={<CreativeProgrammingPage />}
                />
                <Route path="*" element={<h2>404 - Page Not Found</h2>} />
              </Routes>
            </Content>
          </div>
        </CentralBlock>
        <Sun />
      </div>
    </Router>
  );
}

export default App;
