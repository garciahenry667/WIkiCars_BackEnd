import jwt from "jsonwebtoken";
import "dotenv/config";

const secretKey = process.env.SECRETKEY;

interface User {
    id: number;
    username: string;
    email: string;
}

function generateToken(user: User): string {
    return jwt.sign(user, secretKey, { expiresIn: '1h' });
}

export default generateToken;

