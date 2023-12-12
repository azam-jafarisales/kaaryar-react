import './style.css'
import Button from '../Button'
import InputText from '../Input'
function actions({onAddClick ,onDeleteclick ,onInpChange ,inpValue , keyHandle}){
   
    
    return (
        <div className='actions'>
            <InputText onInpChange={onInpChange} inpValue={inpValue} keyHandle={keyHandle} />
            <div className='actions_btns'>
            <Button className="div_secondary_button" button_title="حذف همه" onBtnClick={onDeleteclick} />
            <Button className="div_primary_button"   button_title="کار جدید" onBtnClick={onAddClick}/>
            </div>
        </div>
    )
}

export default actions;