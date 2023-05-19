import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

export const Product = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

}, {
    indexes: [
        {
            unique: true,
            fields: ['precio']
        }
    ]
});