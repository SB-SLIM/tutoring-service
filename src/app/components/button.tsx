import React from "react";

interface BtnProps {
  type?: String;
  label: String;
  handelClick?: () => void;
  size?: "sm" | "md" | "lg";
}

function Button({ type, label, handelClick, size }: BtnProps) {
  let style = "btn";

  if (size && size !== "sm") {
    style = `${style} btn--${size}`;
  }

  if (type) {
    style = `${style} btn--${type}`;
  }

  return (
    <button type="submit" className={style} onClick={handelClick}>
      {label}
    </button>
  );
}

export default Button;
