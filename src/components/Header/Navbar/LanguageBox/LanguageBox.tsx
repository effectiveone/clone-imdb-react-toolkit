import  {useState, useEffect, useRef} from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {BsFillCircleFill, BsCircle } from "react-icons/bs";

import { IconContext } from "react-icons";
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';

import { getLanguage, setLanguage } from "../../../../redux/reducers/languageSlice";


import styles from "./Language.module.scss";

const Language: React.FC= () => {
  const [name, setName] = useState("en");
  const {
    lang
  } = useAppSelector((state) => ({ ...state.language }));

  const dispatch = useAppDispatch();
  useEffect(() => {
    getLanguage();
    dispatch(setLanguage(name));
  }, [name, dispatch]);

    const options = [{name: "English", comp: <BsCircle/>, short: "ENG", shorten: "en"},
    {name: "Polski", comp: <BsCircle/>, short: "PL", shorten: "pl"},
    {name: "Italiano", comp: <BsCircle/>, short: "IT", shorten: "it"},
    {name: "Francais", comp: <BsCircle/>, short: "FR", shorten: "fr"},
    {name: "Deutsch", comp: <BsCircle/>,  short: "DE", shorten: "de"},
    {name: "Portugues", comp: <BsCircle/>, short:  "PT", shorten: "pt"},
    {name: "Espanol", comp: <BsCircle/>,   short:  "ES", shorten: "es"},

];

    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    setName(options[value].shorten)
  };

  const inputElements = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.onclick = (event: HTMLElement | any | null) => {
      if (event.target.contains(inputElements.current)
        && event.target !== inputElements.current) {     
          setIsOpen(false)
      }
    }
}, [setIsOpen]);
  return (
 
      <div className={styles.DropDownContainer}
      ref={inputElements}>
        <div className={styles.DropDownHeader} onClick={toggling}>
        {options[selectedOption].short} { isOpen ? 
          <IconContext.Provider value={{ color: "white",  className: "global-class-name" }}>
          <div>
          <BiChevronDown/>
          </div>
        </IconContext.Provider>
         : 
         <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
         <div>
         <BiChevronUp/>
         </div>
       </IconContext.Provider>
        }
        </div>
        {isOpen && (
          <div className={styles.DropDownListContainer}>
            <ul className={styles.DropDownList}>
              {options.map((option, index) => (
                <li className={styles.ListItem} onClick={onOptionClicked(index)} key={Math.random()}>
     <div className={styles.Grid}>
       <div className={styles.Attribute} >{selectedOption === index ?
                <IconContext.Provider value={{ color: "rgb(245,197,24)", className: "global-class-name" }}>
                <div>
                <BsFillCircleFill/>
                </div>
              </IconContext.Provider>
      : <BsCircle/> }
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

export default Language