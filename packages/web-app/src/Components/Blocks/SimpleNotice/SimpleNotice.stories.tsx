import React from 'react';
import {
  Meta,
  Story,
} from '@storybook/react';
import { SimpleNotice, SimpleNoticeProps } from '.';

export default {
  title: 'Components/Blocks/SimpleNotice',
  component: SimpleNotice,
} as Meta;

const Template: Story<SimpleNoticeProps> = (args) => <SimpleNotice {...args} />;

export const Default = Template.bind({});
Default.args = {
  noticeBody: 'This is the Notice Body',
  noticeTitle: 'This is the Notice Title',
};