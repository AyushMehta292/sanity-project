export default {
    name:'members',
    title:'Members',
    type: 'document',
    fields:[
        {
            name:'id',
            title:'ID',
            type:'number',
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot: true,
            }
            
        },
        {
            name:'name',
            title:'Name',
            type:'string',
            
        },
        {
            name:'por',
            title:'POR',
            type:'string',
            
        },
        {
            name:'linkedin',
            title:'LinkedIn',
            type:'string',
            
        },
        {
            name:'gmail',
            title:'Gmail',
            type:'string',
            
        },
    ]
}
