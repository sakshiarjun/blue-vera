"use client";

import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import useIsMobile from "../hooks/useIsMobile";

export default function Footer() {
  const isMobile = useIsMobile();

  return isMobile
    ? <MobileFooter />
    : <DesktopFooter />;
}