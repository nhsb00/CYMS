import { connect } from 'react-redux';
import Cart from './cart';
import { fetchCartItems, removeProduct } from '../../actions/cart_actions'

const msp = (state, ownProps) => {
    return { 
        cart: state.entities.cart.data,
        user: state.session.user.id,
        // product: state.entities.products.data
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        removeProduct: (productId) => dispatch(removeProduct(productId))
    }
}

export default connect(msp, mdp)(Cart);


// import { connect } from 'react-redux';
// import Cart from './cart';
// import { fetchUsersProducts } from "../../actions/cart_actions";

// const msp = (state, ownProps) => {
//     return {
//         cart : state.entities.cart.data,
//         user: state.session.user.id
//     }
// }
// const mdp = (dispatch) => {
//     return {
//         fetchUsersProducts: (userId) => dispatch(fetchUsersProducts(userId))
//     }
// }

// export default connect(msp, mdp)(Cart);