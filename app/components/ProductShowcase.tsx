"use client";

import useIsMobile from "../hooks/useIsMobile";

import DesktopProductShowcase from "./DesktopProductShowcase";
import MobileProductShowcase from "./MobileProductShowcase";

export default function ProductShowcase() {
  const isMobile = useIsMobile();

  return isMobile
    ? <MobileProductShowcase />
    : <DesktopProductShowcase />;
}