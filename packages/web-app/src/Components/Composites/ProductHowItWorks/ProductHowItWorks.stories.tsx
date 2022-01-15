import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import ProductHowItWorks, { ProductHowItWorksProps } from './ProductHowItWorks';
import { renderProductSteps } from 'Utils/TestUtils';

export default {
  title: 'Components/Composites/ProductHowItWorks',
  component: ProductHowItWorks,
} as Meta;

const Template: Story<ProductHowItWorksProps> = (args) => <ProductHowItWorks {...args} />;

export const Default = Template.bind(this);
Default.args = {
  productSteps: renderProductSteps(9),
}