import './style.css'
import Item from '../Item'

function items({list}){
   const toDoList = list.map((todo)=><Item key={todo.id} work={todo.toDo} />);
   console.log(toDoList)
    return (
        <div className='items'>
            {toDoList}
        </div>
    )
}

export default items;