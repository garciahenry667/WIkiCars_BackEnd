import {app, PORT} from "./app";
import "dotenv/config"
import { connection } from "./database/dbconexion";

import './models/user'
import './models/categories'
import './models/cars'

const main = async () => {
    
    try {
        await connection.authenticate();
        await connection.sync({force: true})
        console.log('Connection has been established successfully.');
        app.listen(
            PORT,
            () => console.log("Sever listening on port: ", PORT)
        )
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
}

main();