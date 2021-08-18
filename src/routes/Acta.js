import express from 'express';
import { createActa, deleteActa } from '../controllers/Acta.js';

const ActaRoute = express.Router();

ActaRoute.post('/', createActa);
ActaRoute.put('/:id', deleteActa);

export default ActaRoute;