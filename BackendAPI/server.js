import app from './src/app.js';
import dotenv from 'dotenv';
import sequelize from './src/conf/database.js';
import Customer from './src/models/Customers.js';


dotenv.config();

const PORT = process.env.PORT

const startServer = async () => {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    await sequelize.sync({alter: true});
    console.log('All models were synchronized successfully.');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }) 

}

startServer();