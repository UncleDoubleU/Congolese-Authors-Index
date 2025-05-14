import { useState } from "react";
import styles from "./Navbar.module.sass";

function Navbar() {
  const [menuText, setMenuText] = useState("menu");
  const [menuBtnClass, setMenuBtnClass] = useState(`${styles.mobileBtn}`);
  const [navListClass, setNavListClass] = useState(`${styles.navList}`);
  const [isActive, setIsActive] = useState(false);
  // const [isVisible, setIsVisible] = useState(true);
  const width = window.innerWidth;
  const isSmlScrn = width < 500;

  function handleClick() {
    const activeClass = `${styles.activeNavList}`;
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
  // function mediaSmallScren() {
  //   setIsVisible((isVisible) => !isVisible);

  //   if (isSmlScrn) {
  //     setNavListClass(`${styles.NavListSmallScreen}`);
  //     setMenuBtnClass(styles.mobileBtnSmallScreen);
  //   }
  // }

  function handleListClick() {
    const inactiveClass = `${styles.navList}`;
    setNavListClass(inactiveClass);
  }

  return (
    <nav className={styles.nav}>
      <a className={styles.navLogo} href="/">
        Congolese Authors Index
      </a>

      <button id="menu-btn" onClick={handleClick} className={menuBtnClass}>
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
