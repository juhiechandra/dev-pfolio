import React from "react";
import "@fontsource/space-mono";

const blogStyle = {
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

function Blogs() {
  return (
    <div style={blogStyle}>
      <div>
        <hr /> {/* Horizontal line */}
        <h2 style={headingStyle}>
          My Summer of Code and Creativity at Headout
        </h2>
        <p>Date: Aug 8, 2023</p>
        <a
          href="https://medium.com/@juhiechandra/my-summer-of-code-and-creativity-at-headout-d6e62279921f"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Read Blog
        </a>
      </div>

      <div>
        <hr /> {/* Horizontal line */}
        <h2 style={headingStyle}>Summer Of Bitcoin 2022: Blog (3/3)</h2>
        <p>Date: Aug 28, 2022</p>
        <a
          href="https://medium.com/@juhiechandra/summer-of-bitcoin-2022-blog-3-3-947898920c01"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Read Blog
        </a>
      </div>

      <div>
        <hr /> {/* Horizontal line */}
        <h2 style={headingStyle}>Summer Of Bitcoin 2022: Blog (2/3)</h2>
        <p>Date: Jul 7, 2022</p>
        <a
          href="https://medium.com/@juhiechandra/summer-of-bitcoin-2022-blog-2-3-c2f62abe296e"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Read Blog
        </a>
      </div>

      <div>
        <hr /> {/* Horizontal line */}
        <h2 style={headingStyle}>Summer Of Bitcoin 2022: Blog (1/3)</h2>
        <p>Date: Jun 26, 2022</p>
        <a
          href="https://medium.com/@juhiechandra/summer-of-bitcoin-2022-blog-1-3-2e02ee37c156"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Read Blog
        </a>
      </div>
    </div>
  );
}

export default Blogs;
