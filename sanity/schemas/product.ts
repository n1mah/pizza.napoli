export default {
    name: 'product',
    type: 'document',
    title: 'product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'price',
            type: 'string',
            title: 'price'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'slug',
            options:{
                source:'name'
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'details',
            type: 'array',
            title: 'Details',
            of:[
                {
                    type: "block"
                },
            ]
        }
    ]
}