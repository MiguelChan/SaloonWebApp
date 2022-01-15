import { ProductStep, ProductValue } from "@mchanc/shared-library";

export const renderProductValues = (numberOfElements: number): ProductValue[] => {
  const productValues: ProductValue[] = [];
  for (let i = 0; i < numberOfElements; i++) {
    const productValue = {
      imageUrl: 'https://source.unsplash.com/random',
      altTitle: `Test + ${i}`,
      title: `Another Title: ${i}`,
      description: `This is some description for ${i}`,
    };
    productValues.push(productValue);
  }
  return productValues;
}

export const renderProductSteps = (numberOfElements: number): ProductStep[] => {
  const productSteps: ProductStep[] = [];
  for (let i = 0; i < numberOfElements; i++) {
    const productStep: ProductStep = {
      stepImage: 'https://source.unsplash.com/random',
      stepNumber: i,
      stepDescription: `This is some description for ${i}`,
    };
    productSteps.push(productStep);
  }
  return productSteps;
}