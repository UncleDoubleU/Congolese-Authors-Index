import styles from './SfTuto.module.sass';
import {
     useRef,
     useEffect,
     useState,
} from 'react';

interface searchTextProp {
     searchTextInput: string
}

export default function SfTuto({ searchTextInput }: searchTextProp) {
     const [inputValue, setInputValue] = useState("");

     const cards = document.querySelectorAll("article");

     const searchInputRef = useRef<HTMLInputElement>(null);

     useEffect(() => {
          if (inputValue != "") {
               checkIfCard();
               searchTextInput = inputValue;
          } else {
               return;
          };
     }, [inputValue])

     function checkIfCard() {
          if (!cards) {
               // setCardsRendered(false);
               console.log('no card found');
          } else {
               console.log(inputValue)
               cards.forEach(card => {
                    // console.log(card);
                    let cardAuthorName = card.querySelector("h2");
                    // console.log(cardAuthorName?.innerText);
               });
               // console.log(cards.childNodes);
               // setCardsRendered(true);
          }
     };



     return (
          <form className={styles.searchWrapper}>
               <label htmlFor="searchBar">Search for Authors</label>
               <input
                    ref={searchInputRef}
                    onInput={(e) => setInputValue((e.target as HTMLTextAreaElement).value)}
                    type="text"
                    name='searchBar'
                    max={200}
                    placeholder='search for an author'
               />
          </form>
     )
}
