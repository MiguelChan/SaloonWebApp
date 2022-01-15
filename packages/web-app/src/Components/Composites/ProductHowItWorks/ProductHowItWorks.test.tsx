import React from 'react';
import {
  render,
} from '@testing-library/react';
import { ProductHowItWorks, ProductHowItWorksProps } from '.';
import { ThemeProvider } from '@mui/styles';
import { theme } from 'Utils';
import { renderProductSteps } from 'Utils/TestUtils';

describe('ProductHowItWorks', () => {

  it('Should match the Snapshot', () => {
    const props: ProductHowItWorksProps = {
      productSteps: renderProductSteps(3),
    };

    const {
      container,
    } = renderComponent(props);

    expect(container).toMatchSnapshot();
  });

  const renderComponent = (props: ProductHowItWorksProps) => {
    const Component = (
      <ThemeProvider theme={theme}>
        <ProductHowItWorks {...props} />
      </ThemeProvider>
    );

    return render(Component);
  };
});