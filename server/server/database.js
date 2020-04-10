import AWS, { DynamoDB } from "aws-sdk";
import BCrypt from 'bcrypt';
import { 
    usersTableCreate, 
    usersAdd
} from './database/schemas/users';


const allParams = {
    usersTableCreate,
    usersAdd,
}

const saltRounds = 10;

class DatabaseInterface {
    constructor() {
        AWS.config.update({region: 'us-west-2'});
        this.db = new DynamoDB();
    }

    createTable = () => {
        this.db.createTable(allParams.usersTableCreate, (err, data) => {
            if (err) {
                if (err.name === 'ResourceInUseException') {
                    console.log('Table already exists.')
                } else {
                    console.log("Error creating table: ", err);
                }
            } else {
                console.log('Table Created', data);
            }
        })
    }

    addUser = (username, password) => {

        let hash = BCrypt.hashSync(password, saltRounds);
        let params = {...allParams.usersAdd};
        let userId = Math.random().toString(36).substr(2, 9);

        params.Item.USER_ID.S = userId;
        params.Item.USER_NAME.S = username;
        params.Item.HASH.S = hash;

        console.log(params);

        this.db.putItem(params, (err, data) => {
            if (err) {
                console.log('Error inserting user: ', err);
            } else {
                console.log('Successfully added `' + username + '` to database with user_id `' + userId + '`', data);
            }
        })
    }
}

export default DatabaseInterface