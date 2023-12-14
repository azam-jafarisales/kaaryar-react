import './style.css'
import Comment from '../Comment';

function Comments({ orderComments }) {
  const commentsList = orderComments.filter((comment) => comment.parentId )
    .map((item, index) => <Comment key={item.id} text={item.text} parentId={item.parentId} id={item.id} comments={orderComments} />)
  return (
    <div className='comments'>
      {commentsList}
    </div>
  )
}



export default Comments;