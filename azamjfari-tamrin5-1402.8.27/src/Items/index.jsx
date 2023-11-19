import './style.css'
import Item from '../Item'

function items({list}){
   const toDoList = list.map((work)=><Item key={work.id} work={work.toDo} />);
    return (
        <div className='items'>
            {toDoList}
        </div>
    )
}

export default items;