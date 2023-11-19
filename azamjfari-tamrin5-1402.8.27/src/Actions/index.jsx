import './style.css'
import Button from '../Button'
function actions(){
    return (
        <div className='actions'>
            <Button className="div_secondary_button" button_title="منصرف شدم" />
            <Button className="div_primary_button"   button_title="تایید" />
        </div>
    )
}

export default actions;