import './style.css'
import Item from '../Item'

function items({ items , onDeleteTask, id}){ 
    return (
        <div className='items' >
            {items.map((item, index)=><Item key={item.id} item={item.value} onDeleteTask={onDeleteTask} id={item.id} />)}
        </div>
    )
}

export default items;