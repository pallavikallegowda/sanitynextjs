import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('content')
    .items([
      S.listItem()
        .title('Advertisement')
        .child(
          S.document().schemaType('advertisement').documentId('advertisement')
        ),
      S.listItem()
        .title('Home Page')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['homepage', 'advertisement'].includes(listItem.getId())
      )
    ])
