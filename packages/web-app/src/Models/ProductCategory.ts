import {
  ProductCategory as ProductCategoryBase,
} from '@mchanc/shared-library';

/**
 * Defines a Product Category.
 */
export interface ProductCategory extends ProductCategoryBase {
  width: string | number;
}