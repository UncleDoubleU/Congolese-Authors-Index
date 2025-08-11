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
}: SearchToolProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [titleStyle, setTitleStyle] = useState(`${styles.hidden}`);
  const [filtersContStyle, setFiltersContStyle] = useState(`${styles.hidden}`);
  const [sortingContStyle, setSortingContStyle] = useState(`${styles.hidden}`);
  const [applyBtnStyle, setApplyBtnStyle] = useState(`${styles.hidden}`);
  const [resetBtnStyle, setResetBtnStyle] = useState(`${styles.hidden}`);
  const [dateLabelStyle, setDateLabelStyle] = useState(`${styles.hidden}`);
  const [h3Syle, setH3Style] = useState(`${styles.listH3}`);
  const [contStyle, setContStyle] = useState(`${styles.contDefault}`);
  const [width, setWidth] = useState(window.innerWidth);
  const [stBtnStyle, setStBtnStyle] = useState(`${styles.btnStyle}`);

  const contRef = useRef<HTMLDivElement>(null);
  const minDateRef = useRef<HTMLInputElement>(null);
  const maxDateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDateLabelStyle(isClicked ? `${styles.dateLabel}` : `${styles.hidden}`);
    setFiltersContStyle(
      isClicked ? `${styles.filtersCont}` : `${styles.hidden}`
    );
    setSortingContStyle(
      isClicked ? `${styles.sortingCont}` : `${styles.hidden}`
    );
    setH3Style(isClicked ? `${styles.h3}` : `${styles.hidden}`);
    setContStyle(
      isClicked
        ? `${styles.contClicked} ${styles.active}`
        : `${styles.contDefault}`
    );
    setStBtnStyle(
      isClicked ? `${styles.clickedBtnStyle}` : `${styles.btnStyle}`
    );
    setTitleStyle(isClicked ? `${styles.title}` : `${styles.hidden}`);
    setApplyBtnStyle(isClicked ? `${styles.applyBtn}` : `${styles.hidden}`);
    setResetBtnStyle(isClicked ? `${styles.resetBtn}` : `${styles.hidden}`);
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
    setIsClicked((c) => !c);
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
    <div ref={contRef} className={contStyle}>
      <h2 className={titleStyle}>Search Tools</h2>

      <fieldset className={sortingContStyle}>
        <label
          className={styles.sortingLabel}
          htmlFor="sorting-dropdown"
        >
          {sortingName}
        </label>
        <select
          className={styles.sortingSelect}
          name="sortingDropdown" id="sorting-dropdown"
        >
          {sortingDropDown}
        </select>
      </fieldset>

      <fieldset className={filtersContStyle}>
        <label key={filtersName} className={styles.filtersLabel}>
          <span className={h3Syle}>{filtersName}</span>
          {filters.map((item) => (
            <details key={item.title} className={styles.filtersDetails}>
              <summary className={styles.filtersSummary} key={item.title}>
                {item.title}
                <button>+</button>
              </summary>
              {item.options.map((filter, index) => (
                <label key={index} className={styles.filterItem}>
                  <input type="checkbox" name={filter} id={filter} style={{ transform: "scale(1.25)" }} />
                  {filter}
                </label>
              ))}
            </details>
          ))}
        </label>
      </fieldset>

      <fieldset className={styles.dateCont}>
        <label className={dateLabelStyle}>
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
        <label className={dateLabelStyle}>
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

      <button className={stBtnStyle} onClick={handleClick}>
        {!isClicked ? (
          "search tools"
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <rect width="10" height="10" fill="none" />
              <path
                d="M5 3.88906L8.88906 0L10 1.11094L6.11094 5L10 8.88906L8.88828 10L4.99921 6.11094L1.11094 10L0 8.88828L3.88906 4.99921L0 1.11015L1.11094 0.000785612L5 3.88906Z"
                fill="#110404"
              />
            </g>
          </svg>
        )}
      </button>
      <button
        type="submit"
        name="applyBtn"
        onClick={() => console.log("clicked apply")}
        className={applyBtnStyle}
        value="Submit"
      >
        apply
      </button>
      <button
        type="reset"
        name="resetBtn"
        onClick={() => console.log("clicked reset")}
        className={resetBtnStyle}
        value="Reset"
      >
        reset
      </button>
    </div>
  );
}

export default SearchTool;
