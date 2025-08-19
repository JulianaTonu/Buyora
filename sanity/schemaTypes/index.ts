import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { addressType } from './addressType'
import { blockContentType } from './blockContentType'
import { blogType } from './blogType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType,
    // authorType,
    blockContentType,
    blogType,
    //  brandType,
    //  orderType,
    //  productType,
     addressType
    ],
}
