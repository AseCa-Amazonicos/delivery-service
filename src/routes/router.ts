import {Router} from 'express';
import {deliveryRouter} from '../domains/delivery/controller';

export const router = Router();

router.use('/delivery', deliveryRouter);


