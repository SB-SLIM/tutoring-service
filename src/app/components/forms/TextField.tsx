import clsx from "clsx";
import React from "react";

interface TfieldProps {
  id: string;
  type?: "text" | "email";
  label?: String;
  style?: String;
}

const TextField = ({ id, type, label, style }: TfieldProps) => {
  return (
    <div className={clsx("form-control", style && `${style}`)}>
      {label && (
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className="form-input"
        type={type}
        name={id}
        id={id}
        placeholder="name@example.com"
      />
    </div>
  );
};

export default TextField;
