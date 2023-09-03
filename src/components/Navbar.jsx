import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "@fontsource/dm-sans";
import "@fontsource/dotgothic16";
const SideBar = styled.div`
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  posotion: fixed;
  width: 100px;
  &.active {
    transform: translateX(0);
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      a {
        display: block;
        padding: 10px 20px;
        color: #f1b064; /* Change text color to white */

        font-family: "DotGothic16";
        font-weight: 500;
        font-size: 20px;

        text-decoration: none;
        transition: all 0.3s ease-in-out;
        &:hover {
          background-color: transparent; /* Remove background color */
          border-bottom: 2px solid #f1b064; /* Add underline effect on hover */
        }
      }
    }
  }
  @media (min-width: 768px) {
    width: 200px;
    &.active {
      transform: translateX(0);
    }
  }
`;

export default function Navbar() {
  return (
    <SideBar>
      <ul>
        <li>
          <Link to="/"> /Index </Link>
        </li>
        <li>
          <Link to="/projects"> /Builds </Link>
        </li>
        <li>
          <Link to="/creative-programming"> /Creative-Projects </Link>{" "}
        </li>
        <li>
          <Link to="/blogs"> /Blogs </Link>
        </li>
        <li>
          <Link to="/writings"> /Writings </Link>
        </li>
        <li>
          <a
            href="https://github.com/juhiechandra"
            target="_blank"
            rel="noopener noreferrer"
          >
            /GitHub
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/cerulianJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            /Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/juhiechandra-02/"
            target="_blank"
            rel="noopener noreferrer"
          >
            /LinkedIn
          </a>
        </li>
        <li>
          <Link
            to="https://juhiescvandpf.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Framer Site here{" "}
          </Link>
        </li>
      </ul>
    </SideBar>
  );
}
