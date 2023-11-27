import './style.css'
import Comments from '../Comments'
import Data from '../OrderComments.json'
import Header from '../Header'
function commentsBox() {
    return (
        <div className='commentsBox'>
            <Header />
            <Comments orderComments={Data} />
        </div>
    )
}

export default commentsBox;