import React from 'react';
import {
  Story,
  Meta,
} from '@storybook/react';
import AppForm from './AppForm';

export default {
  title: 'Components/Composites/AppForm',
  component: AppForm,
} as Meta;

const Template: Story = () => <AppForm />;

export const Default = Template.bind(this);