import React from "react";
import Step from "./step";

function Stepper({ steps }: { steps: Object[] }) {
  const stepsLengh = steps.length;

  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const { label, isSlected }: any = step;

        let isLastChd = false;
        if (stepsLengh - 1 === index) {
          isLastChd = true;
        }

        return (
          <Step
            index={index}
            label={label}
            isLastChd={isLastChd}
            isSlected={isSlected}
          />
        );
      })}
    </div>
  );
}

export default Stepper;
