"use client";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavItem from "./NavItem";

const itemNavbar = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Projects",
    link: "/projects",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // cleanup
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const pathname = usePathname();

  const handleItemClick = (link) => {
    setActiveLink(link);
    setNavActive(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <div
          className={styles.nav__menuBar}
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div
          className={`${navActive ? styles.active : ""} ${
            styles.nav__menuList
          }`}
        >
          {itemNavbar.map((item, index) => {
            const active =
              item.link === "/"
                ? pathname === "/"
                : pathname.startsWith(item.link);
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveLink(item.link), setNavActive(false);
                }}
              >
                <Link
                  href={item.link}
                  className={`${styles.nav__item} ${
                    active ? styles.activeLink : ""
                  }`}
                >
                  {item.text}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
