import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            keyword: "",
        };

        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    // componentDidMount(){
    //     this.props.fetchProducts()
    //     debugger
    // }

    handleSubmit(e) {
        e.preventDefault();
        // const products = this.props.products
        // debugger
        this.props.fetchSearchProducts(this.state.keyword)
        .then((this.props.history.push(`/search/${this.state.keyword}`)))   
        .then(this.setState({keyword: ''}))    
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render() {
        debugger
        return (
            <div className='search-bar'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.keyword}
                        onChange={this.update('keyword')}
                        placeholder="Search products by keyword"
                    />
                </form>    
            </div>
        )
    }
}

export default SearchBar;