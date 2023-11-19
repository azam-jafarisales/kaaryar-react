import "./style.css"


function getItem({work}){
    return (
        <div className="item">
            <p className="item_p">{work}</p>
            <button className="item-close-button" >X</button>
        </div>
    )
}

export default getItem;