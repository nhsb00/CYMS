import React from 'react';
import { Redirect } from 'react-router-dom';
import '../../stylesheets/product-show.css';
import CommentContainer from '../comment/comment_container';

class ProductShow extends React.Component{

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params._id)
    }

    render() {
        if (!this.props.product){
            return null;
        } 
    
        return (
            <div>
                <div className='product-show'>
                        <div className='image-container'>
                            <img src={this.props.product.image} />
                        </div>
                        <div className='product-text-container'>
                            <div>
                                <h1>{this.props.product.title}</h1>
                                <h2>About this item:</h2>
                                <p>{this.props.product.description}</p>
                            </div>
                        </div>
                        <div className='price-container'>
                            <div className='inner'>
                                <h1>${this.props.product.price}</h1>
                                <div className='p-container'>
                                    <p className='a'>+ $9.99 shipping</p>
                                    <p className='b'>Arrives: Feb 18 - 22</p>
                                    <p className='c'>In stock.</p>
                                    <p className='d'>Usually ships within 2 to 3 days.</p>
                                </div>
                                <div className='button-container'>
                                    <button>Add to Cart</button>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                </div>
                    <CommentContainer/>       
            </div>
            )

    }
}

export default ProductShow;