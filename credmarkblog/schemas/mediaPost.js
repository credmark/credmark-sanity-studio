export default {
    name: 'mediaPost',
    title: 'Media Post',
    type: 'document',
    fields: [
      {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'mediaPostCategory'}]
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },
      {
        name: 'url',
        title: 'URL',
        description: 'Link to the article',
        type: 'url',
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'date',
        options: {
          dateFormat: 'MMMM Do, Y',
          calendarTodayLabel: 'Today'
        }
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            type: 'text',
            name: 'alt',
            title: 'alt',
          }
        ]
      },
      {
        name: 'body',
        title: 'Body text',
        description: 'Optional body text that can be used to put a short blurb', 
        type: 'text',
        validation: Rule => Rule.max(250)
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'subtitle',
        media: 'mainImage',
      },
    },
  }
  