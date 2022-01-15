import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Button, Typography } from 'Components/Blocks';
import { ProductStep } from '@mchanc/shared-library';
import productCurvyLines from 'Images/productCurvyLines.png';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

export interface ProductHowItWorksProps {
  productSteps: ProductStep[];
}

const ProductHowItWorks: React.FunctionComponent<ProductHowItWorksProps> = ({
  productSteps,
}) => {

  const currentTheme = useTheme();

  const MAX_NUMBER_OF_ELEMENTS_PER_ROW = 3;

  const renderProductSteps = (): React.ReactNode => {
    const maxNumberOfRows = Math.ceil(productSteps.length / MAX_NUMBER_OF_ELEMENTS_PER_ROW);
    const gridsToDisplay = [];
    for (let i = 0; i < maxNumberOfRows; i++) {
      const currentRows: any[] = [];
      for (let j = 0; j < MAX_NUMBER_OF_ELEMENTS_PER_ROW; j++) {
        const index: number = i * MAX_NUMBER_OF_ELEMENTS_PER_ROW + j;
        const currentProductValue = productSteps[index];
        const gridSection = renderGridSection(currentProductValue, index);
        currentRows.push(gridSection);
      }
      const gridSection = renderGridContainer(currentRows, i + 1);
      gridsToDisplay.push(gridSection);
    }

    return (
      <Grid container>
        {gridsToDisplay}
      </Grid>
    );
  }

  const renderGridSection = (productStep: ProductStep, containerId: number): React.ReactNode => (
    <Grid item xs={12} md={4} key={`how-it-works-section-${containerId}`}>
      <Box sx={item}>
        <Box sx={number}>{productStep.stepNumber}.</Box>
          <Box
            component="img"
            src={productStep.stepImage}
            alt={productStep.stepDescription}
            height='auto'
            width='100%'
            sx={image}
          />
          <Typography variant="h5" align="center">
            {productStep.stepDescription}
          </Typography>
      </Box>
    </Grid>
  );

  const renderGridContainer = (children: React.ReactNode, containerId: number): React.ReactNode => (
    <Grid 
      container 
      spacing={5} 
      sx={{marginBottom: currentTheme.spacing(5)}}
      key={`how-it-works-row-id-${containerId}`}
    >
      {children}
    </Grid>
  );

  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={productCurvyLines}
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          {renderProductSteps()}
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 8, visibility: 'hidden' }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;