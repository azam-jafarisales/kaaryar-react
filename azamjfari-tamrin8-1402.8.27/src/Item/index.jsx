import "./style.css"


function GetItem({ item , onDeleteTask=()=>{} , id }) {

    return (
        <div className="item" id={id}>
            <p className="item_p">{item}</p>
            <button className="item-close-button" onClick={()=>{onDeleteTask(id)}}  >X</button>
        </div>
    )
}

export default GetItem;