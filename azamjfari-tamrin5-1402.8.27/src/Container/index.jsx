import './style.css'
import Header from '../Header'
import Items from "../Items"
import todoes from '../toDo.json'
import Actions from "../Actions"
console.log(todoes)

function container(){
    return (
        <div className='container'>
            <Header />
            <Items list={todoes} />
            <Actions />
        </div>
    )
}

export default container