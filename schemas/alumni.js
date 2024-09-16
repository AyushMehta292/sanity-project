export default {
    name:'alumni',
    title:'Alumni',
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
            type:'string',
            
        },
        {
            name:'occupation',
            title:'Occupation',
            type:'string',
            
        },
        {
            name:'testimonial',
            title:'Testimonial',
            type:'string',
            
        },
        {
            name:'linkedin',
            title:'LinkedIn',
            type:'string',
            
        },
    ]
}
