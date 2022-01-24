import React from "react";


function Button({ type, children }: { type?: String; children: String }) {
  let style = "btn";

  if (type === "primary-outlined") {
    style = "btn btn--primary-outlined";
  }
  if (type === "secondary") {
    style = "btn btn--secondary";
  }
  if (type === "secondary-outlined") {
    style = "btn btn--secondary-outlined";
  }

  return (
    <button type="submit" className={style}>
      {children}
    </button>
  );
}

export default Button;
