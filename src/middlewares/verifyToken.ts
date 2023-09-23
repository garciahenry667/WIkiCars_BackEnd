import { Router, Request, Response } from 'express';
import jwt, { decode } from 'jsonwebtoken';

const router = Router();

function verifyToken(req: Request, res: Response, next: any) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  console.log(token);
  
  jwt.verify(token, 'your_secret_key', (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  });



}

export default verifyToken;
