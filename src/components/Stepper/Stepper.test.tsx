import { render, screen } from '@testing-library/react';
import React from 'react';

import Step from './Step';
import Stepper from './Stepper';
import { StepperOrientations } from './Stepper.enums';

describe('Stepper', () => {
  it('should render only "Step" components as children', () => {
    render(
      <Stepper data-testid="stepper">
        <Step label="Step 1" />
        <button type="button">button element</button>
        <div>Div element</div>
        {false}
        text
      </Stepper>,
    );

    expect(screen.getByTestId('stepper').children).toHaveLength(1);
  });

  it('should have clickable only done steps with callback', () => {
    render(
      <Stepper activeStep={2} data-testid="stepper">
        {/* done, without callback */}
        <Step label="Step" />
        {/* done, clickable  */}
        <Step label="Step" onStepClick={jest.fn} />
        {/* active, non-clickable  */}
        <Step label="Step" onStepClick={jest.fn} />
        {/* pending, non-clickable */}
        <Step label="Step" onStepClick={jest.fn} />
      </Stepper>,
    );

    expect(screen.getAllByRole('button').length).toBe(1);
  });

  it('should not render "StepContent" in "horizontal" orientation', () => {
    render(
      <Stepper orientation={StepperOrientations.horizontal}>
        <Step label="Step 1">
          <div>Step content</div>
        </Step>
        <Step label="Step 2">
          <div>Step content</div>
        </Step>
      </Stepper>,
    );

    expect(screen.queryByTestId('step-content')).not.toBeInTheDocument();
  });
});
