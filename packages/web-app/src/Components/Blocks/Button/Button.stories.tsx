import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Blocks/Button',
  component: Button,
} as Meta;

const Template: Story = () => <Button />;

export const Default = Template.bind({});