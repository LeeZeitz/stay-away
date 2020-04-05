import DynamoDb from "aws-sdk";

class DatabaseInterface {
    constructor() {
        this.db = new DynamoDb();
    }
}

export default DatabaseInterface