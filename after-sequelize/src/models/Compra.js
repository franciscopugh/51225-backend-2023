import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import { Product } from "./Producto.js";
import { User } from "./User.js";
export const Compra = sequelize.define("compra", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

});

//Claves foraneas

//Relacion uno a muchos (User - Compra) Un Usuario tiene asociadas varias compras, en tanto una compra solo tiene asociado un usuario
Compra.belongsTo(User, { foreingKey: 'idUser', source: "id" })
User.hasMany(Compra, { foreingKey: 'idUser', source: "id" })

Compra.belongsTo(Product, { foreingKey: 'idProd', source: "id" })
Product.hasMany(Compra, { foreingKey: 'idProd', source: "id" })