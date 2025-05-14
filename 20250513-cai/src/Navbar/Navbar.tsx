import { useState } from "react";
import styles from "./Navbar.module.sass";

function Navbar() {
  const [menuText, setMenuText] = useState("menu");
  const [navListClass, setNavListClass] = useState(`${styles.navList}`);
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    const activeClass = `${styles.navList + " " + styles.activeNavList}`;
    const inactiveClass = `${styles.navList}`;

    setIsActive((isActive) => !isActive);

    if (isActive) {
      setMenuText("menu");
      setNavListClass(inactiveClass);
    } else {
      setMenuText("close");
      setNavListClass(activeClass);
    }
  }

  function handleListClick() {
    const inactiveClass = `${styles.navList}`;
    setNavListClass(inactiveClass);
  }

  return (
    <nav className={styles.nav}>
      <a className={styles.navLogo} href="/">
        Congolese Authors Index
      </a>

      <button id="menu-btn" onClick={handleClick} className={styles.mobileBtn}>
        {menuText}
      </button>

      <ul id="nav-list" className={navListClass}>
        <li onClick={handleListClick} className={styles.navItem}>
          <a href="/">index</a>
        </li>
        <li onClick={handleListClick} className={styles.navItem}>
          <a href="/">about</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
