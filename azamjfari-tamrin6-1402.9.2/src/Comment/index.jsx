import './style.css'

function Comment({ text, id, comments }) {
    const newComments = comments.filter((item) => item.parentId === id);
    return (
        <div className='comment'>
            <div className='comment_body'>
                <div className='comment_header'>
                    <span className='comment_header_span'>Dec 20 ,2014 <span className='comment_header_name_span'>johnDoe</span> says:</span>
                    <span className='comment_header_reply_span'>reply</span>
                </div>
                <div className='comment_text'>
                    {text}
                </div>
            </div>
            {
                newComments.map((item) => {
                    return (
                        <Comment id={item.id} text={item.text} comments={comments} />
                    )
                })
            }
        </div>
    )
}

export default Comment;