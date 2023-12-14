import './style.css'
import Item from '../Item'

function items({ items , onDeleteTask}){ 
    return (
        <div className='items' >
            {items.map((item)=><Item key={item.id} item={item.value} onDeleteTask={onDeleteTask} id={item.id} />)}
        </div>
    )
}

export default items;