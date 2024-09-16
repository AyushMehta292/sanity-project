export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
            name:'id',
            title:'ID',
            type:'number'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Enable hotspot for image cropping
            },
        },
        {
            name:'description',
            title:'Description',
            type:'string',
            
        },
        
    ],
};