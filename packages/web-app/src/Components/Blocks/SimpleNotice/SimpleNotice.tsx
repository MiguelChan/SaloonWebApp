import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

export interface SimpleNoticeProps {
  noticeTitle: string;
  noticeBody: string;
}

/**
 * Defines a Simple Notice to be displayed in the application.
 * 
 * @param props The properties of the SimpleNotice. 
 * @returns The SimpleNotice.
 */
export const SimpleNotice: React.FunctionComponent<SimpleNoticeProps> = ({
  noticeBody,
  noticeTitle,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{fontSize: 14}} color='text.secondary' gutterBottom>
          {noticeTitle}
        </Typography>
        <Typography variant='h5' component='div'>
          {noticeBody}
        </Typography>
      </CardContent>
    </Card>
  );
};