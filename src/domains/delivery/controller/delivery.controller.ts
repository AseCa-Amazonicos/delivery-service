import {Router} from 'express';
import {DeliveryService} from '../service/delivery.service';
import {DeliveryServiceImpl} from '../service/delivery.service.impl';

export const deliveryRouter = Router();

const deliveryService: DeliveryService = new DeliveryServiceImpl();

deliveryRouter.post('/delivery', async (req, res) => {
    const {deliveryState} = req.body;
    const delivery = await deliveryService.changeDeliveryState(deliveryState);
    res.send(delivery);
});

deliveryRouter.get('/:delivery_id', async (req, res) => {
    const {delivery_id} = req.params;
    const delivery = await deliveryService.getDeliveryById(delivery_id);
    res.send('Delivery retrieved');
});
