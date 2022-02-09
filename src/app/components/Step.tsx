import clsx from "clsx";

interface StepProps {
  label: String;
  index: number;
  isLastChd: Boolean;
  isSlected: Boolean;
}

function Step({ label, index, isLastChd, isSlected }: StepProps) {
  return (
    <div className={clsx("step ", !isSlected && "fade")}>
      <div className="step-body">
        <div
          className={clsx("step-body__line", index === 0 && "display-none")}
        />
        <div className="step-body__lvl">{index + 1}</div>
        <div className={clsx("step-body__line", isLastChd && "display-none")} />
      </div>
      <div
        className={clsx(
          "step-label",
          index === 0 && "step-label--firstChd",
          isLastChd && "step-label--lastChd"
        )}
      >
        {label}
      </div>
    </div>
  );
}

export default Step;
