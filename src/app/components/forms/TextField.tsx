import clsx from "clsx";
import React from "react";

interface TfieldProps {
  id: string;
  type?: "text" | "email";
  label?: String;
  style?: String;
  value?: string;
  handelChange?: (e: any) => void;
}

const TextField = ({
  id,
  type,
  label,
  style,
  handelChange,
  value,
}: TfieldProps) => {
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
        value={value}
        onChange={handelChange}
      />
    </div>
  );
};

export default TextField;
