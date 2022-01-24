import clsx from "clsx";
import React, { useState } from "react";

function Accordion({
  title,
  body,
  index,
}: {
  title?: String;
  body?: String;
  index: number;
}) {
  const [isShow, setIsShow] = useState(false);

  console.log(index);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="accordion-item" id="accordion-parent">
      <h4 className="accordion-header" id="headingOne">
        <a
          href="#collapseOne"
          className="accordion-button"
          onClick={handleShow}
          data-toggle="collapse"
          data-target={`#collapse${index}`}
          data-parrent="#accordion-parent"
        >
          {title}
        </a>
      </h4>
      <div
        id={`#collapse-${index}`}
        className={clsx("accordion-collapse  ", isShow && "open")}
        data-parrent="#accordion-parent"
      >
        <div className="accordion-body">{body}</div>
      </div>
      <hr />
    </div>
  );
}

export default Accordion;
