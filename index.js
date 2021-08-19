import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { environment } from './src/config/config.js';
import './src/config/database.js';
import StudentRoute from './src/routes/Student.js';
import ActaRoute from './src/routes/Acta.js';
const app = express();

//Settings
app.set('port', process.env.PORT || environment.port);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Home page
app.get('/', (_, res) => {

    res.send("Welcome to server");
});

//Routes
app.use('/api/student', StudentRoute);
app.use('/api/acta', ActaRoute);

//Not found page handler
app.use((_, res) => {

    res.status(404).json({ message: "page not found" });
});

//Listen port
app.listen(app.get('port'), _ => {
    try {
        console.log(`Server running on port ${app.get('port')}`);
    } catch (error) {
        console.log(error.message);
    }
});