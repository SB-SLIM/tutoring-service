import { Step } from "./index";

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
            key={index}
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
