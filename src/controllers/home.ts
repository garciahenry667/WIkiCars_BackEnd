import pool from "../database";
import { Request, Response } from "express";

const homePage = async (req: Request, res:Response) => {
    
    try {
        // Execute the query to fetch cars
        const selectCarsQuery = "SELECT * FROM cars";
        const queryResult = await pool.query(selectCarsQuery);

        // Assuming queryResult.rows is an array of car objects from the database
        const cars = queryResult.rows; // Change this according to your database structure

        // Log the fetched cars
        console.log(cars);
        res.json(cars)
    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ error: "An error occurred while fetching cars" });
    } finally{
        pool.end
    }
}

export default homePage;


