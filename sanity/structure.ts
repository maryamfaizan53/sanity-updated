import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())

    ///last wale done nhi add kro naa..samja nai ... 2 last wale variable add nhi kro deploy me..
// han wait kro krta hoo