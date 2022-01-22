import React from "react";

function TextField({
  id = "",
  type,
  label = "",
}: {
  id: string;
  type?: "text" | "email";
  label: String;
}) {
  return (
    <div className="form-controll">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input"
        type={type}
        name={id}
        id={id}
        placeholder="name@example.com"
      />
    </div>
  );
}

export default TextField;
