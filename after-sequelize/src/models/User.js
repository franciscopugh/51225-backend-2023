import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

export const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true
    }

}, {
    indexes: [
        {
            unique: true,
            fields: ['email']
        }
    ]
});