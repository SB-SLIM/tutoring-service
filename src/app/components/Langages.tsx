import React, { useRef } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

//we have to import list of langages
function Langages() {
  const lagagesList = useRef<HTMLDivElement>(null);

  //this is for test
  const langages = [
    { langage: "Frensh", label: "Fr" },
    { langage: "English", label: "En" },
  ];

  const onMouseenter = () => {
    if (lagagesList.current !== null) {
      lagagesList.current.classList.add("show");
    }
  };

  const onMouseleave = () => {
    if (lagagesList.current !== null) {
      lagagesList.current.classList.remove("show");
    }
  };

  return (
    <button
      className="langage"
      type="button"
      onMouseEnter={onMouseenter}
      onMouseLeave={onMouseleave}
    >
      <TiArrowSortedDown />
      <span>English (En)</span>
      <div
        className="langages-container collapse"
        ref={lagagesList}
        onMouseLeave={onMouseleave}
      >
        <div className="triangle">
          <div className="inside" />
        </div>
        <ul>
          {langages.map((l, i) => {
            const { langage, label } = l;
            return <li key={i}>{`${langage} (${label})`}</li>;
          })}
        </ul>
      </div>
    </button>
  );
}

export default Langages;
