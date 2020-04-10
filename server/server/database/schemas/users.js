const usersTableCreate = {
    AttributeDefinitions: [
        {
            AttributeName: 'USER_ID',
            AttributeType: 'S'
        },
        {
            AttributeName: 'USER_NAME',
            AttributeType: 'S'
        },
    ],
    KeySchema: [
        {
            AttributeName: 'USER_ID',
            KeyType: 'HASH'
        },
        {
            AttributeName: 'USER_NAME',
            KeyType: 'RANGE'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
    TableName: 'USERS',
    StreamSpecification: {
        StreamEnabled: false
    }
}

const usersAdd = {
    TableName: 'USERS',
    Item: {
        USER_ID: {
            S: ''
        },
        USER_NAME: {
            S: ''
        },
        HASH: {
            S: ''
        }
    }
}

export { usersTableCreate, usersAdd };