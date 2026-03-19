import styles from 'SortBy.module.sass';
import { useState, useEffect } from 'react';

function SortBy() {
     const [isClicked, setIsClicked] = useState(false);
     const [listStyle, setListStyles] = useState(`${styles.hidden}`)


     useEffect(() => {
          setListStyles(isClicked ? `${styles.list}` : `${styles.hidden}`)
     }, [isClicked])

     const filters = [
          { id: 0, title: "by genre" },
          { id: 1, title: "by date of birth" },
          { id: 2, title: "by place of birth" },
          { id: 3, title: "first published in" },
          { id: 4, title: "by languages" },
          { id: 5, title: " by publishers" },
     ];

     const listItems = filters.map((filter) => (
          <li key={filter.id} className={styles.listItem}>{filter.title}</li>
     ));

     function handleClick() {
          setIsClicked((c) => !c)
     }
     return (
          <section onClick={handleClick} role="button" className={styles.searchToolCont}>
               <article>
                    <h3 className={styles.listH3}>
                         <span>filters</span>
                         <span aria-hidden="true" className="icon">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="10"
                                   height="10"
                                   viewBox="0 0 10 10"
                                   fill="none"
                              >
                                   <path
                                        d="M6.06934 4.51562V10L3.93066 9.14941V4.51562L0 0H10L6.06934 4.51562Z"
                                        fill="#110404"
                                   />
                              </svg>
                         </span>
                    </h3>
                    <ul className={listStyle}>{listItems}</ul>
               </article>
          </section>
     )
}

export default SortBy
