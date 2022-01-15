import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import ProductCTA from './ProductCTA';

export default {
  title: 'Components/Composites/ProductCTA',
  component: ProductCTA,
} as Meta;

const Template: Story = () => <ProductCTA />;

export const Default = Template.bind(this);