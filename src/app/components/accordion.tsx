import clsx from "clsx";
import React, { useState } from "react";
function Accordion({ title, body }: { title?: String; body?: String }) {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="accordion-item">
      <h4 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" onClick={handleShow}>
          {title}
        </button>
      </h4>
      <div className={clsx("accordion-collapse collapse", isShow && "show")}>
        <div className="accordion-body">{body}</div>
      </div>
      <hr />
    </div>
  );
}

export default Accordion;
