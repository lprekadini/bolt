module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'bolt',
        user: process.env.DB_USER || 'bolt',
        password: process.env.DB_PASS || 'bolt',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './bolt.sqlite'
        }
    },
    authenticantion: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}