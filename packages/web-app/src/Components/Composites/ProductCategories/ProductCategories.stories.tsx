import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import { ProductCategories, ProductCategoriesProps } from '.';
import { ProductCategory } from 'Models';

export default {
  title: 'Components/Composites/ProductCategories',
  component: ProductCategories,
} as Meta;

const Template: Story<ProductCategoriesProps> = (args) => <ProductCategories {...args} />;

const sampleProduct1: ProductCategory = {
  title: 'For all tastes and all desires',
  imageUrl: 'https://source.unsplash.com/random',
  width: '24%',
};

const sampleProduct2: ProductCategory = {
  title: 'And all desires',
  imageUrl: 'https://source.unsplash.com/random',
  width: '40%',
};

const sampleProduct3: ProductCategory = {
  title: 'And just for you',
  imageUrl: 'https://source.unsplash.com/random',
  width: '28%',
};

export const Default = Template.bind(this);
Default.args = {
  productCategories: [
    sampleProduct1,
    sampleProduct2,
    sampleProduct3,
  ],
};