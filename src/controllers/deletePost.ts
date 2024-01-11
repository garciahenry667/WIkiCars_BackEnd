import { Request, Response } from "express";
import pool from "../database";

export const deleteCarsHandler = async (req : Request, res : Response) => {
    const { carID }  = req.body

    try {
        const deleteCars = await pool.query("Update cars set isDeleted  = true");

        const verifyIfcarWasDeleted  = await pool.query("Select isDeleted from cars where id = $1", [carID])

        if(verifyIfcarWasDeleted){
            res.status(201).json({mesaje : 'Car suscefuly deleted'})
        }

        res.status(400).json({mesaje : 'Error deleting the car'})
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategoriesHandler = async (req : Request, res : Response) => {
    const { categorieId } = req.body

    try {
        const deleteCategorie = await pool.query("Delete * from categories where categorieId = $1", [categorieId]);

        const verifyIfCategorieWasDeleted = await pool.query("Select * from categories where id = $1", [categorieId])

        if(verifyIfCategorieWasDeleted.rows.length == 0){
            res.status(201).json({mesaje : 'Categorie sucesfuly deleted'})
        }

        const show = deleteCarsHandler
    } catch (error) {
        console.log(error);
        
    }
}