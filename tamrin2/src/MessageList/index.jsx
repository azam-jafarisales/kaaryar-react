import Message from '../Message'
import "./style.css"
function messages({ messages }) {
    return (
        <div className='messages-List'>
            {messages.map((item) =>
                <Message id={item.id} body={item.body} isPeer={item.isPeer} />)}
        </div>
    )
}

export default messages;