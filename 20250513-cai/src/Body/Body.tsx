import styles from "./Body.module.sass";
import Author from "../Author/Author";
function Body() {
  return (
    <main>
      <h1>Full Index</h1>
      <Author fullName="" categories="" />
    </main>
  );
}

export default Body;
