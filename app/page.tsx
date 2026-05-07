"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import styles

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChaosTransition from "./components/ChaosTransition";
import Philosophy from "./components/Philosophy";
import ProductShowcase from "./components/ProductShowcase";
import Experience from "./components/Experience";
import Statement from "./components/Statement";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("body"), // Target the body for smooth scrolling
      smooth: true,
      multiplier: 1.5, // Adjust speed multiplier for faster scrolling
    });

    return () => {
      scroll.destroy(); // Clean up LocomotiveScroll instance on unmount
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <ChaosTransition />
      <Philosophy />
      <ProductShowcase />
      <Experience />
      <Statement />
      <Footer />
    </>
  );
}