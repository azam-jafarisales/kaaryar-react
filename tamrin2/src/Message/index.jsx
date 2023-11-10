import "./style.css";
function message({ id, body, isPeer }) {
if(isPeer===true){
    return (
        <div key={id} className="yourMessages">{body}</div>
    )
}else{
    return(
        <div key={id} className="myMessages">{body}</div>
    )
}
}

export default message;