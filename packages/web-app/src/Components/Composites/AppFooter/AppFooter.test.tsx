import React from 'react';
import {
  render,
  RenderResult,
} from '@testing-library/react';
import AppFooter from './AppFooter';
import { ThemeProvider } from '@mui/styles';
import {
  theme,
} from 'Utils';

describe('AppFooter', () => {
  it('Should display the AppFooter', () => {
    const { container }: RenderResult = setupComponent();
    expect(container).toMatchSnapshot();
  });

  const setupComponent = () => {
    const Component = (
      <ThemeProvider theme={theme}>
        <AppFooter />
      </ThemeProvider>
    );

    return render(Component);
  }

});