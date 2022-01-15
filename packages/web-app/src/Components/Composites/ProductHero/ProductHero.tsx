import { Typography, Button } from 'Components/Blocks';
import * as React from 'react';
import { ProductHeroLayout } from 'Components/Composites';

export interface ProductHeroProps {
  backgroundImage: string;
}

/**
 * Defines the ProductHero Component. Within this component we can explain a little bit more of the Services
 * offered by the Saloon.
 * 
 * @returns {JSX.Element} The ProductHero Component.
 */
const ProductHero: React.FunctionComponent<ProductHeroProps> = ({
  backgroundImage,
}) => {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Lleva tu belleza aun mas lejos
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Disfruta de nuestros atractivos servicios
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200, visibility: 'hidden' }}
      >
        Registrarse
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Descubre la experiencia con Samy
      </Typography>
    </ProductHeroLayout>
  );
}

export default ProductHero;