"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

const menuItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Philosophy",
    href: "#philosophy",
  },
  {
    name: "Product",
    href: "#product",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          padding: "28px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
          mixBlendMode: "difference",
          
        }}
      >
        {/* LOGO */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "1rem",
            letterSpacing: "4px",
            fontWeight: 500,
          }}
        >
          BLUE VERA
        </div>

        {/* MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#fffdef",
            width: "40px",
            height: "40px",
            position: "relative",
          }}
        >
          {/* Animated Hamburger */}
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            style={{
              position: "absolute",
              width: "32px",
              height: "1.5px",
              background: "#fffdef",
              left: 4,
              top: 12,
            }}
          />

          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            style={{
              position: "absolute",
              width: "32px",
              height: "1.5px",
              background: "#fffdef",
              left: 4,
              top: 20,
            }}
          />

          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
            }}
            style={{
              position: "absolute",
              width: "32px",
              height: "1.5px",
              background: "#fffdef",
              left: 4,
              top: 28,
            }}
          />
        </button>
      </div>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            style={{
              position: "fixed",
              inset: 0,
              background: "#050816",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* BACKGROUND TYPOGRAPHY */}
            <div
              style={{
                position: "absolute",
                fontSize: "22vw",
                fontWeight: 700,
                opacity: 0.03,
                color: "#fffdef",
                letterSpacing: "-10px",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              BLUEVERA
            </div>

            {/* MENU ITEMS */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 40,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  whileHover={{
                    x: 20,
                    opacity: 0.7,
                  }}
                  onClick={() => setIsOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "#fffdef",
                    fontSize: "clamp(3rem, 8vw, 7rem)",
                    fontWeight: 300,
                    lineHeight: 1,
                    letterSpacing: "-4px",
                    transition: "0.3s ease",
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* BOTTOM INFO */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.5,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              style={{
                position: "absolute",
                bottom: "40px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 40px",
                color: "#fffdef",
                fontSize: "0.9rem",
                letterSpacing: "1px",
              }}
            >
              <div>RESET IN CHAOS</div>

              <div>
                hello@bluevera.in
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}