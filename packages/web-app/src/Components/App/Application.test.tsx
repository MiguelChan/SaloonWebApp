import React from 'react';
import {
  render,
  RenderResult,
} from '@testing-library/react';
import { Application } from '.';

describe('Application', () => {
  it('Should render the Application', () => {
    const renderResult = setupComponent();
    expect(renderResult.container).toMatchSnapshot();
  });

  const setupComponent = (): RenderResult => {
    return render(<Application />);
  };

});