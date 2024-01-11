import { Sequelize } from "sequelize";

export const connection = new Sequelize("postgres", "postgres", "12345678", {
    host: "localhost",
    dialect: "postgres"
})


