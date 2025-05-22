import styles from "./BottomNav.module.sass";

function BottomNav() {
  return (
    <nav role="search bar" className={styles.container}>
      <section className={styles.searchToolCont}>
        <h3>filters</h3>
        <ul>
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
      </section>
      <section className={styles.searchToolCont}>
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
      </section>
      <button>search tools</button>
      <input name="search bar" type="text" placeholder="search" />
    </nav>
  );
}

export default BottomNav;
