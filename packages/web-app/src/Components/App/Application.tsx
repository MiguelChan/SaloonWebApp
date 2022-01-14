import { Paper } from '@mui/material';
import { SimpleNotice } from 'Components/Blocks';
import React from 'react';

export const Application: React.FunctionComponent = () => {
  return (
    <Paper>
      <SimpleNotice 
        noticeBody='Estamos actualmente trabajando en hacer esta pagina'
        noticeTitle='Trabajando arduamente'
      />
    </Paper>
  );
};