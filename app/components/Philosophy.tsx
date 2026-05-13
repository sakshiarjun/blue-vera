"use client";

import useIsMobile from "../hooks/useIsMobile";
import DesktopPhilosophy from "./DesktopPhilosophy";
import MobilePhilosophy from "./MobilePhilosophy";


export default function Philosophy() {
  const isMobile = useIsMobile();

  return isMobile 
    ? <MobilePhilosophy />
    : <DesktopPhilosophy />;
}