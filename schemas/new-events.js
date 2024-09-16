export default {
  name: 'newEvents',
  title: 'New Events',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'months',
      title: 'Months',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'month',
          fields: [
            {
              name: 'name',
              title: 'Month Name',
              type: 'string',
            },
            {
              name: 'events',
              title: 'Events in the month',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'event',
                  fields: [
                    {
                      name: 'date',
                      title: 'Date',
                      type: 'number',
                    },
                    {
                      name: 'eventName',
                      title: 'Event Name',
                      type: 'string',
                    },
                    {
                      name: 'detail',
                      title: 'Detail',
                      type: 'text',
                    },
                    {
                      name: 'images',
                      title: 'Images',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          name: 'event',
                          fields: [
                            {
                              name: 'image',
                              title: 'Image',
                              type: 'image',
                            },
                            {
                              name: 'imageCaption',
                              title: 'Image Caption',
                              type: 'string',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: 'collaborationWith',
                      title: 'In Collaboration With',
                      type: 'string',
                    },
                    {
                      name: 'eventFrom',
                      title: 'Event From',
                      type: 'string',
                    },
                    {
                      name: 'eventTo',
                      title: 'Event To',
                      type: 'string',
                    },
                    {
                      name: 'highlights',
                      title: 'Highlights',
                      type: 'text',
                    }
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
