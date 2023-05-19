import Sequelize from "sequelize";

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USERADMIN,
    process.env.PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)


export default sequelize