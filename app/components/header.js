"use client";

import styles from "./header.module.css";
import logo from "../../public/assets/shared/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image className={styles.logo} src={logo} alt="logo" />
      </Link>
      {isHome ? (
        <Link className="link1" href="slide/1">
          Start slideshow
        </Link>
      ) : (
        <Link className="link1" href="/">
          Stop slideshow
        </Link>
      )}
    </header>
  );
}
