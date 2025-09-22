import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

function ShinyText({ children }) {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    // Animate the ::after pseudo-element by targeting CSS variable
    gsap.fromTo(
      textRef.current,
      { "--shine-pos": "200%" }, // start far right
      {
        "--shine-pos": "-200%", // move to far left
        duration: 3,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

  return (
    <span className="shiny-text" data-text={children} ref={textRef}>
      {children}
    </span>
  );
}

export default ShinyText;
