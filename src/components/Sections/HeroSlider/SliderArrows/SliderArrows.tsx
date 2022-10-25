import style from "./SliderArrows.module.css";
import react from "react";

interface ChildProps {
    direction: string,
    opacity: number,
    handleClick: () => void
}

const  SliderArrows: React.FC<ChildProps> = ({handleClick, direction, opacity}) => {


 const renderArrowRight= () => {
    return (
      <svg
        width="20"
        height="30"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 13L7 7L1 1"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

 const  renderArrowLeft= () =>  {
    return (
      <svg
      width="20"
      height="30"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 13L1 7L7 1"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

    return (
        <div className={style.ArrowWrapper} 
        style={{left: direction === 'left' ?  '128px' : '160px', opacity: `${opacity}`}}
onClick={() => handleClick()}>
          {direction === 'left' ? renderArrowLeft() : renderArrowRight()}
        </div>
    );
  }

  export default SliderArrows