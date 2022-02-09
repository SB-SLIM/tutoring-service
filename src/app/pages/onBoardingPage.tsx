import { Button, Selectebox, Stepper, TextField } from "app/components";
import { Forms } from "app/layouts";
import React, { ChangeEvent, useState } from "react";

const steps = [
  { label: "Subject", isSlected: true },
  { label: "Availability", isSlected: true },
  { label: "About you", isSlected: false },
];

function OnBoarding() {
  const [selectSubject, setSelectSubject] = useState("");
  const [selectDegree, setSelectDegree] = useState("");
  const [email, setEmail] = useState("");
  const [forms, setForms] = useState({});

  const handleChange = (e: ChangeEvent<any>) => {
    const tmp = e.target;

    if (tmp) {
      tmp.name === "selectSubject" && setSelectSubject(tmp.value);
      tmp.name === "selectDegree" && setSelectDegree(tmp.value);
      tmp.name === "email" && setEmail(tmp.value);
    }
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const tmp = { email, selectSubject, selectDegree };
    setForms(tmp);
    setEmail("");
    setSelectDegree("");
    setSelectSubject("");
    console.log(forms);
  };

  return (
    <main className="page-100 onBoarding container">
      <Stepper steps={steps} />
      <div className="subject">
        <Forms>
          <TextField
            id="{1}"
            label="What's your email address?"
            type="email"
            value={email}
            handleChange={handleChange}
            styles="u-mb"
          />

          <Selectebox
            label="What subject(s) would you like to teach?"
            name="selectSubject"
            options={["option-1", "option-2"]}
            handleChange={handleChange}
            value={selectSubject}
            styles="u-mb"
          />
          <Selectebox
            label="What's the highest degree you have received?"
            name="selectDegree"
            options={["option-1", "option-2"]}
            handleChange={handleChange}
            value={selectDegree}
            styles="u-mb"
          />

          <div className="text-align--end">
            <Button label="Start" handleSubmit={handleSubmit} />
          </div>
        </Forms>
        <div className="subject-info">
          <h3>We welcome you to apply</h3>
          <p>
            But not all applicants are accepted. We hold a high-bar, and will
            ask a few questions to help you find a match.
          </p>
        </div>
      </div>
    </main>
  );
}

export default OnBoarding;
