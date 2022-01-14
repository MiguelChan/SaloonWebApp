import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import Home from './Home';

export default {
  title: 'Components/Constructed/Home',
  component: Home,
} as Meta;

const Template: Story = () => <Home />;

export const Default = Template.bind({});