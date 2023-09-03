import React from "react";
import { styled } from "styled-components";
import "@fontsource/space-mono";

const StyledHomePage = styled.div`
  font-family: "Space Mono";
  color: #efefef;
  font-size: 20px;

  a {
    text-decoration: underline;
    font-weight: bold;

    color: #f1b064; /* Keeps the link color the same as the text color */
  }
`;

function HomePage() {
  return (
    <StyledHomePage>
      <p>Hi, I’m Juhie.</p>
      <p style={{ fontWeight: "bold" }}>
        I work in the intersection of code, design, and research.
      </p>

      <p>
        Find me on <a href="https://twitter.com/CerulianJ">Twitter</a>
      </p>
      <p>
        If you remembered my old Framer portfolio, it's{" "}
        <a href="https://juhiescvandpf.framer.website/">here</a>.
      </p>
      <p style={{ fontStyle: "italic" }}>
        All code is provided under a MIT license unless otherwise stated.
      </p>
    </StyledHomePage>
  );
}

export default HomePage;
