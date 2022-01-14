import React from 'react';
import ReactDOM from 'react-dom';
import {
  Application,
} from 'Components/App';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const ReactApplication: React.FunctionComponent = () => {

  const currentTheme = createTheme({});

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Application />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

ReactDOM.render(
  <ReactApplication />, 
  document.getElementById('root')
);