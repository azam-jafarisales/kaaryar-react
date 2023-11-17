import './style.css'
import Header from '../Header'
import List from '../List'
import orders from '../orders.json'

function orderShell(){
    return (
        <section className='wrapper'>
            <Header />
            <List orders={orders} />
        </section>
    )
}

export default orderShell;