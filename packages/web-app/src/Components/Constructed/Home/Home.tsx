import { withRoot } from 'Components/Blocks';
import { 
  AppAppBar,
  AppFooter,
  ProductCategories,
  ProductCTA,
  ProductHero,
  ProductHowItWorks,
  ProductSmokingHero,
  ProductValues,
} from 'Components/Composites';
import { ProductCategory } from 'Models';
import * as React from 'react';
import { renderProductSteps, renderProductValues } from 'Utils/TestUtils';

const Index: React.FunctionComponent = () => {

  const productCategories: ProductCategory[] = [
    {
      title: 'Para todos los gustos y edades',
      imageUrl: 'https://source.unsplash.com/random',
      width: '24%',
    },
    {
      title: 'Estilos Unicos',
      imageUrl: 'https://source.unsplash.com/random',
      width: '40%',
    },
    {
      title: 'Y solamente para Ti',
      imageUrl: 'https://source.unsplash.com/random',
      width: '28%',
    },
  ];

  const backgroundImage = 
    'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

  const productValues = renderProductValues(9);
  const productSteps = renderProductSteps(3);

  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero backgroundImage={backgroundImage} />
      <ProductValues productValues={productValues}/>
      <ProductCategories productCategories={productCategories} />
      <ProductHowItWorks productSteps={productSteps}/>
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
};

export default withRoot(Index);