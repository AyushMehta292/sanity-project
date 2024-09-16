import { defineType, defineField } from "sanity";

export default {
    name:'achievements',
    title:'Achievements',
    type: 'document',
    fields:[
        {
            name:'id',
            title:'ID',
            type:'number'
        },
        {
            name:'achievement',
            title:'Achievement',
            type:'string',
            
        },
    ]
}