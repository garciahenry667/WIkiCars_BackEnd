import { connection } from "../database/dbconexion";
import { DataTypes } from "sequelize";

import { cars } from "./cars";

export const categories = connection.define("categories", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})


categories.hasMany(cars, {
    foreignKey: "categorieId",
    sourceKey: "id"
})

cars.belongsTo(categories, {
    foreignKey: "categorieId",
    targetKey: "id"
})