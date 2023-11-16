import './style.css'
import OrderItem from '../OrderItem'

function list({ orders }) {

    // let sum1 = 0
    const sellOrders = orders.filter((order) => order.type === "sell")
        .map((item, index) => (<OrderItem key={index} amount={item.quantity} price={item.price} type={item.type}  />));

    // let sum = 0

    const buyOrders = orders.filter((order) => order.type === "buy")
        .map((item, index) => (<OrderItem key={index} amount={item.quantity} price={item.price} type={item.type}  />) );

    return (
        <div className='list'>
            <div className='list-sell'>{sellOrders}</div>
            <div className='list_buy'>{buyOrders}</div>
        </div>
    )
}

export default list;