import { MongoClient } from "mongodb";
import { MONGO_URL } from "../utils/envs/Daatbase.env";

const client = new MongoClient(MONGO_URL);

export async function start_mongo(): Promise<MongoClient | null>{
    try {
        const client_mongo = await client.connect()
        console.log('conectando a mongo...', client_mongo.connect.name)
        return client_mongo
    } catch (error) {
        return null
    }
}
export default client.db()