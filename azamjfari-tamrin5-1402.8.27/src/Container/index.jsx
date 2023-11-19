import './style.css'
import Header from '../Header'
import Items from "../Items"
import todoes from '../works.json'
import Actions from "../Actions"

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