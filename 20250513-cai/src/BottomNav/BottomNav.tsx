import styles from "./BottomNav.module.sass";

function BottomNav() {
  return (
    <nav role="search bar" className={styles.container}>
      <ul>
        <h3>filters</h3>
        <li>
          <a href="#">filter 1</a>
        </li>
        <li>
          <a href="#">filter 2</a>
        </li>
        <li>
          <a href="#">filter 3</a>
        </li>
        <li>
          <a href="#">filter 4</a>
        </li>
      </ul>

      <ul>
        <h3>sort by</h3>
        <li>
          <a href="#">filter 5</a>
        </li>
        <li>
          <a href="#">filter 6</a>
        </li>
        <li>
          <a href="#">filter 7</a>
        </li>
        <li>
          <a href="#">filter 8</a>
        </li>
      </ul>

      <input type="text" placeholder="Search" />
    </nav>
  );
}

export default BottomNav;
