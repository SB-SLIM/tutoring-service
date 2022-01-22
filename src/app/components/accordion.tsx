import clsx from "clsx";
import React, { useState } from "react";
function Accordion({ title, body }: { title?: String; body?: String }) {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="accordion-item" id="accordion-parent">
      <h4 className="accordion-header" id="headingOne">
        <a
          href="#collapseOne"
          className="accordion-button"
          type="button"
          onClick={handleShow}
          data-toggle="collapse"
          data-target="#collapseOne"
          data-parrent="#accordion-parent"
        >
          {title}
        </a>
      </h4>
      <div
        id="collapseOne"
        className={clsx("accordion-collapse collapse ", isShow && "show")}
        data-parrent="#accordion-parent"
      >
        <div className="accordion-body">{body}</div>
      </div>
      <hr />
    </div>
  );
}

export default Accordion;
