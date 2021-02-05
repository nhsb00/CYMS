import React from 'react'
import '../../stylesheets/product-show.css';

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

        // if (!comment) return null;

        return (
            <div className='comment-container'>
                <div className='comment' > 
                <h1>Leave a Comment</h1>
                    <form onSubmit={this.handleSubmit}>
                            <textarea 
                                style={{resize: 'none', height: '100px', width: '50%', borderRadius: '5px'}}
                                onChange={this.update('content')}
                                value={this.state.content}
                                placeholder="leave a comment">
                            </textarea>
                            <br/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Comment;
