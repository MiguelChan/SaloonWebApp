import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import ProductSmokingHero from './ProductSmokingHero';

export default {
  title: 'Components/Composites/ProductSmokingHero',
  component: ProductSmokingHero,
} as Meta;

const Template: Story = () => <ProductSmokingHero />;

export const Default = Template.bind(this);