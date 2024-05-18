import {DeliveryService} from './delivery.service';

export class DeliveryServiceImpl implements DeliveryService {
    async changeDeliveryState(deliveryState: string): Promise<void> {
        //acá hay que ver si mete algun check o solo se fija que no esté vacío.
        console.log(`Delivery state changed to ${deliveryState}`);
    }

    async getDeliveryById(delivery_id: string): Promise<void> {
        console.log(`Delivery with id ${delivery_id} retrieved`);
    }
}
