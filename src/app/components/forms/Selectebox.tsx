import React from "react";

function Selectebox({
  options = ["", "value-1", "value-2"],
  label = "select exemple",
  name,
  value,
  handleChange,
}: {
  options?: string[];
  label?: string;
  name: string;
  value: string;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="form-input"
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
