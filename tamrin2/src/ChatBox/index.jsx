import messages from '../messages.json'
import './style.css'
import Actions from '../Actions'
import MessagesList from '../MessageList';
function makeChatBox(){
    return (
        <div className="chatBox">
            <MessagesList messages={messages} />
            <Actions />
        </div>
    )
}
export default makeChatBox