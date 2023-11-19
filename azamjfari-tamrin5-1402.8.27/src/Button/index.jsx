import './style.css'

function button({className , button_title}){
    return (
        <button className={`button ${className}`}>{button_title}</button>
    )
}

export default button;