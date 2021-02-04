import React from 'react';

import '../../stylesheets/splash-page.css'
import ProductIndexContainer from '../product/product_index_container'
import Footer from "../footer/footer";

import MainPageContainer from '../main/main_page_container';

class Splash extends React.Component {
    render () {
        return (
            <div>
             <MainPageContainer /> 
            <div className="splash">
                Splash Page ( Product List )
                <ProductIndexContainer />
            </div>
            <Footer />
            </div>
        )
    }
}

export default Splash;