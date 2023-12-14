import "./style.css"


function GetItem({ work }) {
   
    return (
        <div className="item">
            <p className="item_p">{work}</p>
            <button className="item-close-button"
            >X</button>
        </div>
    )
}

export default GetItem;