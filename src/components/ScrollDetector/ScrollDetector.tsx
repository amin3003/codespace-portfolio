"use client";
import React, { useState } from "react";
import { useEffect } from "react";
// import state from "@c/shared/Store";
// /**
//  * only purpose of this element is to update scroll position into the document so CSS knows the scroll
//  * we dont put this code in our header component directly because this code has to be 'use client'
//  * @returns
//  */
// export default function ScrollDetector() {
//   const headerElement = React.useRef<HTMLElement>();
//   /* -------------------------- detect current scroll ------------------------- */
//   const onScroll = React.useCallback(() => {
//     //we can use isTop in css to update css based on scroll
//     if (!headerElement.current) {
//       headerElement.current = document.getElementById("header") || undefined;
//     }
//     const isTop = String(window.scrollY <= 0);

//     state.top.current = window.scrollY;
//     if (headerElement.current) headerElement.current.dataset.isTop = isTop;
//     // document.documentElement.dataset.isTop = isTop;
//   }, []);
//   React.useEffect(() => {
//     document.addEventListener("scroll", onScroll);
//     onScroll(); //initial state
//     return () => {
//       document.removeEventListener("scroll", onScroll);
//     };
//   }, [onScroll]);
//   return null;
// }
export default function ScrollDetector() {
  let lastScrollPosition = 0;
  const handleScroll = () => {
    let currentScrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const navbar = document.getElementById("header") as any;

    // const isTop = String(currentScrollPosition <= lastScrollPosition);
    // const isDown = String(currentScrollPosition > lastScrollPosition);

    if (currentScrollPosition > lastScrollPosition) {
      // Scrolling down
      navbar.classList.add("hidden");
      navbar.classList.remove("sticky");
      navbar.classList.remove("bg-base-100");
      // document.documentElement.dataset.isTop = isTop
      console.log(
        `Scrolled down currentScroll:${currentScrollPosition} lastScroll:${lastScrollPosition}`
      );
    } else if (currentScrollPosition < lastScrollPosition) {
      // Scrolling up
      navbar.classList.add("sticky");
      navbar.classList.remove("hidden");
      navbar.classList.add("bg-base-100");
      // document.documentElement.dataset.isTop = isDown
      console.log(
        `Scrolled up currentScroll:${currentScrollPosition} lastScroll:${lastScrollPosition}`
      );

      if (currentScrollPosition <= 10) {
      } else {
      }
    }
    lastScrollPosition = currentScrollPosition;
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return null;
}
