import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import ProductHero, { ProductHeroProps } from './ProductHero';

export default {
  title: 'Components/Composites/ProductHero',
  component: ProductHero,
} as Meta;

const Template: Story<ProductHeroProps> = (args) => <ProductHero {...args} />;

const backgroundImage = 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

export const Default = Template.bind(this);
Default.args = {
  backgroundImage,
};