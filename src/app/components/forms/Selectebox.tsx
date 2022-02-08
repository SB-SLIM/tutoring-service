import React from "react";

function Selectebox({
  options,
  label,
  name,
  value,
  handleChange,
  size,
}: {
  options: string[];
  label?: string;
  name: string;
  value: string;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  size?: "sm" | "md" | "xl";
}) {
  let style = "form-input";
  if (size) {
    style = `${style} form-input--${size}`;
  }
  return (
    <div className="form-control">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        className={style}
        value={value}
        onChange={handleChange}
      >
        {options.map((value, index) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Selectebox;
