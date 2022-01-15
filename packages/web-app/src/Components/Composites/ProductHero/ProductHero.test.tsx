import React from 'react';
import {
  render,
  RenderResult,
} from '@testing-library/react';
import { ProductHero, ProductHeroProps } from '.';
import { ThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import { theme } from 'Utils';

describe('ProductHero', () => {
  it('Should match the Snapshot', () => {
    const backgroundImage = 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';
    const props: ProductHeroProps = {
      backgroundImage,
    }

    const {
      container,
    } = setupComponent(props);

    expect(container).toMatchSnapshot();
  });

  const setupComponent = (props: ProductHeroProps): RenderResult => {
    const Component = (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProductHero {...props} />
      </ThemeProvider>
    );

    return render(Component);
  };
});