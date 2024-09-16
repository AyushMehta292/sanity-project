export default {
    name:'projects',
    title:'Projects',
    type: 'document',
    fields:[
        {
            name:'id',
            title:'ID',
            type:'number'
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
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
    ]
}



