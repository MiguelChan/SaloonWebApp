import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import AppAppBar from './AppAppBar';

export default {
  title: 'Components/Composites/AppAppBar',
  component: AppAppBar,
} as Meta;

const Template: Story = () => <AppAppBar />

export const Default = Template.bind({});