import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import ProductValues, { ProductValuesProps } from './ProductValues';
import { renderProductValues } from 'Utils/TestUtils';

export default {
  title: 'Components/Composites/ProductValues',
  component: ProductValues,
} as Meta;

const Template: Story<ProductValuesProps> = (args) => <ProductValues {...args} />;

export const Default = Template.bind(this);
Default.args = {
  productValues: renderProductValues(9),
};