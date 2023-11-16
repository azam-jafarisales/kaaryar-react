import './style.css'

function orderItem({amount,price,type ,total}){
    if(type==="sell"){
        return (
            <div className='sell'>
                <h3>{total}</h3>
                <h3 className='title'>{amount}</h3>
                <h3 className='title'>{price}</h3>
            </div>
        )
    }else{
        return (
            <div className='sell'>
                <h3 className='title'>{price}</h3>
                <h3 className='title'>{amount}</h3>
                <h3>{total}</h3>
            </div>
        )
    }
   
    
    // return(
    //     <div>
    //         <h3>{amount}</h3>
    //         <h3>{price}</h3>
    //         <h3>{type}</h3>
    //     </div>
    // )
    }

    export default orderItem