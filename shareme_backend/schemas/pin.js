// Pin (Post) schema 

export default {
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'about',
            title: 'About',
            type: 'string'
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'url'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                // responsible for dynamic adjustment of images for various aspect ratio
                hotspot: true
            }
        },
        {
            name: 'userID',
            title: 'UserID',
            type: 'string',
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'save',
            title: 'Save',
            type: 'array',
            // it will be an array of type save
            of: [{ type: 'save'}]
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            // it will be an array of type comment
            of: [{ type: 'comment'}]
        }
    ]
}