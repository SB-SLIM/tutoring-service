import React from "react";

interface BtnProps {
  type?: String;
  label: String;
  handleSubmit?: (e: React.MouseEvent) => void;
  size?: "sm" | "md" | "lg";
}

function Button({ type, label, handleSubmit, size }: BtnProps) {
  let style = "btn";

  if (size && size !== "sm") {
    style = `${style} btn--${size}`;
  }

  if (type && type !== "submit") {
    style = `${style} btn--${type}`;
  }

  return (
    <button type="submit" className={style} onClick={handleSubmit}>
      {label}
    </button>
  );
}

export default Button;
