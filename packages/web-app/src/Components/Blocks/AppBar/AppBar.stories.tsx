import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import AppBar from './AppBar';

export default {
  title: 'Components/Blocks/AppBar',
  component: AppBar,
} as Meta;

const Template: Story = () => <AppBar />;

export const Default = Template.bind({});