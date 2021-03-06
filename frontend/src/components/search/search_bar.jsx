import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            keyword: "",
            products: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    


    handleSubmit(e) {
        e.preventDefault();

        this.props.fetchSearchProducts(this.state.keyword)
        this.setState({keyword: ''})
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render() {
        
        return (
            <div className='search-bar'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.keyword}
                        onChange={this.update('keyword')}
                        placeholder="Search by keyword"
                    />
                {/* <button>Search</button> */}
                </form>
            
              
            </div>
        )
    }
}

export default SearchBar;