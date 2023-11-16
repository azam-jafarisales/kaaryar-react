import './style.css'

function header() {
    return (
        <header className='header'>
            <div className='header_row1'>
                <div className='header_row1_column1'><h2>Sell</h2></div>
                <div className='header_row1_column2'><h2>Buy</h2></div>
            </div>
            <div className='header_row2'>
                <div className='header_row2_column1'>Total(SAT)</div>
                <div className='header_row2_column2'>Amount(SAT)</div>
                <div className='header_row2_column3'>PRICE()RIAL</div>
                <div className='header_row2_column4'>Amount(SAT)</div>
                <div className='header_row2_column5'>Total(SAT)</div>
            </div>
        </header>

    )

}

export default header;