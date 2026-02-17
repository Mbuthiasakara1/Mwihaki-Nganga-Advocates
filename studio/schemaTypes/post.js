// studio/schemaTypes/post.js

export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This becomes the URL of the post — click Generate',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Dispute Resolution',       value: 'Dispute Resolution' },
          { title: 'Banking & Finance',         value: 'Banking & Finance' },
          { title: 'Real Estate',               value: 'Real Estate' },
          { title: 'Corporate Law',             value: 'Corporate Law' },
          { title: 'Family Law',                value: 'Family Law' },
          { title: 'Employment Law',            value: 'Employment Law' },
          { title: 'Immigration Law',           value: 'Immigration Law' },
          { title: 'Constitutional Law',        value: 'Constitutional Law' },
          { title: 'Firm News',                 value: 'Firm News' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the blog listing page (max 200 characters)',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      options: {
        list: [
          { title: 'Mwihaki Nganga',    value: 'Mwihaki Nganga' },
          { title: 'Masea Monari', value: 'Masea Monari' },
          { title: 'Humeira Salim',       value: 'Humeira Salim' },
          { title: 'Salma Nechesa', value: 'Salma Nechesa' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal',      value: 'normal' },
            { title: 'Heading 2',   value: 'h2' },
            { title: 'Heading 3',   value: 'h3' },
            { title: 'Quote',       value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold',      value: 'strong' },
              { title: 'Italic',    value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title:    'title',
      author:   'author',
      media:    'coverImage',
      category: 'category',
    },
    prepare({ title, author, media, category }) {
      return {
        title,
        subtitle: `${category} — ${author}`,
        media,
      };
    },
  },
};