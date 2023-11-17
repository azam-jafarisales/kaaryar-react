import './style.css'

function orderItem({ amount, price, type, total, maxTotal }) {
    const sellStyle = {
        backgroundColor: "#FDE4E4",
        width:`${total/maxTotal *100}%`,
       
      };

    const buyStyle = {
        backgroundColor: "#DFFFE7",
        width:`${total/maxTotal *100}%`,
       
      };
    if (type === "sell") {
        return (
            <div className='order'>
                <div className='order-div'><h3>{total}</h3></div>
                <div className='order-div'><h3>{amount}</h3></div>
                <div className='order-div order-div-3'><h3 className='order-div-h3' style={sellStyle}>{price}</h3></div>
            </div>
        )
    } else {
        return (
            <div className='order'>
                <div className='order-div order-div-4'><h3 style={buyStyle}>{price}</h3></div>
                <div className='order-div '><h3>{amount}</h3></div>
                <div className='order-div'><h3>{total}</h3></div>
            </div>
        )
    }
}

export default orderItem