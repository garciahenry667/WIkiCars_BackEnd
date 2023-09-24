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

        //parsing the value if the car is deleted
        const isDeleted = false

        //Inserting info about the car
        const carInfo = await pool.query("insert into cars (carName, carDescription, horsepower, maxSpeed, zeroToHundred, creationDate, isDeleted, categoryId, creatorId) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [name, description, horsePower, maxSpeed, zeroToHundred, date, isDeleted, categoryId, creator])

        //Here is just for the develope
        const getCar = await pool.query("Select * from cars")
        res.status(201).json(getCar)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}



export const catergorieHandler = async (req : Request, res : Response) => {
    const {categorieName, creator} = req.body

    try {
        
        //verify if category already exists
        const verifyCategori = await pool.query("Select * from categories where categorieName = $1", [categorieName])

        // Verify the JWT token and extract user information
    /* const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decodedToken = jwt.verify(token, 'your_secret_key') as { userId: string };
    const creatorId = decodedToken.userId;
 */
        if(verifyCategori.rows.length != 0){
            return res.status(400).json({ message: 'Category already exists' });
        }

        //parsing the value if the categorie is deleted
        const isDeleted = false
        
        //Creating the categorie
        const createCategorie = pool.query("Insert into categories (categorieName, isDeleted, creatorId) values ($1, $2, $3)", [categorieName, isDeleted, creator/* needs to change for the creator ID from the jwt */])

        //Here is just for the develope
        const verify = await pool.query("Select * from categories")
        res.status(201).json(verify)

    } catch (err) {
        console.log(err);
    }

}