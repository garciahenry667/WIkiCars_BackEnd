import {app, PORT} from "./app";
import "dotenv/config"


app.listen(
    PORT,
    () => console.log("Sever listening on port", PORT)
)