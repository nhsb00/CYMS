import React from 'react'

class Comment extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            comment: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments()
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
         e.preventDefault();
        this.props.createComment(this.state)
    }

    render () {
        // const { comment } = this.props;

        if (!this.props.comments) return null;

        let comments = this.props.comments.map((comment) => {
            return (
                    <ul className="product-item" key={comment._id}>
                        <li>${comment.content}</li>
                    </ul>
            )
        })
        return (
            <div> Comment{comments}
                <form onSubmit={this.handleSubmit}>
                        <textarea 
                            style={{width: '50%', borderRadius: '5px'}}
                            onChange={this.update('content')}
                            value={this.state.content}
                            placeholder="leave comment">
                        </textarea>
                    <button>comment</button>
                </form>
            </div>
        )
    }
}

export default Comment;
