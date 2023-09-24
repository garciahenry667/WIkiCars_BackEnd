import { Request, Response } from 'express';
import pool from '../database';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


// Login user
export const signinHandler = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    try {
      const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  
      if (user.rows.length === 0) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isValidPassword = bcrypt.compareSync(password, user.rows[0].password);
  
      if (!isValidPassword) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate and return JWT token
      const token = jwt.sign({ email: user.rows[0].email }, 'your_secret_key');
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  // Create user
  export const signupHandler = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    
    let role = 'user';

    try {
      // Check if user already exists
      const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  
      if (userExists.rows.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash password
      const hashedPassword = bcrypt.hashSync(password, 10);
  
      // Insert user into database
      await pool.query('INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)', [name, email, hashedPassword, role]);
  
      res.status(201).json({ message: 'User created' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };