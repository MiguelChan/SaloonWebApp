import React from 'react';
import {
  RenderResult,
  render,
} from '@testing-library/react';
import { AppAppBar } from '.';

describe('AppAppBar', () => {
  it('Should match snapshot', () => {
    const {
      container,
    } = render(<AppAppBar />);
    expect(container).toMatchSnapshot();
  });
});