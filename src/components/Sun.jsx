import React from "react";
import styled from "styled-components";

const SunBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/sun.png"); /* Replace with your image file path */
  background-size: cover;
  background-repeat: no-repeat;
  transform: translateY(20%);
  pointer-events: none; /* This prevents the background from being clickable */
`;

function Sun() {
  return <SunBackground></SunBackground>;
}

export default Sun;
