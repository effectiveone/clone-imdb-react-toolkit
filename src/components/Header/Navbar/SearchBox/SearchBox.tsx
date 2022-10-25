import  {useState, useEffect, useRef} from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {BsSearch, BsArrowRightSquare } from "react-icons/bs";
import {MdOutlineLocalMovies, MdOutlineMonitor, MdPeople } from "react-icons/md";
import {RiBuilding4Fill } from "react-icons/ri";
import { IconContext } from "react-icons";



import styles from "./SearchBox.module.scss";

const SearchBox: React.FC= () => {
    const options = [{name: "All", comp: <BsSearch/>},
    {name: "Titles", comp: <MdOutlineLocalMovies/>},
    {name: "TV Episodes", comp: <MdOutlineMonitor/>},
    {name: "Celebs", comp: <MdPeople/>},
    {name: "Companies", comp: <RiBuilding4Fill/>},
    {name: "Keywords", comp: <BsArrowRightSquare/>},

];




    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);


  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const inputElement = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.onclick = (event: HTMLElement | any | null) => {
      if (event.target.contains(inputElement.current)
        && event.target !== inputElement.current) {     
          setIsOpen(false)
      }
    }
}, [setIsOpen]);
  return (
 
      <div className={styles.DropDownContainer}>
        <div className={styles.DropDownHeader} onClick={toggling}>
          {options[selectedOption].name} { isOpen ? 
          <IconContext.Provider value={{ color: "black",  className: "global-class-name" }}>
          <div>
          <BiChevronDown/>
          </div>
        </IconContext.Provider>
         : 
         <IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
         <div>
         <BiChevronUp/>
         </div>
       </IconContext.Provider>
        }
        </div>
        {isOpen && (
          <div className={styles.DropDownListContainer }
          ref={inputElement}>
            <ul className={styles.DropDownList}>
              {options.map((option, ind) => (
                <li className={styles.ListItem} onClick={onOptionClicked(ind)} key={Math.random()}>
     <div className={styles.Grid}>
       <div className={styles.Attribute} >{option.comp}
 </div>  
   <div className={styles.AttributeBis} >{option.name}
 </div>  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    )
}

export default SearchBox