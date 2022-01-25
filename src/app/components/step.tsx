import clsx from "clsx";
import React from "react";

interface StepProps {
  label: String;
  index: number;
  isLastChd: Boolean;
  isSlected: Boolean;
}

function Step({ label, index, isLastChd, isSlected }: StepProps) {
  return (
    <div className="step ">
      <div className="step-body">
        <div
          className={clsx(
            "step-body__line",
            index === 0 && "display-none",
            !isSlected && "fade"
          )}
        />
        <div className={clsx("step-body__lvl", !isSlected && "fade")}>
          {index + 1}
        </div>
        <div
          className={clsx(
            "step-body__line",
            isLastChd && "display-none",
            !isSlected && "fade"
          )}
        />
      </div>
      <div
        className={clsx(
          "step-label",
          index === 0 && "step-label--firstChd",
          isLastChd && "step-label--lastChd",
          !isSlected && "fade"
        )}
      >
        {label}
      </div>
    </div>
  );
}

export default Step;
