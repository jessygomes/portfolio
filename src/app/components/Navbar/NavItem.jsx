import Link from "next/link";
import styles from "./Navbar.module.css";

export default function NavItem({ text, link, active }) {
  return (
    <Link
      href={link}
      className={`${styles.nav__item} ${active ? styles.activeLink : ""}`}
    >
      {text}
    </Link>
  );
}
