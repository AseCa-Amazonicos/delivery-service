export interface DeliveryService {
    changeDeliveryState(deliveryState: string): Promise<void>;
    getDeliveryById(delivery_id: string): Promise<void>;
}
