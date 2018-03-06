module.exports = {
    development: {
        username: "sa",
        password: "Ivan1234",
        database: "Ivan",
        host: "localhost",
        dialect: "mssql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },


        // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
        operatorsAliases: false
    },
    test: {
        dialect: "sqlite",
        storage: ":memory:"
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mssql',
    }
};