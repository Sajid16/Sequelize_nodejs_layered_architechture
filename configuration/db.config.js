console.log(process.env.min);
class DatabaseConnection {
    static dbCon = {
        HOST: process.env.HOST,
        PORT: parseInt(process.env.PORT),
        USER: process.env.USER,
        PASSWORD: process.env.PASSWORD,
        DB: process.env.DB,
        dialect: process.env.dialect,
        max: parseInt(process.env.max),
        min: parseInt(process.env.min),
        acquire: parseInt(process.env.acquire),
        idle: parseInt(process.env.idle)
    }
}

module.exports = {
    DatabaseConnection
}