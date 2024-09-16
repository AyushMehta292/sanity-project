export default {
    name:'events',
    title:'Events',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'events',
            title:'Events',
            type:'array',
            of:[
                {
                    type:'object',
                    fields: [
                        { name: 'monthName', title: 'Month Name', type: 'string' },
                        { name: 'eventPointers', title: 'Event Pointers', type: 'array', of:[{type:'number'}] },
                        { name: 'thumbnail', title: 'Thumbnail', type: 'array', of:[{type:'string'}] },
                        { name: 'eventTitle', title: 'Event Title', type: 'string' },
                        { name: 'eventFrom', title: 'Event From', type: 'string' },
                        { name: 'eventTo', title: 'Event To', type: 'string' },
                        { name: 'collaborationWith', title: 'In Collaboration With', type: 'string' },
                      ],
                }
            ]
        },
    ]
}
