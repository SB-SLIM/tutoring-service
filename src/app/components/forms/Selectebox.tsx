import React from "react";

function Selectebox({
  options = ["", "value-1", "value-2"],
  label = "select exemple",
  selectName = "select-exemple",
}: {
  options?: string[];
  label?: string;
  selectName?: string;
}) {
  return (
    <div className="form-control">
      <label htmlFor={selectName} className="form-label">
        {label}
      </label>
      <select
        name={selectName}
        id={selectName}
        className="form-input"
        value={""}
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
