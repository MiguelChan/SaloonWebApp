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
import * as React from 'react';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);