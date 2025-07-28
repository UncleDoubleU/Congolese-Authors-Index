import { useState, useEffect, useRef } from "react";
import styles from "./SearchTool.module.sass";

interface SearchToolProps {
  filtersName: string;
  sortingName: string;
  filters: {
    id: number;
    title: string;
    options: string[];
  }[];
  sorting: {
    id: number;
    title: string;
  }[];
  date: {
    title: string;
    placeholderFrom: number;
    placeholderTo: number;
  };
}

function SearchTool({
  filtersName,
  sortingName,
  filters,
  sorting,
  date,
}:
  SearchToolProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [titleStyle, setTitleStyle] = useState(`${styles.hidden}`);
  const [filtersContStyle, setFiltersContStyle] = useState(`${styles.hidden}`);
  const [sortingContStyle, setSortingContStyle] = useState(`${styles.hidden}`);
  const [btnText, setBtnText] = useState("search tools");
  const [applyBtnStyle, setApplyBtnStyle] = useState(`${styles.hidden}`);
  const [labelStyle, setLabelStyles] = useState(`${styles.hidden}`);
  const [h3Syle, setH3Style] = useState(`${styles.listH3}`);
  const [contStyle, setContStyle] = useState(`${styles.contDefault}`);
  const [width, setWidth] = useState(window.innerWidth);

  const contRef = useRef<HTMLFormElement>(null);
  const minDateRef = useRef<HTMLInputElement>(null);
  const maxDateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLabelStyles(
      isClicked
        ? `${styles.label}`
        : `${styles.hidden}`);
    setFiltersContStyle(
      isClicked
        ? `${styles.filtersCont}`
        : `${styles.hidden}`
    );
    setSortingContStyle(
      isClicked
        ? `${styles.sortingCont}`
        : `${styles.hidden}`
    );
    setH3Style(
      isClicked
        ? `${styles.h3}`
        : `${styles.hidden}`);
    setContStyle(
      isClicked
        ? `${styles.contClicked} ${styles.active}`
        : `${styles.contDefault}`
    );
    setBtnText(
      isClicked
        ? "x"
        : "search tools");
    setTitleStyle(
      isClicked
        ? `${styles.title}`
        : `${styles.hidden}`);
    setApplyBtnStyle(
      isClicked
        ? `${styles.applyBtn}`
        : `${styles.hidden}`);
  }, [isClicked]);

  useEffect(() => {
    contRef.current?.addEventListener("submit", handleForm);

    return () => {
      contRef.current?.removeEventListener("submit", handleForm);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  function handleForm(e: Event) {
    if (contRef?.current) {
      e.preventDefault();
    }
  }
  function handleClick() {
    setIsClicked((c) => !c)
  }

  function handleResize() {
    setWidth(window.innerWidth);
  }

  const sortingDropDown = sorting.map((item) => (
    <option className={styles.sortingOption} value={item.title} key={item.id}>
      {item.title}
    </option>
  ));

  return (
    <form
      action=""
      name="search tools"
      ref={contRef}
      className={contStyle}
    >
      <h2 className={titleStyle}>Search Tools</h2>

      <fieldset className={sortingContStyle}>
        <label className={styles.sortingLabel}>{sortingName}</label>
        <select className={styles.sortingSelect} name={sortingName}>
          {sortingDropDown}
        </select>
      </fieldset>

      <fieldset className={filtersContStyle}>
        <label key={filtersName} className={styles.filtersLabel}>
          <span className={h3Syle}>{filtersName}</span>
          {filters.map((item) => (
            <details
              key={item.title}
              className={styles.filtersDetails}
            >
              <summary
                className={styles.filtersSummary}
                key={item.title}
              >
                {item.title}
                <button>+</button>
              </summary>
              {item.options.map((filter, index) => (
                <label key={index} className={styles.filterItem}>
                  <input type="checkbox" name={filter} id={filter} />
                  {filter}
                </label>
              ))}
            </details>
          ))}
        </label>
      </fieldset>

      <fieldset className={styles.dateCont}>
        <label className={labelStyle}>
          between
          <input
            ref={minDateRef}
            name="startingDate"
            aria-label="Publication date full year"
            type="number"
            min="1900"
            max={date.placeholderTo}
            step="1"
            // value={""}
            placeholder="YYYY"
            className={styles.dateInput}
          />
        </label>
        <label className={labelStyle}>
          and
          <input
            ref={maxDateRef}
            name="maximumDate"
            aria-label="Publication date full year"
            type="number"
            min="1900"
            max={date.placeholderTo}
            step="1"
            // value={""}
            placeholder="YYYY"
            className={styles.dateInput}
          />
        </label>
      </fieldset>

      <button
        className={styles.btnStyle}
        onClick={handleClick}
      >{btnText}</button>
      <button
        type="submit"
        name="apply btn"
        onClick={() => console.log("clicked")}
        className={applyBtnStyle}
        value=""
      >
        apply
      </button>
    </form>
  );
}

export default SearchTool;
