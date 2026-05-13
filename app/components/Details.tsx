"use client";

import DesktopDetails from "./DesktopDetails";
import MobileDetails from "./MobileDetails";
import useIsMobile from "../hooks/useIsMobile";

export default function Details() {
  const isMobile = useIsMobile();

  return isMobile
    ? <MobileDetails />
    : <DesktopDetails />;
}
