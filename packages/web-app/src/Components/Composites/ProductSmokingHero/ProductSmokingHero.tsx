import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Typography } from 'Components/Blocks';
import helpWanted from 'Images/helpWanted.svg';

const ProductSmokingHero: React.FunctionComponent = () => {

  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
        target='_blank'
        component='a'
        href='https://wa.me/5219996035008'
      >
        <Typography variant="h4" component="span">
          Tienes alguna duda? Necesitas ayuda?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Estamos aquí para ayudarte, !Contáctanos!
      </Typography>
      <Box
        component="img"
        src={helpWanted}
        alt="buoy"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default ProductSmokingHero;