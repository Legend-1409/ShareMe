// User database schema


export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string'
        },
        {
            name: 'userImage',
            title: 'UserImage',
            type: 'string'
        }
    ]
}