import React from 'react';

export interface StepperProps {
  steps: {
    title: string;
    desc?: string;
    content?: React.ReactNode;
  }[];
  currentStep: number; // 當前步驟（從 0 開始）
  direction?: 'horizontal' | 'vertical'; // 方向
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  direction = 'horizontal',
}) => {
  return (
    <div className={`ded-stepper ded-stepper-${direction}`}>
      <div className="ded-stepper-header">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`ded-step ${
              index === currentStep
                ? 'ded-step-active'
                : index < currentStep
                ? 'ded-step-completed'
                : ''
            }`}
          >
            <div className="ded-step-circle">{index + 1}</div>
            <div className="ded-step-group">
              <div className="ded-step-title">{step.title}</div>
              <div className="ded-step-description">{step.desc}</div>
            </div>
            {direction === 'vertical' && index !== steps.length - 1 && (
              <div className="ded-step-connector" />
            )}
          </div>
        ))}
      </div>
      <div className="ded-stepper-content">
        {steps[currentStep]?.content || 'No content available for this step.'}
      </div>
    </div>
  );
};

export default Stepper;
