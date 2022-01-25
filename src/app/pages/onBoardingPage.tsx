import Button from "app/components/button";
import Selectebox from "app/components/forms/Selectebox";
import TextField from "app/components/forms/TextField";
import Stepper from "app/components/stepper";
import Forms from "app/layouts/forms";
import React from "react";

const steps = [
  { label: "Subject", isSlected: true },
  { label: "Availability", isSlected: true },
  { label: "About you", isSlected: false },
];

function OnBoarding() {
  return (
    <main className="page-100 onBoarding">
      <Stepper steps={steps} />
      <div className="subject">
        <Forms>
          <TextField id="{1}" label="What's your email address?" type="email" />

          <Selectebox label="What subject(s) would you like to teach?" />
          <Selectebox label="What's the highest degree you have received?" />

          <div className="text-align--end">
            <Button label="Start" />
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
