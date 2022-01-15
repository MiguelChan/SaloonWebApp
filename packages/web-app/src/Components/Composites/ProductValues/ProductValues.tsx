import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from 'Components/Blocks';
import { ProductValue } from '@mchanc/shared-library';
import productCurvyLines from 'Images/productCurvyLines.png';

export interface ProductValuesProps {
  productValues: ProductValue[];
}

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const ProductValues: React.FunctionComponent<ProductValuesProps> = ({
  productValues,
}) => {

  const currentTheme = useTheme();

  const MAX_NUMBER_OF_ELEMENTS_PER_ROW = 3;

  const renderProductValues = (): React.ReactNode => {
    const maxNumberOfRows = Math.ceil(productValues.length / MAX_NUMBER_OF_ELEMENTS_PER_ROW);
    const gridsToDisplay = [];
    for (let i = 0; i < maxNumberOfRows; i++) {
      const currentRows: any[] = [];
      for (let j = 0; j < MAX_NUMBER_OF_ELEMENTS_PER_ROW; j++) {
        const index: number = i * MAX_NUMBER_OF_ELEMENTS_PER_ROW + j;
        const currentProductValue = productValues[index];
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

  const renderGridSection = (productValue: ProductValue, containerId: number): React.ReactNode => (
    <Grid item xs={12} md={4} key={`grid-section-${containerId}`}>
      <Box sx={item}>
        <Box
          component="img"
          src={productValue.imageUrl}
          alt={productValue.altTitle}
          width='100%'
          height='auto'
          sx={{ height: 'auto' }}
        />
        <Typography variant="h6" sx={{ my: 5 }}>
          {productValue.title}
        </Typography>
        <Typography variant="h5">
          {productValue.description}
        </Typography>
      </Box>
    </Grid>
  );

  const renderGridContainer = (children: React.ReactNode, containerId: number): React.ReactNode => (
    <Grid 
      container 
      spacing={5} 
      sx={{marginBottom: currentTheme.spacing(5)}}
      key={`row-id-${containerId}`}
    >
      {children}
    </Grid>
  );

  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src={productCurvyLines}
          alt="curvy lines"
          height='100%'
          width='100%'
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        {renderProductValues()}
      </Container>
    </Box>
  );
}

export default ProductValues;