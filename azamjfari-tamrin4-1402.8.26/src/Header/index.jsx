import './style.css'

function header() {
    return (
        <header className='header'>
            <div className='header_row1'>
                <div><h2>Sell</h2></div>
                <div><h2>Buy</h2></div>
            </div>
            <div className='header_row2'>
                <div className='header_row2_column'>Total(SAT)</div>
                <div className='header_row2_column'>Amount(SAT)</div>
                <div className='header_row2_column header_row2_column_3'>PRICE()</div>
                <div className='header_row2_column header_row2_column_4'>RIAL</div>
                <div className='header_row2_column'>Amount(SAT)</div>
                <div className='header_row2_column'>Total(SAT)</div>
            </div>
        </header>

    )

}

export default header;