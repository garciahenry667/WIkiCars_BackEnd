import { connection } from "../database/dbconexion";
import { DataTypes } from "sequelize";

import { cars } from "./cars";
import { categories } from "./categories";

export const user = connection.define("user",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})


//Creating relation betwen users and categories

user.hasMany(categories, {
    foreignKey: "userId",
    sourceKey: "id"
})

categories.belongsTo(user, {
    foreignKey: "userId",
    targetKey: "id"
})


//Creating the relation betwen users and cars
user.hasMany(cars, {
    foreignKey: "userId",
    sourceKey: "id"
})

cars.belongsTo(user, {
    foreignKey: "userId",
    targetKey: "id"
})

