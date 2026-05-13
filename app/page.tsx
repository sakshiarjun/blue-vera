"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import styles

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChaosTransition from "./components/ChaosTransition";
import Philosophy from "./components/Philosophy";
import ProductShowcase from "./components/ProductShowcase";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Details from "./components/Details";

export default function Home() {

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!scrollRef.current) return;
  const scroll = new LocomotiveScroll({
    el: scrollRef.current!,
    smooth: true,
    multiplier: 1.2,
  } as any ); // Cast to 'any' to bypass type issues

  return () => {
    scroll.destroy();
  };
}, []);

  return (
    <div data-scroll-container
      ref={scrollRef}>
      <Navbar />
      <Hero />
      <ChaosTransition />
      <Philosophy />
      <ProductShowcase />
      <Experience />
      <Details />
      <Footer />
    </div>
  );
}