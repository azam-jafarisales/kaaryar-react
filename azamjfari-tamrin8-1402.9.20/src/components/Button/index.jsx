import './style.css'

function button({className , button_title , onBtnClick}){
    return (
        <button className={`button ${className}`} onClick={onBtnClick}>{button_title}</button>
    )
}

export default button;