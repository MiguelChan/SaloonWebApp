import React from 'react';
import {
  render,
} from '@testing-library/react';
import ProductSmokingHero from './ProductSmokingHero';
import { ThemeProvider } from '@mui/styles';
import { theme } from 'Utils';

describe('ProductSmokingHero', () => {

  it('Should match snapshot', () => {
    const {
      container,
    } = setupComponent();

    expect(container).toMatchSnapshot();
  });

  const setupComponent = () => {
    const Component = (
      <ThemeProvider theme={theme}>
        <ProductSmokingHero />
      </ThemeProvider>
    );

    return render(Component);
  };
});