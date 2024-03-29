import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { AppBar, Toolbar } from 'Components/Blocks';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="#"
            sx={{ fontSize: 24 }}
          >
            {'Lashair by Samy'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }} visibility='hidden'>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#"
              sx={rightLink}
            >
              {'Iniciar Sesion'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="#"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Registrarse'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;