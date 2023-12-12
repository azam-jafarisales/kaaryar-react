
import './style.css'
function getInput({ onInpChange , inpValue , keyHandle}){
   
    return (
        <label>
            <input type="text" className="inp" onChange={onInpChange} value={inpValue} onKeyDown={keyHandle}/>
        </label>
    )
}

export default getInput;