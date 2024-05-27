import {Router} from 'express';
import {DeliveryService} from '../service/delivery.service';
import {DeliveryServiceImpl} from '../service/delivery.service.impl';

export const deliveryRouter = Router();

const deliveryService: DeliveryService = new DeliveryServiceImpl();

deliveryRouter.post('/', async (req, res) => {
    const {deliveryId, deliveryState} = req.body;
    const delivery = await deliveryService.changeDeliveryState(deliveryState);
    console.log(deliveryId);
    console.log(deliveryState);
    res.json({message: 'Delivery state changed'});
});

deliveryRouter.get('/', async (req, res) => {
    // const delivery = await deliveryService.getDeliveryById(delivery_id);
    res.json({data: ['191838045', '2358131', '34313143']});
});
