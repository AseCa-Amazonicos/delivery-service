import './App.css';
import {useEffect, useState} from 'react';
import {getOrdersId, getOrdersInShipping, getOrdersToBeShipped, updateState} from './service';

const App = () => {
    const [orders, setOrders] = useState([]);
    const [newState, setNewState] = useState({
        deliveryId: '',
        deliveryState: '',
    });

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = async () => {
        const response = await getOrdersToBeShipped();
        const response2 = await getOrdersInShipping();
        setOrders(response.concat(response2));
    };

    const onChangeDeliveryId = event => {
        setNewState({...newState, deliveryId: event.target.value});
    };

    const onChangeDeliveryState = event => {
        setNewState({...newState, deliveryState: event.target.value});
    };

    const updateDeliveryState = async () => {
        await updateState(newState);
    };

    return (
        <div className="App">
            <div className="form-div">
                <h1 className={'title'}>Delivery Webpage</h1>
                <h3>Select Id and update state</h3>
                <div className={'send-form-div'}>
                    <button
                        className={'refresh-button'}
                        onClick={() => getOrders()}
                    >
                        🔄
                    </button>
                    <select
                        id="order-id"
                        onChange={event => onChangeDeliveryId(event)}
                    >
                        {orders.map((order, key) => {
                            return <option key={key}>{order.id}</option>;
                        })}
                    </select>
                    <select
                        id="order-status"
                        onChange={event => onChangeDeliveryState(event)}
                    >
                        <option>Ready to be Shipped</option>
                        <option>Shipping</option>
                        <option>Shipped</option>
                    </select>
                    <button
                        className={'submit-button'}
                        type="submit"
                        onClick={() => updateDeliveryState()}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div className="list-of-orders">
                <h1>Orders</h1>
                <table className={'orders-table'}>
                    <tbody>
                    <tr className={'tr-table'}>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Address</th>
                        <th>Amount</th>
                    </tr>
                    </tbody>
                    {orders.map((order, key) => {
                        return (
                            <tr>
                                <td>{order.id}</td>
                                <td>{order.status}</td>
                                <td>{order.address}</td>
                                <td>{order.totalAmount}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
};

export default App;
