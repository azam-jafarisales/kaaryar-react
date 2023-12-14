import './style.css'
import Header from '../Header'
import Items from "../Items"
import Actions from "../Actions"
import { useState, useEffect } from 'react'

function Container() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem(['items'])));
    const [inpValue, setInpValue] = useState('');

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    function handleNewTask() {
        if (inpValue.trim() !== "") {
            if (inpValue !== '') {
                setItems(previouseItems => [...previouseItems, { value: inpValue, id: new Date().getTime() }]);
                setInpValue('');
            }
        }
    }

    function handleChange(e) {
        setInpValue(e.target.value)
    }

    function handleDeleteAll() {
        setItems([])
    }

    function handleDeleteTsak(id) {

        setItems(items.filter((item)=>item.id!==id))
        localStorage.setItem('items', JSON.stringify(items));
    
    }

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            handleNewTask();
        }
    }



    return (
        <div className='container'>
            <Header />
            <Items items={items} onDeleteTask={handleDeleteTsak} />
            <Actions onAddClick={handleNewTask} onInpChange={handleChange} inpValue={inpValue} onDeleteclick={handleDeleteAll} keyHandle={handleKeyPress}/>
        </div>
    )
}

export default Container