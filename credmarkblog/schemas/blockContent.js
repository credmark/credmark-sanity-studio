/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

 import React from 'react'

 const BorderBoxStyle = props => (
  <span style={{borderSizing: 'border-box', border: '1px solid rgb(226, 226, 226)', margin: '0.5rem 0px 1.5rem;'}}>{props.children}</span>
)



export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
        {
          title: 'Borderbox',
          value: 'border-box',
          blockEditor: {
            render: BorderBoxStyle
          }
        },
      ],
      lists: [
      {title: 'Bullet', value: 'bullet'}, 
      {title: 'Numbered', value: 'number'},
    ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'alt',
          options:{
            isHighlighted: true
          }
        }
      ],
      options: {
        hotspot: true
      },
    },
    {
      type: 'code',
      options: {
        withFilename: true
      }
    },
  ],
}
