import { app } from "./app.js";
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

try {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening on Port ${process.env.PORT || 8000}`);
    })
} catch (error) {
    console.error("Error in listening to the server", error.message);
    process.exit(1);
}