import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import { AppFooter } from '.';

export default {
  title: 'Components/Composites/AppFoter',
  component: AppFooter,
} as Meta;

const Template: Story = () => <AppFooter />;

export const Default = Template.bind(this);