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
        <Forms />
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
