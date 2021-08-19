import express from 'express';
import { createActa, deleteActa } from '../controllers/Acta.js';

const ActaRoute = express.Router();

//Create Acta and asign it to student
ActaRoute.post('/', createActa);
// Update or Delete relation between student & acta 
ActaRoute.put('/:id', deleteActa);

export default ActaRoute;