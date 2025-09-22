"use client";
import "font-awesome/css/font-awesome.min.css";
import useNavStore from "./General/useNavStore";
import Body from "./Components/body/Body";

import { useState, useEffect, Fragment } from "react";

export default function LoginPage() {
  const { targetId, clearTarget } = useNavStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/imgs/brushed-alum-dark.png",
    "/imgs/3px-tile.png",
    "/imgs/always-grey.png",
    "/imgs/brick-wall.png",
    "/imgs/asfalt-light.png",
    "/imgs/brushed-alum.png",
    "/imgs/blizzard.png",
    "/imgs/black-linen.png",
  ];

  // For the background texture
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // For the nav
  useEffect(() => {
    if (targetId) {
      const el = document.getElementById(targetId);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      clearTarget();
    }
  }, [targetId, clearTarget]);

  return (
    <Fragment>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundRepeat: "repeat",
          opacity: 0.1,
          zIndex: -1,
          transition: "background-image 1.5s ease-in-out", // smooth fade
        }}
      ></div>
      <Body />
    </Fragment>
  );
}
