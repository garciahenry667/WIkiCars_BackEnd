import { connection } from "../database/dbconexion";
import { DataTypes } from "sequelize";

export const cars = connection.define("cars", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    year: {
        type: DataTypes.STRING
    },
    model: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})