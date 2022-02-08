import clsx from "clsx";
import React from "react";

interface TfieldProps {
  id: string | number;
  type?: "text" | "email";
  label?: string;
  styles?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  err?: string;
}

const TextField = ({
  id,
  type,
  label,
  styles,
  handleChange,
  value,
  err,
}: TfieldProps) => {
  const alert = (err: string) => {
    return <div className="alert">{err}</div>;
  };

  return (
    <div className={clsx("form-control", styles && `${styles}`)}>
      {label && (
        <label className="form-label" htmlFor={id.toString()}>
          {label}
        </label>
      )}
      <input
        className="form-input"
        type={type}
        name={type}
        id={id.toString()}
        placeholder="name@example.com"
        value={value}
        onChange={handleChange}
      />
      {err && alert(err)}
    </div>
  );
};

export default TextField;
