import {Router} from 'express';
import {DeliveryService} from '../service/delivery.service';
import {DeliveryServiceImpl} from '../service/delivery.service.impl';

export const deliveryRouter = Router();

const deliveryService: DeliveryService = new DeliveryServiceImpl();

deliveryRouter.post('/', async (req, res) => {
    const {deliveryId, deliveryStatus} = req.body;
    const delivery = await deliveryService.changeDeliveryState(deliveryStatus);
    console.log(deliveryId);
    console.log(deliveryStatus);
    res.json({message: 'Delivery state changed'});
});

deliveryRouter.get('/', async (req, res) => {
    // const delivery = await deliveryService.getDeliveryById(delivery_id);
    res.json({data: ['191838045', '2358131', '34313143']});
});
