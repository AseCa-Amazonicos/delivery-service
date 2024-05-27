import axios from 'axios';

const baseURL = process.env.BASE_URL || 'http://localhost:8080';

const api = axios.create({
    baseURL,
});

export const updateState = async (state) => {
    console.log(state.deliveryState)
    await api.post('api/delivery', {
            deliveryId: state.deliveryId,
            deliveryState: state.deliveryState,
    });
};

export const getOrdersId = async () => {
    try {
        const ordersId = await api.get('api/delivery');
        return ordersId.data;
    } catch (error) {
        console.log(error);
    }
};

export const getOrdersToBeShipped = async () => {
    try {
        const ordersId = await api.get('api/order/ready_to_ship');
        return ordersId.data;
    } catch (error) {
        console.log(error);
    }
}

export const getOrdersInShipping = async () => {
    try {
        const ordersId = await api.get('api/order/shipping');
        return ordersId.data;
    } catch (error) {
        console.log(error);
    }
}
