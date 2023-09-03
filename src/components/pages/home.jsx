import React from "react";
import { styled } from "styled-components";
import "@fontsource/dm-sans";
import "@fontsource/nixie-one";

function HomePage() {
  return (
    <div style={{ fontFamily: "Nixie One", color: "#EFEFEF" }}>
      <p>Hi, I’m Juhie Chandra.</p>
      <p style={{ fontWeight: "bold" }}>
        I work in the intersection of code, design and research.
      </p>
      <p>
        Find me on <a href="https://twitter.com/CerulianJ">Twitter</a>
      </p>
      <p style={{ fontStyle: "italic" }}>
        All code is provided under a MIT license unless otherwise stated.
      </p>
    </div>
  );
}

export default HomePage;
