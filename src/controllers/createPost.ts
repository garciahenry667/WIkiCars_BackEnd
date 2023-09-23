import { Request, Response } from "express";
import pool from "../database";
import jwt from "jsonwebtoken";


export const carsHandler = async (req : Request, res : Response) => {
    const {name, description, horsePower, maxSpeed, zeroToHundred, categorie, creator /* Needs to eliminate creator */} = req.body;
    
    
    try {
        // Verify the JWT token and extract user information
    /* const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decodedToken = jwt.verify(token, 'your_secret_key') as { userId: string };
    const creatorId = decodedToken.userId;
 */
        //Getting info abaut categorie to finding the ID to asing
        const getCategorie = await pool.query("Select  creatorId from categories where categorieName = $1", [categorie]);

        if (getCategorie.rows.length === 0) {
            return res.status(400).json({ message: 'Category not found' });
        }
        
        const categoryId = getCategorie.rows[0].categoryId;

        //Getting date
        const date = new Date

        //Inserting info about the car
        const carInfo = await pool.query("insert into cars (carName, carDescription, horsepower, maxSpeed, zeroToHundred, creationDate, categoryId, creatorId) values ($1, $2, $3, $4, $5, $6, $7, $8)", [name, description, horsePower, maxSpeed, zeroToHundred, date, categoryId, creator])

        const getCar = await pool.query("Select * from cars")
        res.status(201).json(getCar)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}



export const catergorieHandler = async () => {

}