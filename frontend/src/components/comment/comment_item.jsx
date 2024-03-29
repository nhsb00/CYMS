import React, { Component } from 'react';

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    

 
        this.deleteComment = this.deleteComment.bind(this)
        this.editComment = this.editComment.bind(this)
    }

    // componentDidMount(){
    //     
    // }

    // componentDidUpdate(){
    //     
    // }
    deleteComment(){
        
        let commentId = this.props.comment._id
        this.props.deleteComment(commentId).then(() => this.props.fetchProductComments(this.props.productId))
    }
    editComment(){
        
        let comment = this.props.comment
        this.props.editComment(comment).then(() => this.props.fetchProductComments(this.props.productId))
    }

    deleteEditButtons(){
        return (
            <ul className='comment-button-containers'>
            <li><button onClick={this.deleteComment}>Delete Comment</button></li>
            {/* <li><button onClick={this.editComment}>Edit Comment</button></li> */}
            </ul>
        )
    }
    renderInfo(){       

    }

    render() {
        let {comment} = this.props
        if (typeof (comment.user)  === 'object'){
        
        
        let names;
        let commentCreater = false;
        
           
            let firstName = comment.user.firstName
            let lastName = comment.user.lastName
            firstName = firstName[0].toUpperCase() + firstName.slice(1)
            lastName = lastName[0].toUpperCase() + lastName.slice(1)
            names = <li>Posted by: {firstName} {lastName}</li>
            
            if (this.props.loggedIn){
            commentCreater = (this.props.comment.user._id === this.props.user.id)
            }
            const dateObj = new Date(comment.date)
            let date = new Intl.DateTimeFormat('en-US').format(dateObj);
           
             const deleteEditButtons = commentCreater ? this.deleteEditButtons() : null
            
            return (
                <div>

                      
                        <li id='comment-content'>"{comment.content}"</li>
                                {names}
                        <li>Review left on: {date}</li>
                            {deleteEditButtons}
                       
                        
                    </div>
            )} else {
                return null
            }
        }
   
}


export default CommentItem;