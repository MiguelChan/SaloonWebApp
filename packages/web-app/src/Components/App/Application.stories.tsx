import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import { Application } from './Application';

export default {
  title: 'Components/App/Application',
  component: Application,
} as Meta;

const Template: Story = (args) => <Application {...args} />;

export const Default = Template.bind({});