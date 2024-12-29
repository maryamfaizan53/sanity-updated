import { type SchemaTypeDefinition } from 'sanity'
import {post} from '../schemas/post'
import {author} from '../schemas/author'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,author],
}
