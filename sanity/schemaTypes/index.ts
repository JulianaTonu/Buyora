import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { addressType } from './addressType'
import { blockContentType } from './blockContentType'
import { blogType } from './blogType'
import { brandType } from './brandType'
import { orderType } from './orderType'
import { productType } from './productType'
import { authorType } from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType,
    authorType,
    blockContentType,
    blogType,
     brandType,
     orderType,
     productType,
     addressType
    ],
}
