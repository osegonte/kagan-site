export const videosSchema = {
  name: 'videos',
  title: 'Video Showcase',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured Video',
      type: 'object',
      fields: [
        { name: 'videoId', title: 'YouTube Video ID', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
      ],
    },
    {
      name: 'shorts',
      title: 'Vertical Shorts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'videoId', title: 'YouTube Video ID', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'landscape',
      title: 'Landscape Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'videoId', title: 'YouTube Video ID', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
          ],
        },
      ],
    },
  ],
}