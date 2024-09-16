export default {
    name:'sponsors',
    title:'Sponsors',
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
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
    ]
}